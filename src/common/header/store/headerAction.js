export const SEARCH_FOCUS = 'search_focus'
export const SEARCH_BLURS = 'search_blurs'

export const searchFocus = () => {
  return {
    type: SEARCH_FOCUS
  }
}

export const searchBlurs = () => {
  return {
    type: SEARCH_BLURS
  }
}
