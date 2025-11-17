import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());


app.post("/generate", async (req, res) => {
    const { topic } = req.body;


    res.json({
        message: 'OK',
        receivedTopic: topic,
        videoUrl: "https://example.com/generated-video.mp4"
    });
});


app.listen(3000, () => console.log("🔥 Server running on http://localhost:3000"));