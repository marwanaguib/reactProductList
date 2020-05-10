export const TOGGLE_LOADER = 'TOGGLE_LOADER';
export const ERR_MSG = 'ERR_MSG';


export const toggleLoader = (item) => {
  return{
    type: TOGGLE_LOADER
  }
}

export const errMsg = (msg) => {
    return{
      type: ERR_MSG,
      msg
    }
  }