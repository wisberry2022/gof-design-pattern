import { RequestInterface } from "../type.ts";

export class RefundRequest implements RequestInterface {
  type: string;

  constructor() {
    this.type = "REFUND";
  }

  getType() {
    return this.type;
  }
}
