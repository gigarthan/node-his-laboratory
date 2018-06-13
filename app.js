const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./src/config/database');
const passport = require('passport');
const cors = require('cors');


require('./src/config/passport')(passport);

const  Routes = require('./Routes');
const app = express();

app.use(bodyParser.json());
app.use('/',Routes);

const PORT = process.env.PORT || 3001;
const db = mongoose.connect(config.database);



app.use(cors());
app.use(express.json());
app.use(passport.initialize());




///////////////////////////////////////  Routes  /////////////////////////////////////////////


//////////////  Lab test manager ////////////////////////////////////


//Routes for test category

const testCategoryRouter = require('./src/routes/labTest/testCategoryRouter');

app.use('/api/test-categories', testCategoryRouter);




/////////////////////////////////////////////////////////////////////////




///////////// Laboratory manager ///////////////////////////////////////



//Routes for lab departments

const labDepartmentRouter  = require('./src/routes/laboratory/labDepartmentRouter');

app.use('/api/lab-departments',labDepartmentRouter);



//Routes for lab types

const labTypeRouter  = require('./src/routes/laboratory/labTypeRouter');

app.use('/api/lab-types',labTypeRouter);



//Routes for laboratory

const laboratoryRouter  = require('./src/routes/laboratory/laboratoryRoute');

app.use('/api/laboratories',laboratoryRouter);


///////////////////////////////////////////////////////////////////////////////




////////////////////////// Sample Center manager /////////////////////////////



//Routes for sample center types

const sampleCenterTypeRouter  = require('./src/routes/sampleCenter/sampleCenterTypeRouter');

app.use('/api/sample-center-types',sampleCenterTypeRouter);



//Routes for sample center


const sampleCenterRouter  = require('./src/routes/sampleCenter/sampleCenterRouter');

app.use('/api/sample-centers',sampleCenterRouter);



//////////////////////////////////////////////////////////////////////////////


app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
});
