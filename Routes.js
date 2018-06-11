var express = require('express');
var Routes = express.Router();
var LabTestRoutes = require('./src/routes/LabTestRoutes');

Routes.use('/labTest/', LabTestRoutes);

module.exports = Routes;