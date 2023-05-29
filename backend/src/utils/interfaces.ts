interface IImage {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl?: string;
  path?: string;
}

export type { IImage };
