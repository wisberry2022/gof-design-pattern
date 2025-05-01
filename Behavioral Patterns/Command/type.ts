export interface RemoteCommand {
  execute(option?: unknown): void;
  undo(): void;
}

export interface Invoker {
  attachCommand(name: string, command: RemoteCommand): void;
  detachCommand(name: string): void;
  runCommand(name: string, option?: unknown): void;
  undo(): void;
}

export interface LightReceiver {
  on(): void;
  off(): void;
}

export interface TVReceiver {
  on(): void;
  off(): void;
  upChannel(): void;
  downChannel(): void;
  setChannel(channel: number): void;
  channelBack(): void;
}
