import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router";
import axios from "axios";
import CommentsList from "../CommentsList";
import { useState } from "react";
import AddCommentForm from "../../AddCommentForm";
import useUser from "../useUser";

export default function ArticlesPage() {
  const { name } = useParams();
  const { title, content, upvotes: initialUpvotes, comments: initialComments } =
    useLoaderData();

  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [comments, setComments] = useState(initialComments);
  const { isLoading, user } = useUser();

  async function onUpvoteClicked() {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(`/api/articles/${name}/upvote`, null, {
      headers,
    });
    setUpvotes(response.data.upvotes);
  }

  async function onAddComment({ nameText, commentText }) {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};
    const response = await axios.post(
      `/api/articles/${name}/comments`,
      { postedBy: nameText, text: commentText },
      { headers }
    );
    setComments(response.data.comments);
  }

  return (
    <>
      <h1>{title}</h1>
      {user && <button onClick={onUpvoteClicked}>Upvote</button>}
      <p>This article has {upvotes} upvotes</p>

      {content.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}

      {user ? (
        <AddCommentForm onAddComment={onAddComment} />
      ) : (
        <p>Log in to add a comment</p>
      )}

      <CommentsList comments={comments} />
    </>
  );
}

export async function loader({ params }) {
  const response = await axios.get(`/api/articles/${params.name}`);
  return response.data; // now includes title, content, upvotes, comments
}
