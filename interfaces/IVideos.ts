export interface IVideo {
  id: number;
  url: string;
  title: string;
  thumb: string;
  description: string;
  downloads: Array<string>;
  category: string;
  createdAt: IDate;
}
export interface IDate {
  year: number;
  month: number;
  day: number;
}
