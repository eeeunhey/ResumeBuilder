import OpenAI from "openai"

const openai = new OpenAI({
    apiKey: "GEMINI_API_KEY",
    baseURL: "https://generativlanguage.googleapis.com/v1beta"
})