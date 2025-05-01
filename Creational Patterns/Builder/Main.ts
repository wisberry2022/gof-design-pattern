import { PizzaStore } from "./builder/PizzaStore.ts";

const pizza = PizzaStore.builder()
  .setDough("THICK")
  .setCrust("CHEESE")
  .setSize("LARGE")
  .setSource("HOT SOURCE")
  .setTopping("PEPPERONI")
  .get();

console.log(
  `피자:  ${pizza.dough} ${pizza.crust} ${pizza.size} ${pizza.source} ${pizza.topping}`
);
