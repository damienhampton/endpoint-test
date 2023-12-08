export type Image = {
  src: string;
};

export type Article = {
  title: string;
  id: number;
  images: Image[];
};

export type WPImage = {
  href: string;
};

export type WPArticle = {
  meta: {
    id: number;
  };
  original: {
    headline: string;
  };
  media: {
    images: WPImage[];
  };
};
