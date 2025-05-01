import { RequestInterface } from "../type.ts";

export class FAQRequest implements RequestInterface {
  type: string;

  constructor() {
    this.type = "FAQ";
  }

  getType() {
    return this.type;
  }
}
