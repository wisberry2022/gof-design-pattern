export class News {
  title: string;
  content: string;
  writer: string;
  date: Date;

  constructor(title: string, content: string, writer: string) {
    this.title = title;
    this.content = content;
    this.writer = writer;
    this.date = new Date();
  }

  display() {
    console.log(
      `
      ============================== ${
        this.title
      } ==============================
      ${this.content}
                                                        - ${this.date.getFullYear()}. ${
        this.date.getMonth() + 1
      }. ${this.date.getDate()}
                                                        -${
                                                          this.content
                                                        } 기자 작성
      =========================================================================
      `
    );
  }
}
