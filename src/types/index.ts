export interface IProjects {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface IBlogs {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
}

export interface ISendContact {
  name: string;
  email: string;
  message: string;
}
