//IT16139640

const express = require('express');
const router = express.Router();

const laboratoryController = require('../controllers/laboratoryController');



//////Get laboratories



router.get('/',  (req, res)=> {
    laboratoryController.getAllLaboratories().then(data=> {
        res.status(data.status).send(data.data);
    }).catch(err=> {
        res.status(err.status).send(err.message);
    });
});



//////Get single laboratory

//By name

router.get('/:name', (req, res) =>{
    laboratoryController.getSingleLaboratory(req.params.name).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});




//////Add new laboratory



router.post('/', (req, res) =>{
    laboratoryController.addLaboratory(req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});



//////delete laboratory

//by name

router.delete('/:name', (req, res) =>{
    laboratoryController.deleteLaboratory(req.params.name).then(data =>{
        res.status(data.status).send(data.response);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//////update laboratory

//Update lab by name

router.put('/:name', (req, res)=> {
    laboratoryController.updateLaboratory(req.params.name, req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});




module.exports = router;
