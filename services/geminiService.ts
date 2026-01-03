
import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeStory = async (story: string): Promise<AnalysisResult> => {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Analyze the following cryptid encounter report and extract details. 
    Format as JSON with keys: cryptidType (string), threatLevel (string: Low, Medium, High, Extreme), 
    authenticityScore (number 0-100), summary (short sentence), keywords (array of strings).
    
    Report: "${story}"`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          cryptidType: { type: Type.STRING },
          threatLevel: { type: Type.STRING },
          authenticityScore: { type: Type.NUMBER },
          summary: { type: Type.STRING },
          keywords: { 
            type: Type.ARRAY,
            items: { type: Type.STRING }
          }
        },
        required: ["cryptidType", "threatLevel", "authenticityScore", "summary", "keywords"]
      }
    }
  });

  return JSON.parse(response.text);
};
