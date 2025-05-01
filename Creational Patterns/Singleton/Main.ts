import { AppConfig } from "./improvement/AppConfig.ts";

const config = AppConfig.getInstance();
config.setTheme({
  backgroundColor: "#f00",
  color: "#000",
  fontSize: "1.2rem",
});
config.setLang("ko");
config.getConfig();
