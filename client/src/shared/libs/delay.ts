export const delay = (ms: number = 50): Promise<void> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return void res()
    }, ms)
  })
}
