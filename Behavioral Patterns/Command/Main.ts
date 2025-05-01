import { Light } from "./Clients/Light.ts";
import { RemoteController } from "./Clients/RemoteController.ts";
import { TV } from "./Clients/TV.ts";
import { LightOffCommand } from "./Command/LightOffCommand.ts";
import { LightOnCommand } from "./Command/LightOnCommand.ts";
import { TVChannelDownCommand } from "./Command/TVChannelDownCommand.ts";
import { TVChannelSetCommand } from "./Command/TVChannelSetCommand.ts";
import { TVChannelUpCommand } from "./Command/TVChannelUpCommand.ts";
import { TVTurnOffCommand } from "./Command/TVTurnOffCommand.ts";
import { TVTurnOnCommand } from "./Command/TVTurnOnCommand.ts";

const remoteControl = new RemoteController();
const light = new Light();
const tv = new TV();

const lightOn = new LightOnCommand(light);
const lightOff = new LightOffCommand(light);
const tvOn = new TVTurnOnCommand(tv);
const tvOff = new TVTurnOffCommand(tv);
const tvChannelUp = new TVChannelUpCommand(tv);
const tvChannelDown = new TVChannelDownCommand(tv);
const tvChannelSet = new TVChannelSetCommand(tv);

remoteControl.attachCommand("light-on", lightOn);
remoteControl.attachCommand("light-off", lightOff);
remoteControl.attachCommand("tv-on", tvOn);
remoteControl.attachCommand("tv-off", tvOff);
remoteControl.attachCommand("tv-channel-up", tvChannelUp);
remoteControl.attachCommand("tv-channel-down", tvChannelDown);
remoteControl.attachCommand("tv-channel-set", tvChannelSet);

remoteControl.runCommand("light-on");
remoteControl.runCommand("light-off");
remoteControl.runCommand("tv-on");
remoteControl.runCommand("tv-off");
remoteControl.runCommand("tv-channel-up");
remoteControl.runCommand("tv-channel-down");
remoteControl.runCommand("tv-channel-set", { channel: 34 });

remoteControl.undo();
