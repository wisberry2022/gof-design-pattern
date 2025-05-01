import { News } from "../News/News.ts";
import { NewsChannel } from "../type.ts";

export class KBS implements NewsChannel {
  channel = "KBS";

  dispatch(news: News) {
    console.log(`>>>>>>>>>>>>>>>>>>>>>>> ${this.channel} 뉴스 채널`);
    news.display();
    console.log(`<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<`);
  }

  interruption(news: News): void {
    console.log(
      `${this.channel}에서 "${news.title}" 뉴스 송출을 종료했습니다.`
    );
  }

  getChannelName(): string {
    return this.channel;
  }
}
