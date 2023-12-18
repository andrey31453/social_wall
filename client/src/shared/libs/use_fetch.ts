type t_method = 'get' | 'post' | 'delete'
enum e_methods {
  get = 'get',
  post = 'post',
  delete = 'delete',
}
type t_fetchs = {
  [key in e_methods]: Function
}

const get_json_data = async (d) => await d.json()

const use_get_fetch = async (uri) => {
  const bd_data = await fetch(uri)
  const json_data = await get_json_data(bd_data)

  return json_data
}

const use_post_fetch = async (uri, body) => {
  const bd_data = await fetch(uri, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(body),
  })

  return bd_data
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
}

export const use_fetch = async (
  uri: string,
  method: t_method = 'get',
  options = null
): Promise<any> => {
  return await fetchs[method](uri, options)
}
