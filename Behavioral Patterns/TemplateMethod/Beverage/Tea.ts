import { Beverage } from "./Beverage.ts";

export class Tea extends Beverage {
  brew() {
    console.log("차 Brew!");
  }

  addSugar() {
    console.log("차 설탕 넣기!");
  }
}
