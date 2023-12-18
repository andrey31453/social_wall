import { delay } from '@libs'

type t_method = 'get' | 'post' | 'delete' | 'put'
enum e_methods {
  get = 'get',
  post = 'post',
  delete = 'delete',
  put = 'put',
}
type t_fetchs = {
  [key in e_methods]: Function
}

const get_json_data = async (d) => await d.json()

const use_get_fetch = async (uri) => {
  const response = await fetch(uri)
  return await get_json_data(response)
}

const use_put_fetch = async (uri, body) => {
  return await fetch(uri, {
    method: 'put',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
}

const use_post_fetch = async (uri, body) => {
  const response = await fetch(uri, {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await get_json_data(response)

  return Object.assign(body, data)
}

const use_delete_fetch = (uri, id) => {
  fetch(uri + id, {
    method: 'delete',
  })
}

const fetchs: t_fetchs = {
  get: use_get_fetch,
  post: use_post_fetch,
  delete: use_delete_fetch,
  put: use_put_fetch,
}

export const use_fetch = async (
  uri: string,
  method: t_method = 'get',
  options = null
): Promise<any> => await fetchs[method](uri, options)
