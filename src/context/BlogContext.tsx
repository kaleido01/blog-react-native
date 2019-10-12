import React from "react";

const BlogContext = React.createContext<BlogContextType>({
  blogPosts: [],
  setBlogPosts: () => {}
});

type BlogContextType = {
  blogPosts: BlogPosts;
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
};

type Props = {
  children: React.ReactNode;
};

type BlogPost = {
  title: string;
};

type BlogPosts = BlogPost[];

export const BlogProvider = ({ children }: Props) => {
  const [blogPosts, setBlogPosts] = React.useState<BlogPosts>([]);
  return (
    <BlogContext.Provider value={{ blogPosts, setBlogPosts }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
