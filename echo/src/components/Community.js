import React, { useState, useEffect } from 'react';
import './Community.css';
import { FaImages, FaTags, FaUpload , FaComment} from 'react-icons/fa';

function Community() {
  const [postsData, setPostsData] = useState([
    { username: 'user1', content: 'This is the first post!' },
    { username: 'user2', content: 'Another post here.' }
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  useEffect(() => {
    // Display existing posts
    displayPosts();
  }, [searchTerm, postsData]); // Run only once on component mount

    // Display existing posts or filtered posts based on search term
  // Display existing posts or filtered posts based on search term
  function displayPosts() {
    const filteredPosts = postsData.filter((post) =>
      post.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filteredPosts.map((post, index) => (
      <div key={index} className="post">
        <strong>{post.username}:</strong> {post.content}
      </div>
    ));
  }
// Handle new post submission
const handlePostSubmit = (event) => {
    event.preventDefault();
    setPostsData([...postsData, { username: 'user', content: newPostContent }]);
    setNewPostContent('');
  };

  // Handle search term change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  // Handle new post content change
  const handleNewPostContentChange = (event) => {
    setNewPostContent(event.target.value);
  };

  return (
    <div>
      <header>
        <h1>Your Community</h1>
      </header>
      <section id="search-bar">
        <div className="search-container">
          <span role="img" aria-label="search-icon">
            🔍
          </span>
          <input
            type="text"
            placeholder="Type to search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </section>
      <div className="center-container">
      <section id="new-post" className="new-post-section">
        <h2>Create Post</h2>
        <form onSubmit={handlePostSubmit}>
          <div className="form-group">
            {/* <label htmlFor="username">Username:</label> */}
            <input type="text" id="username" className="form-control" placeholder="Enter your name..." required />
          </div>
          <div className="form-group">
            {/* <label htmlFor="content">Post Content:</label> */}
            <div className="textarea-container">
            <FaComment className="icon" />
            <textarea id="content" rows="4" placeholder="  What biotic change have you made for our environment today?" className="form-control-content" required></textarea>
          </div>
          </div>
          
      <button type="button" className="btn btn-primary">
        <FaImages /> Gallery
      </button>

      <button type="button" className="btn btn-secondary">
        <FaTags /> Tag
      </button>

      <button type="submit" className="btn btn-success">
        <FaUpload /> Publish
      </button>
        </form>
      </section>
      </div>
      <section id="posts">
        {displayPosts()}
      </section>
    </div>
  );
}

export default Community;
