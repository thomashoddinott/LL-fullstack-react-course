import { useEffect, useState } from "react";
import "./AddCommentForm.css";
import useUser from "./src/useUser";

export default function AddCommentForm({ onAddComment }) {
  const [nameText, setNameText] = useState("");
  const [commentText, setCommentText] = useState("");

  const { isLoading, user } = useUser();

  useEffect(() => {
    if (!isLoading) {
      setNameText(user.email);
    }
  }, [isLoading]);

  return (
    <div className="comment-form">
      <h3>Add a Comment</h3>

      <label>
        Name:
        <input
          type="text"
          value={nameText}
          onChange={(e) => setNameText(e.target.value)}
        />
      </label>

      <label>
        Comment:
        <textarea
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
      </label>

      <button
        onClick={() => {
          onAddComment({ nameText, commentText });
          setNameText("");
          setCommentText("");
        }}
      >
        Add Comment
      </button>
    </div>
  );
}
