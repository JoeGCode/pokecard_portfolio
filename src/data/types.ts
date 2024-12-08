export type Skill = {
  id: number;
  name: string;
  imageURL: string;
  color: string;
};

export type Project = {
  id: number;
  name: string;
  image: string;
  demoLink: string;
  githubLink: string;
  description: string;
};

export type SocialLink = {
  id: number;
  name: string;
  type: string;
  link: string;
  color: string;
};
