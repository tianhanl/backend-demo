// Use dotenv for easier configuration of server
require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const program = require('./controllers/program');

const port = process.env.SERVER_PORT || 3001;

// Serving staic files
app.use(express.static('public'));

// Enabling CORS for APIs
app.use(cors());

// APIs
// programs
app.get('/api/programs/:id', program.getProgramById);
app.get('/api/programs', program.getPrograms);

// Fallback to 404
app.use((req, res) => {
  res.status(404).send('Page not found.');
});

// Pokemon Catch
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Internal Error');
});

app.listen(port, () => console.log(`Server started at port ${port}`));
