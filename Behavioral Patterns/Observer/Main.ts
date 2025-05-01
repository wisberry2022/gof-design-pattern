import { YTN } from "./NewsSystem/NewsAgency/NewsAgency.ts";
import { KBS } from "./NewsSystem/NewsChannel/KBS.ts";
import { MBC } from "./NewsSystem/NewsChannel/MBC.ts";
import { SBS } from "./NewsSystem/NewsChannel/SBS.ts";

const NewsAgency = new YTN();

const MBCChannel = new MBC();
const KBSChannel = new KBS();
const SBSChannel = new SBS();

NewsAgency.addChannel(MBCChannel);
NewsAgency.addChannel(KBSChannel);

NewsAgency.publish("뉴스1", "컨텐츠1", "김기자");
NewsAgency.publish("뉴스2", "컨텐츠2", "박기자");

NewsAgency.removeChannel("KBS");

NewsAgency.addChannel(SBSChannel);
NewsAgency.publish("뉴스3", "컨텐츠3", "최기자");
NewsAgency.stopNews("뉴스2");
NewsAgency.stopNews("뉴스3");
NewsAgency.stopNews("뉴스1");

NewsAgency.removeChannel("MBC");
NewsAgency.removeChannel("SBS");

NewsAgency.publish("뉴스4", "컨텐츠4", "오기자");
