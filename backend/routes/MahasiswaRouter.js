import express from "express"
import {
    getAllMahasiswa,
    getMahasiswaByNim,
    insertDataMahasiswa,
    updateDataMahasiswa,
    deleteMahasiswa
} from "../controllers/MahasiswaController.js"

const router = express.Router();

router.get("/",getAllMahasiswa);
router.get("/:nim",getMahasiswaByNim);
router.post("/",insertDataMahasiswa);
router.patch("/:id",updateDataMahasiswa);
router.delete("/:id",deleteMahasiswa)
export default router;