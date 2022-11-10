import numberify from "./Utils/numberify"
import { msUnits } from "./Utils/units"
import { UnitTypes } from "./Types/Types"


export const timeToMs = (num: number | string, options: { unit: UnitTypes, convertTo?: UnitTypes = "ms" }): number => {
    if(typeof num === "string") num = Number(num)
    switch(options.unit){
      case "ms":
      case "millisecond":
        return num
      case "s":
      case "second":
            return num * msUnits.second
      case "m":
      case "minute":
            return num * msUnits.minute
      case "h":
      case "hour":
            return num * msUnits.hour
      case "d":
      case "day":
            return num * msUnits.day
      case "w":
      case "week":
            return num * msUnits.week
      case "mo":
      case "month":
            return num * msUnits.month
      case "y":
      case "year":
            return num * msUnits.year
      case "c":
      case "century":
            return num * msUnits.century
      case "mi":
      case "millenium":
            return num * msUnits.millenium
    }
}


export const msToTime = (num: number | string, options?: { unit: UnitTypes }) => {
    if(typeof num === "string") num = Number(num)
    switch(options.unit){
      case "ms":
      case "millisecond":
        return num
      case "s":
      case "second":
            return num / msUnits.second
      case "m":
      case "minute":
            return num / msUnits.minute
      case "h":
      case "hour":
            return num / msUnits.hour
      case "d":
      case "day":
            return num / msUnits.day
      case "w":
      case "week":
            return num / msUnits.week
      case "mo":
      case "month":
            return num / msUnits.month
      case "y":
      case "year":
            return num / msUnits.year
      case "c":
      case "century":
            return num / msUnits.century
      case "mi":
      case "millenium":
            return num / msUnits.millenium
    }
}
