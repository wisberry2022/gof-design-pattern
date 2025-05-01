type Theme = {
  backgroundColor: string;
  color: string;
  fontSize: string;
};

type Language = "ko" | "en" | "zh";

export class AppConfig {
  static instance: AppConfig;
  theme!: Theme;
  language!: Language;

  private constructor() {}

  static getInstance() {
    return AppConfig.instance ?? (AppConfig.instance ??= new AppConfig());
  }

  setTheme(theme: Theme) {
    if (!theme || !Object.keys(theme).length) {
      throw new Error("빈 객체를 넣을 수 없습니다.");
    }
    this.theme = theme;
  }

  setLang(language: Language) {
    if (!language) {
      throw new Error("빈 값을 넣을 수 없습니다.");
    }
    this.language = language;
  }

  getConfig() {
    console.log(
      `테마 - ${this.theme.backgroundColor} ${this.theme.color} ${this.theme.fontSize} \n 언어 - ${this.language}`
    );
  }
}
