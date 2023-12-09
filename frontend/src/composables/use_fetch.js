import { ref } from 'vue'
import { type_is } from '@helpers'

//
// helpers
//

// fetch_data
const fetch_data = async (api, error) => {
  return await fetch(api.url, {
    method: api.method,
  })
    .then((r) => r)
    .catch((e) => (error.value = e))
}

// working_data
const working_methods = {
  json: (v) => v.json(),
}

const working_data = async (data, api) => {
  const working_method = api.type ?? 'json'

  return await working_methods[working_method](data)
}

// select_data
const not_selections_data = (data) => {
  return [ref(data)]
}

const get_data_for_keys_list = (data, keys_list) => {
  if (keys_list.length === 1) return data[keys_list]

  return keys_list.reduce((acc, key) => {
    acc = acc[key]
    return acc
  }, data)
}

const get_keys_list = (key) => {
  const splitter = ' '

  return key
    .replace(/[\[\]\.]/g, splitter)
    .trim()
    .replace(new RegExp(splitter + splitter, 'g'), splitter)
    .split(splitter)
}

const get_data_for_key = (data, key) => {
  const keys_list = get_keys_list(key)

  return get_data_for_keys_list(data, keys_list)
}

const get_simple_selection_data = (data, selection) => {
  return ref(get_data_for_key(data, selection))
}

const filters_wrapper = (v, filters) => {
  let result = true

  filters.forEach((filter_func) => {
    if (!filter_func(v)) result = false
  })

  return result
}

const get_filtered_data = (data, filters) => {
  if (!filters) return data
  if (type_is(filters, 'function')) return data.filter((v) => filters(v))

  return data.filter((v) => filters_wrapper(v, filters))
}

const get_ref_from_data = (data, not_ref) => {
  return not_ref ? data : ref(data)
}

const get_sorted_data = (data, sort) => {
  if (!sort) return data
  if (type_is(sort, 'boolean')) return data.sort()

  return data.sort((a, b) => sort(a, b))
}

const get_complex_selection_data = (data, selection) => {
  const target_data = get_data_for_key(data, selection.key)
  const filtered_data = get_filtered_data(target_data, selection.filters)
  const sorted_data = get_sorted_data(filtered_data, selection.sort)

  return get_ref_from_data(sorted_data, selection.not_ref)
}

const get_selection_data = (data, selection) => {
  if (type_is(selection, 'string')) {
    return get_simple_selection_data(data, selection)
  }

  return get_complex_selection_data(data, selection)
}

const is_selections_data = (data, selections) => {
  return Object.keys(selections).reduce((acc, selection_key) => {
    const selection = selections[selection_key]
    const selection_data = get_selection_data(data, selection)
    acc.push(selection_data)

    return acc
  }, [])
}

const select_data = (data, selections) => {
  if (!selections.length) return not_selections_data(data)

  return is_selections_data(data, selections)
}

//
// general
//

export default async (api, ...selections) => {
  const error = ref(null)

  const bd_data = await fetch_data(api, error)
  const working_bd_data = await working_data(bd_data, api)

  return [error, ...select_data(working_bd_data, selections)]
}
