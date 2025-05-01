import { RequestInterface } from "../type.ts";

export class SupportRequest implements RequestInterface {
  type: string;

  constructor() {
    this.type = "SUPPORT";
  }

  getType() {
    return this.type;
  }
}
