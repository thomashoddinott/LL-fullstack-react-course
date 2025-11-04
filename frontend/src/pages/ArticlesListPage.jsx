import { useState, useEffect } from "react";
import ArticlesList from "../ArticlesList";

export default function ArticlesListPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function loadArticles() {
      try {
        const response = await fetch("/api/articles");
        const data = await response.json();
        setArticles(data);
      } catch (err) {
        console.error("Failed to fetch articles:", err);
      }
    }
    loadArticles();
  }, []);

  return (
    <div className="articles-page">
      <h1>Articles</h1>
      {articles.length > 0 ? (
        <ArticlesList articles={articles} />
      ) : (
        <p>Loading articles...</p>
      )}
    </div>
  );
}
