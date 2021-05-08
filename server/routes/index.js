import { Router } from "express";
import controllers from "../controllers/index.js";
const router = Router();

router.get("/", (req, res) => res.send("This is root!"));

router.post("/cats", controllers.createCat);
router.get("/cats", controllers.getAllCats);
router.get("/cats/:id", controllers.getCatById);
router.put("/cats/:id", controllers.updateCat);
router.delete("/cats/:id", controllers.deleteCat);

export default router;
