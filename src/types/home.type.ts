export type IBannerSection = {
  name: string;
  image: string;
  position: string;
  description: string;
  resumeLink: string;
};

export type IAboutSection = {
  image: string;
  description1: string;
  description2: string;
};
export type ISocialLinks = { name: string; link: string };

export type IHome = {
  bannerSection: IBannerSection;
  aboutSection: IAboutSection;
  socialLinks: ISocialLinks[];
  skills: string[];
};
