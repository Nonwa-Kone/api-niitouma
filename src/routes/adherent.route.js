const express = require("express");
const {
  createAdherent,
  listesDesAdherents,
  findAdherentById,
  findAdherentByFilter,
  deleteAdherent,
  updateAdherent,
  postCommentaire,
} = require("../controls/adherent.controller");

const router = express.Router();

router.post("/adherent", createAdherent);
router.get("/adherent", listesDesAdherents);
router.get("/adherent/:id", findAdherentById);
router.delete("/adherent/:id", deleteAdherent);
router.get("/query", findAdherentByFilter);
router.put("/adherent/:id", updateAdherent);
router.patch("/post-comment/:id", postCommentaire);

module.exports = router;
