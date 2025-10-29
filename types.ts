
export interface CodeBlockData {
  type: 'code';
  language: 'html' | 'javascript';
  code: string;
}

export interface ListData {
  type: 'list';
  items: string[];
  ordered: boolean;
}

export type SlideContentItem = string | CodeBlockData | ListData;

export interface SlideData {
  title: string;
  content: SlideContentItem[];
}
