import express from "express";
import dotenv from "dotenv";
import e from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json()); // let's server read JSON

app.get("/", (req, res) => {
    res.json({ message: "Homevault API running" });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})