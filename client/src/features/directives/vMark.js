import { vars } from '@consts'

export default {
  mounted: (el) => {
    el.style.fontFamily = vars.font_family__mark
    el.style.fontSize = vars.font_size__mark
    el.style.fontWeight = vars.font_weight__mark
    el.style.lineHeight = vars.line_height__mark
    el.style.textTransform = vars.transform__mark
  },
}
