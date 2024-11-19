import React, { useState } from "react";
import Navbar from "../components/Navbar";

const ForumDiskusi = () => {
  const [posts, setPosts] = useState([
    
  ]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");

  const handlePost = () => {
    if (newPostTitle.trim() !== "" && newPostContent.trim() !== "") {
      setPosts([
        ...posts,
        {
          id: posts.length + 1,
          title: newPostTitle,
          content: newPostContent,
          comments: [],
        },
      ]);
      setNewPostTitle("");
      setNewPostContent("");
    }
  };

  const handleAddComment = (postId, comment) => {
    if (comment.trim() !== "") {
      setPosts(
        posts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, comment] }
            : post
        )
      );
    }
  };

  const handleDeletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  return (
    <div className="container forum-container">
      <Navbar />
      <h1 className="forum-header">Forum Diskusi</h1>
      <div className="discussion-form">
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Judul Diskusi"
          value={newPostTitle}
          onChange={(e) => setNewPostTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-2"
          rows="4"
          placeholder="Tulis konten diskusi Anda..."
          value={newPostContent}
          onChange={(e) => setNewPostContent(e.target.value)}
        ></textarea>
        <button className="btn btn-primary" onClick={handlePost}>
          Kirim Diskusi
        </button>
      </div>
      <div className="discussion-list mt-4">
        {posts.map((post) => (
          <div className="post-card" key={post.id}>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-content">{post.content}</p>
            <div className="d-flex justify-content-end mt-2">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => handleDeletePost(post.id)}
              >
                Hapus Diskusi
              </button>
            </div>
            <div className="comments mt-3">
              <h6>Komentar:</h6>
              {post.comments.map((comment, index) => (
                <p key={index} className="comment">
                  {comment}
                </p>
              ))}
              <AddCommentForm
                onAddComment={(comment) => handleAddComment(post.id, comment)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AddCommentForm = ({ onAddComment }) => {
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    onAddComment(comment);
    setComment("");
  };

  return (
    <div className="add-comment-form">
      <textarea
        className="form-control"
        rows="2"
        placeholder="Tambahkan komentar..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
      <button className="btn btn-secondary btn-sm mt-2" onClick={handleSubmit}>
        Kirim Komentar
      </button>
    </div>
  );
};

export default ForumDiskusi;
