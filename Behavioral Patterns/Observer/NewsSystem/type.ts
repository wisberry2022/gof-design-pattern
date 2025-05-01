import { News } from "./News/News.ts";

export interface NewsAgency {
  news: News[];

  publish(title: string, content: string, writer: string): void;
  stopNews(target: string): void;

  addChannel(observer: NewsChannel): void;
  removeChannel(channel: string): void;
}

export interface NewsChannel {
  channel: string;
  getChannelName(): string;
  dispatch(news: News): void;
  interruption(news: News): void;
}
