export type Project = {
  title: string;
  category: string;
  description: string;
  highlights: string[];
  stack: string[];
  github?: string;
  demo?: string;
};

export type SkillGroup = {
  title: string;
  skills: string[];
};
