import { keys, locale_domain } from '@consts'
import { get_locale_image } from '@helpers'

export default async (target, locale_folder) => {
  target.forEach((elem) => {
    elem[keys.src] = get_locale_image(locale_folder, elem[keys.src])
    elem[keys.domain] = locale_domain
  })
}
