import React, { useEffect, useState } from "react";
import axios from "axios";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedPost, setSelectedPost] = useState(null); // State to track the selected post for details

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKENED}/api/public/allPosts`
        );
        setPosts(response.data.posts); // Assuming posts are returned in response.data.posts
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch posts. Please try again.");
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <p className="text-center text-blue-500 font-medium">Loading posts...</p>
    );
  }

  if (error) {
    return <p className="text-center text-red-500 font-medium">{error}</p>;
  }

  // Show detailed view of the selected post
  if (selectedPost) {
    return (
      <div className="min-h-screen bg-blue-50 flex justify-center items-center px-4">
        <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6">
          <button
            className="text-blue-600 font-medium mb-6 hover:underline flex items-center"
            onClick={() => setSelectedPost(null)} // Go back to the list view
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Posts
          </button>
          <img
            src={selectedPost.imageUrl}
            alt={selectedPost.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          <h1 className="text-3xl font-bold text-blue-800 mb-4">
            {selectedPost.title}
          </h1>
          <p className="text-gray-700 mb-6 leading-relaxed">
            {selectedPost.description}
          </p>
          <div className="text-sm text-gray-500 space-y-2">
            <p>
              <span className="font-medium text-gray-600">Written by:</span>{" "}
              {selectedPost.writtenBy}
            </p>
            <p>
              <span className="font-medium text-gray-600">Tags:</span>{" "}
              {selectedPost.tags.join(", ")}
            </p>
            <p>
              <span className="font-medium text-gray-600">Created at:</span>{" "}
              {new Date(selectedPost.createdAt).toLocaleString()}
            </p>
            <p>
              <span className="font-medium text-gray-600">Updated at:</span>{" "}
              {new Date(selectedPost.updatedAt).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    );
  }

  // List view of posts
  return (
    <div className="min-h-screen bg-blue-50 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-blue-600 mb-6 text-center">
          All Posts
        </h1>
        {posts.length === 0 ? (
          <p className="text-gray-600 text-center text-lg">
            No posts available.
          </p>
        ) : (
          <ul className="space-y-6">
            {posts.map((post) => (
              <li
                key={post.createdAt} // Use `createdAt` as a unique key
                className="p-6 bg-blue-100 shadow-md rounded-lg border border-blue-200 hover:bg-blue-200 transition-all cursor-pointer"
                onClick={() => setSelectedPost(post)} // Show detailed view on click
              >
                <h2 className="text-xl font-semibold text-blue-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-700 line-clamp-2">{post.description}</p>
                <p className="text-sm text-gray-500 mt-4">
                  <span className="font-medium text-gray-600">Written by:</span>{" "}
                  {post.writtenBy}
                  <br />
                  <span className="font-medium text-gray-600">Date:</span>{" "}
                  {new Date(post.createdAt).toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllPosts;
