export type Skill = {
  id: number;
  name: string;
  imageURL: string;
  color: string;
  showOnSkillPage: boolean;
};

export type Project = {
  id: number;
  name: string;
  image: string;
  demoLink: string;
  githubLink: string;
  description: string;
  skillIds: number[];
};

export type SocialLink = {
  id: number;
  name: string;
  type: string;
  link: string;
  color: string;
};
