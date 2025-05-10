import { TemplateMethod } from "../Type.ts";

export abstract class Beverage implements TemplateMethod {
  make() {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addSugar();
  }

  protected boilWater() {
    console.log("물 끓이기!");
  }

  protected brew() {
    console.log("Brew!");
  }

  protected pourInCup() {
    console.log("컵에 붓기!");
  }

  protected addSugar() {
    console.log("설탕 넣기!");
  }
}
