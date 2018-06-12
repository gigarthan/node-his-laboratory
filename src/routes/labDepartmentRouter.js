//IT16139640

const express = require('express');
const router = express.Router();

const labDepartmentController = require('../controllers/labDepartmentController');



//Get lab departments



router.get('/',  (req, res)=> {
    labDepartmentController.getAllLabDepartments().then(data=> {
        res.status(data.status).send(data.data);
    }).catch(err=> {
        res.status(err.status).send(err.message);
    });
});



//Get single test category



router.get('/:name', (req, res) =>{
    labDepartmentController.getSingleLabDepartment(req.params.name).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//Add new test category



router.post('/', (req, res) =>{
    labDepartmentController.addLabDepartment(req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});



//delete test category



router.delete('/:name', (req, res) =>{
    labDepartmentController.deleteLabDepartment(req.params.name).then(data =>{
        res.status(data.status).send(data.response);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//update test category



router.put('/:name', (req, res)=> {
    labDepartmentController.updateLabDepartment(req.params.name, req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});




module.exports = router;
