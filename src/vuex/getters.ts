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
  courses(state: RootState) {
    return state.courses;
  },
  course(state: RootState) {
    return state.course;
  },
  educations(state: RootState) {
    return state.educations;
  },
  education(state: RootState) {
    return state.education;
  },
  experiences(state: RootState) {
    return state.experiences;
  },
  experience(state: RootState) {
    return state.experience;
  },
  users(state: RootState) {
    return state.users;
  },
  user(state: RootState) {
    return state.user;
  },
};
