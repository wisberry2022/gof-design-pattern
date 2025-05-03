export interface Orginator {
  state: Memento;
  restore(memento: Memento): void;
}

export interface Memento {
  getState(): string;
}

export interface CareTaker {
  mementos: Memento[];
  addState(state: Memento): void;
  undo(): Orginator;
}

export interface Observer {
  createMemento(content: string): Memento;
}

export type EditorStateType = "";
