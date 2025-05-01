export type Pizza = {
  dough: "THIN" | "THICK";
  topping: "CHEESE" | "POTATO" | "PEPPERONI";
  crust: "CHEESE" | "NORMAL";
  size: "SMALL" | "MEDIUM" | "LARGE";
  source: "HOT SOURCE" | "ORIENTAL";
};

export interface PizzaBuilder {
  pizza: Pizza;

  setDough(dough: Pizza["dough"]): PizzaBuilder;
  setTopping(topping: Pizza["topping"]): PizzaBuilder;
  setCrust(crust: Pizza["crust"]): PizzaBuilder;
  setSize(crust: Pizza["size"]): PizzaBuilder;
  setSource(source: Pizza["source"]): PizzaBuilder;

  get(): Pizza;
}
