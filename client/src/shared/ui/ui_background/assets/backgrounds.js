import { get_locale_image } from '@helpers'

const default_folder = 'backgrounds'
const car_folder = 'cars'
const name_folder = 'model_names'

export default {
  mounts: () => get_locale_image(default_folder, 'mounts.png'),
  model_name: (current_model) =>
    get_locale_image(name_folder, `${current_model}.svg`),
  car: (current_model) => get_locale_image(car_folder, `${current_model}.png`),
  shadow: (current_model) => get_locale_image(car_folder, `shadow.png`),
}
