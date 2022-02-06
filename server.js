const express = require('express')
const app = express();
const PORT = process.env.PORT || 3001;
const {notes} = require('./db/db')
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

// app.post()