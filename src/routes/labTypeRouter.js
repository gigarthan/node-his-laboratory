//IT16139640

const express = require('express');
const router = express.Router();

const labTypeController = require('../controllers/labTypeController');



//Get lab types



router.get('/',  (req, res)=> {
    labTypeController.getAllLabTypes().then(data=> {
        res.status(data.status).send(data.data);
    }).catch(err=> {
        res.status(err.status).send(err.message);
    });
});



//Get single lab type



router.get('/:name', (req, res) =>{
    labTypeController.getSingleLabType(req.params.name).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//Add new lab type



router.post('/', (req, res) =>{
    labTypeController.addLabType(req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});



//delete lab type



router.delete('/:name', (req, res) =>{
    labTypeController.deleteLabType(req.params.name).then(data =>{
        res.status(data.status).send(data.response);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//update lab type



router.put('/:name', (req, res)=> {
    labTypeController.updateLabType(req.params.name, req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});




module.exports = router;
