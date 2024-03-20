import { IProject } from "./project.type";

export type RootState = {
  projects: IProject[];
  project: IProject | null | {};
  cards: any[];
  homeData: {};
};
