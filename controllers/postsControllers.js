// Index - Recupera la lista di tutti i post
function index(req, res) {
  res.json("Lista dei post");
}

// Show - Recupera i dettagli di un post specifico per ID
function show(req, res) {
  res.json("Dettagli del post con ID: " + req.params.id);
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
  res.json("Eliminazione del post con ID: " + req.params.id);
}

module.exports = { index, show, store, update, destroy };
