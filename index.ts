import numberify from "./Utils/numberify"
import { msUnits } from "./Utils/units"
import { UnitTypes } from "./Types/Types"


export const timeToMs = (num: number | string, unit: UnitTypes): number => {
    if(typeof num === "string") num = Number(num)
    switch(unit){
      case "ms":
      case "millisecond":
        return num
      case "s":
      case "second":
            return num * msUnits.second
      case "m":
      case "minute":
            return num * msUnits.minute
    }
}
