import { RootState } from "./../types/state.type";
export const getters = {
  projects(state: RootState) {
    return state.projects;
  },
  project(state: RootState) {
    return state.project;
  },
  cards(state: RootState) {
    return state.cards;
  },
  homeData(state: RootState) {
    return state.homeData;
  },
};
