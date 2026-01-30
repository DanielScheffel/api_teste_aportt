import express from "express";
import cors from "cors";
import registerRoute from "./routes/registerRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", registerRoute);

// Rota teste
app.get("/", (req, res) => {
    return res.status(200).json({
        status: "Ok",
        message: "Api rodando...."
    });
});

export default app;