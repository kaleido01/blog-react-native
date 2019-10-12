import React from "react";

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
};

type BlogPosts = BlogPost[];

type BlogAction = {
  add_blogPost: "ADD_BLOGPOST";
};
const blogReducer = (state: BlogPosts, action) => {
  switch (action.type) {
    case "ADD_BLOGPOST":
      return [...state, { title: `title ${state.length + 1}` }];
    default:
      return state;
  }
};
export const BlogProvider = ({ children }: Props) => {
  // const [blogPosts, setBlogPosts] = React.useState<BlogPosts>([]);
  const [blogPosts, dispatch] = React.useReducer(blogReducer, []);
  const addPosts = () => dispatch({ type: "ADD_BLOGPOST" });
  return (
    <BlogContext.Provider value={{ blogPosts, addPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
