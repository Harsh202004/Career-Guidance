const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { OpenAI }  = require('openai');

dotenv.config();
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.get('/api/course', async (req, res) => {
  const courseId = req.query.courseId;

  if (!courseId) {
    return res.status(400).json({ error: 'Missing courseId parameter' });
  }

  try {
    const prompt = `
You are an educational advisor assistant. Return JSON for a course "${courseId}" with the following structure:

{
  "name": "Full Course Name",
  "description": "<p>Detailed HTML description of the course...</p>",
  "universities": [
    { "name": "University Name", "location": "City", "url": "https://..." },
    ...
  ],
  "certifications": ["Certificate A", "Certificate B"],
  "resources": [
    { "title": "Video Title", "url": "https://..." },
    ...
  ]
}
Keep content relevant to India and professional.
`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7
    });

    const jsonStart = completion.choices[0].message.content.indexOf('{');
    const jsonString = completion.choices[0].message.content.slice(jsonStart);
    const parsed = JSON.parse(jsonString);
    res.json(parsed);
  } catch (error) {
    console.error('OpenAI API Error:', error);
    res.status(500).json({ error: 'Failed to fetch course data' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
