export const delay = (ms): Promise<void> => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      return void res()
    }, ms)
  })
}
