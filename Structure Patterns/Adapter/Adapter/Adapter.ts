import { Adaptee, Target } from "../Type.ts";

export class Adapter implements Target {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  display(text: string) {
    this.adaptee.specificRequest(text);
  }
}
