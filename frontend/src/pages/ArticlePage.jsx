import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router";
import articles from "../article-content";
import axios from "axios";

export default function ArticlesPage() {
  const { name } = useParams();
  const { upvotes, comments } = useLoaderData();

  const article = articles.find((a) => a.name === name);

  return (
    <>
      <h1>{article.title}</h1>
      <p>This article has {upvotes} upvotes!</p>
      {article.content.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </>
  );
}

export async function loader({ params }) {
  const response = await axios.get("/api/articles/" + params.name);
  const { upvotes, comments } = response.data;
  return { upvotes, comments };
}
