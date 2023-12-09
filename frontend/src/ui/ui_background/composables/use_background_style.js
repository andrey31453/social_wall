import { backgrounds } from '../assets'

export default (background, current_model) => {
  if (!background) return void 0

  return {
    backgroundImage: `url(${backgrounds[background](current_model)})`,
  }
}
