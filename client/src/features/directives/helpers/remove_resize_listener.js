export default (cb) => {
  window.removeEventListener('resize', cb)
}
