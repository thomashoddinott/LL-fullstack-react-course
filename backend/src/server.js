import "dotenv/config";
import express from "express";
import { MongoClient, ReturnDocument, ServerApiVersion } from "mongodb";

const app = express();
app.use(express.json());

let db;

async function connectToDb() {
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect();

  db = client.db("fullstack-react-db");
}

app.get("/api/articles/:name", async (req, res) => {
  const { name } = req.params;

  const article = await db.collection("articles").findOne({ name });

  res.json(article);
});

app.post("/api/articles/:name/upvote", async (req, res) => {
  const { name } = req.params;

  const updatedArticle = await db.collection("articles").findOneAndUpdate(
    { name },
    {
      $inc: { upvotes: 1 },
    },
    { ReturnDocument: "after" }
  );
  res.json(updatedArticle);
});

app.post("/api/articles/:name/comments", async (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;
  const newComment = { postedBy, text };

  const updatedArticle = await db.collection("articles").findOneAndUpdate(
    { name },
    {
      $push: { comments: newComment },
    },
    {
      ReturnDocument: "after",
    }
  );
  res.json(updatedArticle);
});

async function start() {
  await connectToDb();
  app.listen(8000, () => console.log("Server is listening on port 8000"));
}

start();
