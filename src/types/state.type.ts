import { ICourse } from "./course.type";
import { IEducation } from "./education.type";
import { IExperience } from "./experience.type";
import { IProject } from "./project.type";

export type RootState = {
  projects: IProject[];
  project: IProject | {};
  cards: any[];
  homeData: {};
  courses: ICourse[];
  course: ICourse | {};
  educations: IEducation[];
  education: IEducation | {};
  experiences: IExperience[];
  experience: IExperience | {};
};
