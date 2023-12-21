import { delay } from '@libs'

export const wait_condition = async (condition: Function): Promise<void> => {
  if (condition()) return void 0

  await delay()
  return wait_condition(condition)
}
