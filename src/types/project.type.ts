export type IProject = {
  name: string;
  description: string;
  features: string[];
  techStack: string;
  sourceCode: string;
  liveLink: string;
  projectStatus: string;
  projectLength: {
    startDate: Date;
    endDate: Date;
  };
};
