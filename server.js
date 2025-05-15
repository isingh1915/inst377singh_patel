const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

// Get all saved jobs
app.get('/api/saved-jobs', async (req, res) => {
  const { data, error } = await supabase.from('saved_jobs').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

// Add a new job
app.post('/api/saved-jobs', async (req, res) => {
  const { job } = req.body;
  const { data, error } = await supabase.from('saved_jobs').insert([job]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
