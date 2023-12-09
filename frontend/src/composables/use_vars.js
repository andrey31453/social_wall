import { onMounted } from 'vue'

export default (vars) => {
  const set_var = (vars_key) => {
    document.body.style.setProperty(`--${vars_key}`, vars[vars_key])
  }

  const set_vars = () => {
    Object.keys(vars).forEach(set_var)
  }

  onMounted(set_vars)
}
