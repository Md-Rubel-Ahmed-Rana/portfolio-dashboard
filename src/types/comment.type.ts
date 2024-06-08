export type IComment = {
  name: string;
  image: string;
  comment: string;
  postId: {
    id: string;
    title: string;
    name: string;
  };
  postType: "Project" | "Blog";
};
