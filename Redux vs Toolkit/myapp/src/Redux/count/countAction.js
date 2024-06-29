import { DECREASE, INCREASE } from "./countType"


export var increase = () => {
  return {
    type: INCREASE
  }
}
export var decrease = () => {
  return {
    type: DECREASE
  }
}