export const mutations = {
  setProjects(state: any, projects: []) {
    state.projects = projects;
  },
  setProject(state: any, project: {}) {
    state.project = project;
  },
  setCards(state: any, cards: []) {
    state.cards = cards;
  },
};
