import { Pizza, PizzaBuilder } from "./type.ts";

export class PizzaStore implements PizzaBuilder {
  pizza: Pizza;

  constructor() {
    this.pizza = {} as Pizza;
  }

  static builder(): PizzaBuilder {
    return new PizzaStore();
  }

  setDough(dough: Pizza["dough"]) {
    this.pizza["dough"] = dough;
    return this;
  }

  setTopping(topping: Pizza["topping"]) {
    this.pizza["topping"] = topping;
    return this;
  }

  setCrust(crust: Pizza["crust"]) {
    this.pizza["crust"] = crust;
    return this;
  }

  setSize(size: Pizza["size"]) {
    this.pizza["size"] = size;
    return this;
  }

  setSource(source: Pizza["source"]) {
    this.pizza["source"] = source;
    return this;
  }

  get() {
    return this.pizza;
  }
}
