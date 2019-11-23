export class Tweets {
  id: string;
  tweet: string;
  constructor(data: any) {
    this.id = data.id;
    this.tweet = data.text;
  }
}
