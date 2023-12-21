export const reminder_by = (quantity: number, divider: number): number => {
  return Math.abs(quantity) % divider
}
