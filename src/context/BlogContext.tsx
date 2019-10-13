import React, { Dispatch } from "react";
import createDataContext from "./createDataContext";

const BlogContext = React.createContext<BlogContextType>({
  blogPosts: [],
  addPosts: () => {}
});

type BlogContextType = {
  blogPosts: BlogPosts;
  addPosts: () => void;
};

type Props = {
  children: React.ReactNode;
};

type BlogPost = {
  title: string;
  id: string;
};

export type BlogPosts = BlogPost[];

type BlogAction =
  | {
      type: "DELETE_BLOGPOST";
      payload: string;
    }
  | {
      type: "ADD_BLOGPOST";
    };
const blogReducer = (state: BlogPosts, action: BlogAction) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [
        ...state,
        {
          title: `title ${state.length + 1}`,
          id: Math.floor(Math.random() * 99999)
        }
      ];
    case "DELETE_BLOGPOST":
      return state.filter(post => post.id !== action.payload);
    default:
      return state;
  }
};
// export const BlogProvider = ({ children }: Props) => {
//   // const [blogPosts, setBlogPosts] = React.useState<BlogPosts>([]);
//   const [blogPosts, dispatch] = React.useReducer(blogReducer, []);
//   return (
//     <BlogContext.Provider value={{ blogPosts, addPosts }}>
//       {children}
//     </BlogContext.Provider>
//   );
// };

const addBlogPost = (dispatch: Dispatch<BlogAction>) => () =>
  dispatch({ type: "ADD_BLOGPOST" });
const deleteBlogPost = (dispatch: Dispatch<BlogAction>) => (id: string) =>
  dispatch({ type: "DELETE_BLOGPOST", payload: id });

export const { Context, Provider } = createDataContext(
  blogReducer,
  {
    addBlogPost,
    deleteBlogPost
  },
  []
);

export default BlogContext;
