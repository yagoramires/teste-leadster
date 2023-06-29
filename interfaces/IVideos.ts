export interface IVideo {
  id: number;
  url: string;
  thumb: string;
  description: string;
  downloads: Array<string>;
  category: string;
  createdAt: string;
}
