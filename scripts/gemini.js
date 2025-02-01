import axios from 'axios';

const API_KEY = process.env.API_KEY;
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`

export const geminiResponse = async (prompt) => {
    try {
        const response = await axios.post(`${URL}?key=${API_KEY}`, {
            contents: [{ parts: [{ text: prompt }] }]
    });

    return response.data.candidates[0]?.content?.parts[0]?.text || 'No response received.';
}   catch (error) {
    console.error('Gemini API Error:', error);
    return 'Error fetching response.';
    }
};