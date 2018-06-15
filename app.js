const express = require('express');
const mongoose = require('mongoose');
const config = require('./src/config/database');
const passport = require('passport');
const cors = require('cors');


require('./src/config/passport')(passport);

const Routes = require('./Routes');
const app = express();

const PORT = process.env.PORT || 3001;
const db = mongoose.connect(config.database);

app.use(cors());
app.use(express.json());
app.use(passport.initialize());

// Routes

const orderRequestRouter = require('./src/routes/orderRequestRoutes');
app.use('/api/requests', orderRequestRouter);

//Routes for test category

const testCategoryRouter = require('./src/routes/labTest/testCategoryRouter');
app.use('/api/test-categories', testCategoryRouter);

//Routes for lab departments

const labDepartmentRouter = require('./src/routes/laboratory/labDepartmentRouter');
app.use('/api/lab-departments', labDepartmentRouter);

//Routes for lab types

const labTypeRouter = require('./src/routes/laboratory/labTypeRouter');
app.use('/api/lab-types', labTypeRouter);



//Routes for sample center types

const sampleCenterTypeRouter = require('./src/routes/sampleCenter/sampleCenterTypeRouter');
app.use('/api/sample-center-types', sampleCenterTypeRouter);


//Routes for sample centers

const sampleCenterRouter = require('./src/routes/sampleCenter/sampleCenterRouter');
app.use('/api/sample-centers', sampleCenterRouter);


const testResultsRouter = require('./src/routes/testResultsRoutes');
app.use('/api/test-results', testResultsRouter);

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});