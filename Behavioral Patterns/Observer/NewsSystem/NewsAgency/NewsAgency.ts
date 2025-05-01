import { News } from "../News/News.ts";
import { NewsAgency, NewsChannel } from "../type.ts";

export class YTN implements NewsAgency {
  channels: NewsChannel[] = [];
  news: News[] = [];

  constructor() {
    this.news = [];
  }

  publish(title: string, content: string, writer: string) {
    if (!this.channels.length) {
      throw new Error("제휴된 채널이 없어 뉴스를 발행할 수 없습니다.");
    }
    const news = new News(title, content, writer);
    this.news.push(news);
    this.channels.forEach((channel) => {
      channel.dispatch(news);
    });
  }

  stopNews(target: string) {
    const deleteNews = this.news.find((news) => news.title === target);
    if (!deleteNews) {
      throw new Error("뉴스 리스트에 없습니다");
    }
    this.news = this.news.filter((news) => news.title !== target);
    this.channels.forEach((channel) => {
      channel.interruption(deleteNews);
    });
  }

  addChannel(channel: NewsChannel): void {
    this.channels.push(channel);
    console.log(
      `${channel.getChannelName()}이 Agency와 새로운 제휴를 맺게 되었습니다.`
    );
  }

  removeChannel(channel: string): void {
    this.channels = this.channels.filter(
      (chnl) => chnl.getChannelName() !== channel
    );
    console.log(`${channel}은 Agency와의 제휴 기간이 종료되었습니다.`);
  }
}
