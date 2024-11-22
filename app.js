console.log(`ok server`);
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));
const postsRouter = require("./routers/posts");
app.post("/", (req, res) => {
  // dentro req.body troveremo
  // i dati ricevuti in formato json
  console.log(req.body);
  // ...
});

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`In ascolto su port  ${port}`);
});

// rotta /bacheca
app.get("/bacheca", (req, res) => {
  const response = {
    conteggio: posts.length,
    post: posts,
  };

  res.json(response);
});
