var express = require('express');
var Route = express.Router();
var controller = require('../controllers/orderRequestController');

Route.post('/requests', (req,res) => {
    controller.createNewOrder(req.body).then(response => {
        res.status(response.status).send(response.message);
}).catch(err => {
        res.status(err.status).send(err.message);
})
});

Route.get('/requests-view', (req,res) => {
    controller.viewAllOrderRequsts().then(response => {
        res.status(response.status).send(response.message);
}).catch(err => {
        res.status(err.status).send(err.message);
})
});


Route.get('/requests-view/:reqId', (req,res) => {
    controller.viewOrderByReqId(req.params.reqId).then(response => {
        res.status(response.status).send(response.message);
}).catch(err => {
        res.status(err.status).send(err.message);
})
});


////////////// NEED TO RE-CHECK AGAIN/////////////////////////////
Route.get('/requests-view/:patient-hin', (req,res) => {
    controller.viewOrderByPatientHIN(req.params.patientHIN).then(response => {
    res.status(response.status).send(response.message);
}).catch(err => {
    res.status(err.status).send(err.message);
})
});
///////////////////////////////////////////////////////////////////

Route.delete('/requests-view/:reqId' , (req,res) =>{
    controller.delete(req.params.id).then( response => {
        res.status(response.status).send(response.message);
}).catch(err => {
        res.status(err.status).send(err.message);
})
});


module.exports = Route;
