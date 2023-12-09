import { vars } from '@consts'

export default (color) => {
  if (!color) return void 0

  return { backgroundColor: vars[`${color}_color`] }
}
