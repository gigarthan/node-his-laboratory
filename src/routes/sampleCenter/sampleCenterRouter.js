//IT16139640

const express = require('express');
const router = express.Router();

const sampleCenterController = require('../../controllers/sampleCenter/sampleCenterController');



//////Get sample centers



router.get('/',  (req, res)=> {
    sampleCenterController.getAllSampleCenters().then(data=> {
        res.status(data.status).send(data.data);
    }).catch(err=> {
        res.status(err.status).send(err.message);
    });
});




//////Get single sample center


//By name


router.get('/:name', (req, res) =>{
    sampleCenterController.getSingleSampleCenter(req.params.name).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});




//////Add new sample center



router.post('/', (req, res) =>{
    sampleCenterController.addSampleCenter(req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});



//////delete sample center



//by name


router.delete('/:name', (req, res) =>{
    sampleCenterController.deleteSampleCenter(req.params.name).then(data =>{
        res.status(data.status).send(data.response);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});




//////update sample center



//Update by name


router.put('/:name', (req, res)=> {
    sampleCenterController.updateSampleCenter(req.params.name, req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});




module.exports = router;
