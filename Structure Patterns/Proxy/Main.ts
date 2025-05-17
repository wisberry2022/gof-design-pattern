import { time } from "console";
import { TSPlayerProxy } from "./Player/TSPlayerProxy.ts";

const player = new TSPlayerProxy();
player.addUrl("https://www.youtube.com/video?name=RobertDeBoron");
player.addUrl("https://www.youtube.com/video?name=Gowe");
player.play("https://www.youtube.com/video?name=RobertDeBoron");
player.play("https://www.youtube.com/video?name=Gowe");

setTimeout(() => {
  player.play("https://www.youtube.com/video?name=RobertDeBoron");
  player.pause("https://www.youtube.com/video?name=Gowe");
}, 5000);
