import { ICourse } from "./course.type";
import { IEducation } from "./education.type";
import { IExperience } from "./experience.type";
import { IProject } from "./project.type";
import { IUpdate } from "./update.type";
import { IUser } from "./user.type";

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
  users: IUser[];
  user: IUser | {};
  updates: IUpdate[];
  update: IUpdate | {};
};
