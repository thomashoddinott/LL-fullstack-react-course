import { useParams } from "react-router-dom";
import articles from "../article-content";

export default function ArticlesPage() {
  const { name } = useParams();

  const article = articles.find((a) => a.name === name);

  return (
    <>
      <h1>This is the {article.title} article</h1>
      {article.content.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </>
  );
}
