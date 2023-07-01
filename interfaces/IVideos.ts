export interface IVideo {
  id: number;
  url: string;
  title: string;
  thumb: string;
  description: string;
  downloads: Array<string>;
  category: string;
  createdAt: {
    year: number;
    month: number;
    day: number;
  };
}
