require('dotenv').config();
express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('MongoDB connected successfully');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});
app.use('/users', require('./Routes/userRoute'));
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});