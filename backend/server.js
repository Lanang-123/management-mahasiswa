import express from "express"
import cors from "cors"
import MahasiswaRoutes from "./routes/MahasiswaRouter.js"
const app = express();
const port = 8000;
const hostname = "localhost"


app.use(cors());
app.use(express.json())
app.use("/mahasiswa",MahasiswaRoutes)

app.listen(port,hostname,(()=>console.log(`Sever berjalan di port ${port}`)))