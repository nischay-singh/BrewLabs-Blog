import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

export default function Home() {
  const [posts, setPosts] = useState();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getposts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to this blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
          Here you will find various posts about coffee (and some about tea as
          well)! Check out our favorite recipes with step by step guides so that
          you can enjoy cafe style coffee right at home. 
        </p>
        <Link
          to="/search"
          className="text-xs sm:text-sm text-teal-500 font-bold hover:underline"
        >
          View all posts
        </Link>
      </div>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8">
        {posts && posts.length > 0 && (
          <div className="flex flex-col gap-7">
            <h2 className="text-2xl font-semibold text-center">Recent posts</h2>
            <div className="flex flex-wrap gap-4">
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to="/search"
              className="text-lg text-teal-500 hover:underline text-center"
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
