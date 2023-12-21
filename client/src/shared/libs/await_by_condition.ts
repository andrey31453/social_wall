import { delay } from '@libs'

export const await_by_condition = async (
  condition: Function
): Promise<void> => {
  if (condition()) return void 0

  await delay()
  return await_by_condition(condition)
}
