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

function addImage(href: string): WPImage {
  return {
    href,
  };
}
function addArticle(id: number, headline: string, images: WPImage[]) {
  return {
    meta: {
      id,
    },
    original: {
      headline,
    },
    media: {
      images,
    },
  };
}

const articles: WPArticle[] = [
  addArticle(1234, "Some title", [addImage("image1.jpg")]),
  addArticle(5678, "Some other title", [
    addImage("image2.jpg"),
    addImage("image3.jpg"),
  ]),
];

export async function articleDataService(
  id: number
): Promise<WPArticle | undefined> {
  console.log(`REQUEST articleDataService: ${id}`);
  return articles.find((article) => article.meta.id === id);
}
