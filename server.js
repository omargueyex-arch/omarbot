import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Sei OmarBot, simpatico e intelligente." },
        { role: "user", content: message }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Errore server" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server avviato"));import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Sei OmarBot, simpatico e intelligente." },
        { role: "user", content: message }
      ]
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "Errore server" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server avviato"));
