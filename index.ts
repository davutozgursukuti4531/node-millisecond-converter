import numberify from "./Utils/numberify"
import { msUnits } from "./Utils/units"


export const timeToMs = (num: number | string, unit): number => {
    if(typeof num === "string") num = Number(num)
    switch(unit){
      case "ms":
      case "millisecond":
        return num
    }
}
