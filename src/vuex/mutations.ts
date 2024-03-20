import { RootState } from "./../types/state.type";
import { IProject } from "./../types/project.type";
export const mutations = {
  setProjects(state: RootState, projects: IProject[]) {
    state.projects = projects;
  },
  setProject(state: RootState, project: IProject) {
    state.project = project;
  },
  setCards(state: RootState, cards: []) {
    state.cards = cards;
  },
};
