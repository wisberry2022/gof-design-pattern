import { Beverage } from "./Beverage.ts";

export class Coffee extends Beverage {
  brew() {
    console.log("커피 Brew!");
  }

  addSugar() {
    console.log(" 커피 설탕 넣기!");
  }
}
