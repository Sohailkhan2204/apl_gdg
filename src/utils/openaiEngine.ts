import { Player, QuestionHistoryItem } from '../types';

export interface OpenAIEngineResponse {
  reasoning: string;
  action: 'ask' | 'guess';
  question?: string;
  guessedPlayerName?: string;
  topCandidates: {
    name: string;
    probability: number;
    role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicketkeeper';
    country: string;
    teams: string[];
    description: string;
  }[];
}

export const askOpenAIForNextQuestion = async (
  apiKey: string,
  history: QuestionHistoryItem[],
  playersPool: Player[]
): Promise<OpenAIEngineResponse | null> => {
  try {
    const historyText = history.map(h => `Q: ${h.questionText}\nA: ${h.answer}`).join('\n');

    // Provide a small subset of the player names so it knows the scope, 
    // or rely on its knowledge. We'll rely on its general knowledge of IPL,
    // but tell it to strictly return names matching standard IPL players.

    const systemPrompt = `You are an elite Cricket expert AI playing the IPL Akinator game.
Your goal is to guess the IPL player the user is thinking of by asking Yes/No/Maybe questions.
You must return your response STRICTLY as a JSON object with the following schema:
{
  "reasoning": "Explain your step-by-step logic based on the history to determine the remaining candidates, and strategize the most optimal question to divide the pool.",
  "action": "ask" or "guess",
  "question": "The question to ask (if action is ask)",
  "guessedPlayerName": "The exact full name of the player (if action is guess)",
  "topCandidates": [
    { 
      "name": "Player Full Name", 
      "probability": 0.85,
      "role": "Batsman",
      "country": "India",
      "teams": ["CSK", "RCB"],
      "description": "Short bio..."
    }
  ]
}

Rules:
4. IMPORTANT: You must write out your "reasoning" FIRST before deciding on your "action" or "question". This will help you deduce the correct player.
5. "topCandidates" must contain exactly 5 players that you think are the most likely based on the history, with probabilities (0.0 to 1.0) summing to 1.0.
6. If you are highly confident (>85%), set "action" to "guess" and provide "guessedPlayerName".
7. Otherwise, set "action" to "ask" and provide a highly distinguishing "question".
8. Keep your questions highly dynamic and unpredictable! Do not follow the same rigid pattern. Ask lateral questions about unique traits, specific records, franchise loyalties, playing styles, or jersey numbers to keep the game fun.
9. Output nothing but valid JSON.`;

    const userPrompt = history.length === 0
      ? "Start the game. Ask the first broad question to narrow down the player."
      : `Here is the question history so far:\n${historyText}\n\nWhat is your next move?`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        response_format: { type: "json_object" },
        temperature: 0.9,
      })
    });

    if (!response.ok) {
      throw new Error('OpenAI API call failed');
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (content) {
      return JSON.parse(content) as OpenAIEngineResponse;
    }
    return null;
  } catch (error) {
    console.error('OpenAI Engine error:', error);
    return null;
  }
};
