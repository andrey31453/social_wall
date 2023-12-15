const not_arg_init = (arg) => {
  return !arg || !arg.includes('init')
}

export default (arg, cb, init = true) => {
  if (!init) return void 0
  if (not_arg_init(arg)) return void 0

  cb()
}
