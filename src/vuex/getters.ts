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
  updates(state: RootState) {
    return state.updates;
  },
  update(state: RootState) {
    return state.update;
  },
  services(state: RootState) {
    return state.services;
  },
  service(state: RootState) {
    return state.service;
  },
  comments(state: RootState) {
    return state.comments;
  },
  comment(state: RootState) {
    return state.comment;
  },
  feedbacks(state: RootState) {
    return state.feedbacks;
  },
  feedback(state: RootState) {
    return state.feedback;
  },
  blogs(state: RootState) {
    return state.blogs;
  },
  blog(state: RootState) {
    return state.blog;
  },
  hireMes(state: RootState) {
    return state.hireMes;
  },
  hireMe(state: RootState) {
    return state.hireMe;
  },
};
