export interface Target {
  display(text: string): void;
}

export interface Adaptee {
  specificRequest(text: string): void;
}
