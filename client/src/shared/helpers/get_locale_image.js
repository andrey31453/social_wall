import { assets_folder } from '@consts'

export default (locale_folder, image_name) => {
  return `${assets_folder}/${locale_folder}/${image_name}`
}
