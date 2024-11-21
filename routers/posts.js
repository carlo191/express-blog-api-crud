const express = require("express");
const router = express.Router();

// Index - Recupera la lista di tutti i post
router.get("/", function (req, res) {
  res.json("Lista dei post");
});

// Show - Recupera i dettagli di un post specifico per ID
router.get("/:id", function (req, res) {
  res.json("Dettagli del post con ID: " + req.params.id);
});

// Store - Crea un nuovo post
router.post("/", function (req, res) {
  res.send("Creazione di un nuovo post");
});

// Update - Aggiorna un post esistente tramite ID
router.put("/:id", function (req, res) {
  res.send("Aggiornamento del post con ID: " + req.params.id);
});

// Delete - Elimina un post tramite ID
router.delete("/:id", function (req, res) {
  res.send("Eliminazione del post con ID: " + req.params.id);
});

module.exports = router;
