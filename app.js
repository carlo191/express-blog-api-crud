console.log(`ok server`);
const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
const postsRouter = require("./routers/posts");

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});
app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`In ascolto su port  ${port}`);
});

// array di ogetti
const posts = [
  {
    titolo: "Ciambellone",
    contenuto: "ciambellone",
    immagine: "ciambellone.jpeg",
    tags: ["Ciambellone", "ciambella", "grande"],
  },
  {
    titolo: "Cracker Barbabietola",
    contenuto: "Cracker Barbabietola",
    immagine: "cracker_barbabietola.jpeg",
    tags: ["cracker", "barbabietola"],
  },
  {
    titolo: "Pane Fritto Dolce",
    contenuto: "Pane Fritto Dolce",
    immagine: "pane_fritto_dolce.jpeg",
    tags: ["pane", "fritto", "dolce"],
  },
  {
    titolo: "Pasta Barbabietola",
    contenuto: "Pasta Barbabietola",
    immagine: "pasta_barbabietola.jpeg",
    tags: ["pasta", "barbabietola"],
  },
  {
    titolo: "Torta Paesana",
    contenuto: "Torta Paesana",
    immagine: "torta_paesana.jpeg",
    tags: ["torta", "paesana"],
  },
];
// rotta /bacheca
app.get("/bacheca", (req, res) => {
  const response = {
    conteggio: posts.length,
    post: posts,
  };

  res.json(response);
});
