import { reminder_by } from '@libs'

const get_word_declination = (word_form: string = ''): string => {
  return ' ' + word_form
}

const not_correct_word_forms = (word_forms: t_word_forms): boolean => {
  return !Array.isArray(word_forms) || !word_forms.length
}

const not_correct_quantities = (
  quantity: number,
  word_forms: t_word_forms
): boolean => {
  return word_forms.length !== 3 || typeof +quantity !== 'number'
}

const create_word_declination = (
  word_forms: t_word_forms,
  remainder_by_100: number,
  remainder_by_10: number
): string => {
  // 10 - 20
  if (remainder_by_100 > 10 && remainder_by_100 < 20)
    return get_word_declination(word_forms[2])

  // 2 - 5
  if (remainder_by_10 > 1 && remainder_by_10 < 5)
    return get_word_declination(word_forms[1])

  // 1
  if (remainder_by_10 == 1) return get_word_declination(word_forms[0])

  // other
  return get_word_declination(word_forms[2])
}

export type t_word_forms = [string, string, string]

export const word_declination = (
  quantity: number,
  word_forms: t_word_forms
): string => {
  // check for correct input data
  if (not_correct_word_forms(word_forms)) return get_word_declination()
  if (not_correct_quantities(quantity, word_forms))
    return get_word_declination(word_forms[0])

  const remainder_by_100 = reminder_by(quantity, 100)
  const remainder_by_10 = reminder_by(quantity, 10)

  return create_word_declination(word_forms, remainder_by_100, remainder_by_10)
}
