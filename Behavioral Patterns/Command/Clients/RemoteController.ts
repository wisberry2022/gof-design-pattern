import { Invoker, RemoteCommand } from "../type.ts";

export class RemoteController implements Invoker {
  commandMap: Map<string, RemoteCommand>;
  cue: RemoteCommand[];

  constructor() {
    this.commandMap = new Map();
    this.cue = [];
  }

  attachCommand(name: string, command: RemoteCommand) {
    this.commandMap.set(name, command);
  }

  detachCommand(name: string) {
    if (!this.hasCommand(name)) {
      throw new Error("존재하지 않는 명령입니다!");
    }
    this.commandMap.delete(name);
  }

  runCommand(name: string, option: unknown = {}) {
    if (!this.hasCommand(name)) {
      console.log("동작 없음");
      return;
    }
    const command = this.commandMap.get(name) as RemoteCommand;
    command.execute?.(option);
    this.cue.push(command);
  }

  undo() {
    const command = this.cue.pop();
    command?.undo();
  }

  private hasCommand(name: string): boolean {
    return !!this.commandMap.get(name);
  }
}
