import { ClientHandlerInterface, RequestInterface } from "../type.ts";

export abstract class CSHandler implements ClientHandlerInterface {
  next!: ClientHandlerInterface;

  setNext(handler: ClientHandlerInterface) {
    this.next = handler;
  }

  handle(request: RequestInterface) {
    if (!this.next) {
      return;
    }
    this.next.handle(request);
  }
}
