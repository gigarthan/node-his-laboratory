var express = require('express');
var Route = express.Router();
var controller = require('../controllers/orderRequestController');

Route.post('/', (req, res) => {
    controller.createNewOrder(req.body).then(response => {
        res.status(response.status).send(response.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});

Route.get('/', (req, res) => {
    controller.viewAllOrderRequsts().then(response => {
        res.status(response.status).send(response.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});


Route.get('/:reqId', (req, res) => {
    controller.viewOrderByReqId(req.params.reqId).then(response => {
        res.status(response.status).send(response.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});

////////////// NEED TO RE-CHECK AGAIN/////////////////////////////
Route.get('/patient/:patientHin', (req, res) => {
    controller.viewOrderByPatientHIN(req.params.patientHin).then(response => {
        res.status(response.status).send(response.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});
///////////////////////////////////////////////////////////////////

// Route.delete('/:reqId', (req, res) => {
//     controller.delete(req.params.id).then(response => {
//         res.status(response.status).send(response.message);
//     }).catch(err => {
//         res.status(err.status).send(err.message);
//     });
// });

Route.put('/:reqId', (req, res) => {
    const {body} = req;
    const {reqId} = req.params;
    controller.addSpecimenDetails(id, body)
            .then(response => {
                res.status(response.status).json(response.message);
            })
            .catch(err => {
                res.status(err.status).json(err.message);
            });
});


module.exports = Route;