import express from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";
import bodyParser from "body-parser";
import cors from "cors"

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(cors());

app.post("/sendMessage", async (req, res) => {

    const { messages } = req.body;



})