export default (input) => {
  let counter = 0
  input.value.forEach((elem) => (elem.id = elem.id || ++counter))
}
