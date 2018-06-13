//IT16139640

const express = require('express');
const router = express.Router();

const testCategoryController = require('../../controllers/labTest/testCategoryController');



//Get lab categories



router.get('/',  (req, res)=> {
    testCategoryController.getAllTestCategory().then(data=> {
        res.status(data.status).send(data.data);
    }).catch(err=> {
        res.status(err.status).send(err.message);
    });
});



//Get single test category by categoryName



router.get('/:categoryName', (req, res) =>{
    testCategoryController.getSingleTestCategory(req.params.name).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//Add new test category



router.post('/', (req, res) =>{
    testCategoryController.addTestCategory(req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});



//delete test category by categoryName



router.delete('/:categoryName', (req, res) =>{
    testCategoryController.deleteTestCategory(req.params.name).then(data =>{
        res.status(data.status).send(data.response);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//update test category by categoryName



router.put('/:categoryName', (req, res)=> {
    testCategoryController.updateTestCategory(req.params.name, req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});




module.exports = router;
