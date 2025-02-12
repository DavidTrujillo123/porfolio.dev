export interface ImageProps {
  url: string;
  imgix_url: string;
  width: number,
  height:number,
  alt_text: string
};

export interface HeroProps {
  image_hero: ImageProps
  linkdin_url: string
  linkedin_text: string
  title: string;
  info: string;
  social_pill: any[];
}

export interface ExperienceItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  link?: string;
}


export type ListProjectsProps = ProjectsProps[]

export interface ProjectsProps {
  slug: string
  title: string
  type: string
  metadata: Metadata
}

export interface Metadata {
  tags: Tag[]
  title: string
  description: string
  link: string
  github: string
  image: ImageProps
}

export interface Tag {
  name: string
  class: string
  icon: any
}