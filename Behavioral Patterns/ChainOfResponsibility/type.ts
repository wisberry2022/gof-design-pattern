export interface ClientHandlerInterface {
  setNext(handler: ClientHandlerInterface): void;
  handle(request: RequestInterface): void;
}

export interface RequestInterface {
  type: string;
  getType(): string;
}
