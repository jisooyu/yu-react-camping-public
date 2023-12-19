const express = require('express');
const app = express();

app.use(express.json({ extended: false }));

require('./routes/campRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
