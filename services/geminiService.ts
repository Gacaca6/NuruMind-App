
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getMotivationalQuote(): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: 'Generate a short, powerful 1-sentence motivational quote for a mental wellness app focusing on digital discipline. Keep it under 15 words.',
      config: {
        temperature: 1,
        maxOutputTokens: 100,
      }
    });
    return response.text?.trim().replace(/^"|"$/g, '') || "Discipline is choosing what you want most.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Discipline is choosing what you want most.";
  }
}

export async function getPersonalizedInsight(score: number, streak: number): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `The user has a digital clarity score of ${score}/100 and a clean scroll streak of ${streak} days. Provide a personalized 2-sentence encouraging insight for their wellness journey.`,
      config: {
        temperature: 0.8,
        maxOutputTokens: 200,
      }
    });
    return response.text?.trim() || "You're improving! Less addictive content exposure detected this week. Keep the momentum!";
  } catch (error) {
    return "You're improving! Keep the momentum!";
  }
}
