type Author = {
  name: string;
  image: string;
  designation: string;
};

export type Mentor = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
};
