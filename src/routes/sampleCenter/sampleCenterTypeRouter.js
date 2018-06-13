//IT16139640

const express = require('express');
const router = express.Router();

const sampleCenterTypeController = require('../../controllers/sampleCenter/sampleCenterTypeController');



//Get sample center types



router.get('/',  (req, res)=> {
    sampleCenterTypeController.getAllSampleCenterTypes().then(data=> {
        res.status(data.status).send(data.data);
    }).catch(err=> {
        res.status(err.status).send(err.message);
    });
});



//Get single sample center type



router.get('/:name', (req, res) =>{
    sampleCenterTypeController.getSingleSampleCenterType(req.params.name).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//Add new sample center type



router.post('/', (req, res) =>{
    sampleCenterTypeController.addSampleCenterType(req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});



//delete sample center type



router.delete('/:name', (req, res) =>{
    sampleCenterTypeController.deleteSampleCenterType(req.params.name).then(data =>{
        res.status(data.status).send(data.response);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//update sample center type



router.put('/:name', (req, res)=> {
    sampleCenterTypeController.updateSampleCenterType(req.params.name, req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});




module.exports = router;
