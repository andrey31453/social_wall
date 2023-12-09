export default (target, type) =>
  Object.prototype.toString
    .call(target)
    .split(' ')[1]
    .toLowerCase()
    .includes(type)
