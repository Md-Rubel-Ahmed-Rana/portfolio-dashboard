import { IExperience } from "./../types/experience.type";
import { ICourse } from "@/types/course.type";
import { IEducation } from "./../types/education.type";
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
  setHomeData(state: RootState, homeData: {}) {
    state.homeData = homeData;
  },
  setCourses(state: RootState, courses: ICourse[]) {
    state.courses = courses;
  },
  setCourse(state: RootState, course: ICourse) {
    state.course = course;
  },
  setEducations(state: RootState, educations: IEducation[]) {
    state.educations = educations;
  },
  setEducation(state: RootState, education: IEducation) {
    state.education = education;
  },
  setExperiences(state: RootState, experiences: IExperience[]) {
    state.experiences = experiences;
  },
  setExperience(state: RootState, experience: IExperience) {
    state.experience = experience;
  },
};
