postsData = require("../data/posts");

// Index - Recupera la lista di tutti i post

function index(req, res) {
  res.json(postsData);
}

// Show - Recupera i dettagli di un post specifico per ID
function show(req, res) {
  const id = parseInt(req.params.id);
  const post = postsData.find((post) => post.id === id);

  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: "Post not found" });
  }
}

// Store - Crea un nuovo post
function store(req, res) {
  res.json("Creazione di un nuovo post");
}
// Update - Aggiorna un post esistente tramite ID
function update(req, res) {
  res.json("Aggiornamento del post con ID: " + req.params.id);
}
// Delete - Elimina un post tramite ID
function destroy(req, res) {
  const id = parseInt(req.params.id);
  const postIndex = postsData.findIndex((post) => post.id === id);

  if (postIndex === -1) {
    // Se il post con il tag fornito non viene trovato
    return res.status(404).json({ error: "Non trovato" });
  }

  // Rimuovi il post da postsData
  postsData.splice(postIndex, 1);

  console.log(postsData);

  res.sendStatus(204);
}

module.exports = { index, show, store, update, destroy };
