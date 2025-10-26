import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router";
import articles from "../article-content";
import axios from "axios";
import CommentsList from "../CommentsList";
import { useState } from "react";
import AddCommentForm from "../../AddCommentForm";

export default function ArticlesPage() {
  const { name } = useParams();
  const { upvotes: initialUpvotes, comments: initialComments } =
    useLoaderData();
  const [upvotes, setUpvotes] = useState(initialUpvotes);
  const [comments, setComments] = useState(initialComments);

  const article = articles.find((a) => a.name === name);

  async function onUpvoteClicked() {
    const response = await axios.post("/api/articles/" + name + "/upvote");
    const updatedArticleData = response.data;
    setUpvotes(updatedArticleData.upvotes);
  }
  async function onAddComment({ nameText, commentText }) {
    const response = await axios.post("/api/articles/" + name + "/comments", {
      postedBy: nameText,
      text: commentText,
    });
    const updatedArticleData = response.data;
    setComments(updatedArticleData.comments);
  }

  return (
    <>
      <h1>{article.title}</h1>
      <button onClick={onUpvoteClicked}>Upvote</button>
      <p>This article has {upvotes} upvotes!</p>
      {article.content.map((p) => (
        <p key={p}>{p}</p>
      ))}
      <AddCommentForm onAddComment={onAddComment} />
      <CommentsList comments={comments} />
    </>
  );
}

export async function loader({ params }) {
  const response = await axios.get("/api/articles/" + params.name);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}
