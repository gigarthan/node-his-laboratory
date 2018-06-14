const express = require('express');
const mongoose = require('mongoose');
const config = require('./src/config/database');
const passport = require('passport');
const cors = require('cors');


require('./src/config/passport')(passport);

const  Routes = require('./Routes');
const app = express();


const PORT = process.env.PORT || 3001;
const db = mongoose.connect(config.database);



app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes
const testCategoryRouter = require('./src/routes/testCategoryRouter');
const orderRequestRouter = require('./src/routes/orderRequestRoutes');

app.use('/api/test-category', testCategoryRouter);
app.use('/api/requests', orderRequestRouter);

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
