var express = require('express');
var Route = express.Router();
var controller = require('../controllers/orderRequestController');

Route.post('/request', (req,res) => {
    controller.createNewOrder(req.body).then(response => {
        res.status(response.status).send(response.message);
}).catch(err => {
        res.status(err.status).send(err.message);
})
});

Route.get('/requestView', (req,res) => {
    controller.viewAllOrderRequsts().then(response => {
        res.status(response.status).send(response.message);
}).catch(err => {
        res.status(err.status).send(err.message);
})
});


Route.get('/requestView/:reqId', (req,res) => {
    controller.viewOrderByReqId(req.params.reqId).then(response => {
        res.status(response.status).send(response.message);
}).catch(err => {
        res.status(err.status).send(err.message);
})
});


////////////// NEED TO RE-CHECK AGAIN/////////////////////////////
Route.get('/requestView/:patientHIN', (req,res) => {
    controller.viewOrderByPatientHIN(req.params.patientHIN).then(response => {
    res.status(response.status).send(response.message);
}).catch(err => {
    res.status(err.status).send(err.message);
})
});
///////////////////////////////////////////////////////////////////

Route.delete('/requestView/:reqId' , (req,res) =>{
    controller.delete(req.params.reqId).then( response => {
        res.status(response.status).send(response.message);
}).catch(err => {
        res.status(err.status).send(err.message);
})
});


module.exports = Route;
