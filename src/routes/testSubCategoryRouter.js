//IT16139640

const express = require('express');
const router = express.Router();

const testSubCategoryController = require('../controllers/testSubCategoryController');



//Get test sub categories



router.get('/',  (req, res)=> {
    testSubCategoryController.getAllTestSubCategory().then(data=> {
        res.status(data.status).send(data.data);
    }).catch(err=> {
        res.status(err.status).send(err.message);
    });
});



//Get single test sub category



router.get('/:name', (req, res) =>{
    testSubCategoryController.getSingleTestSubCategory(req.params.name).then(data => {
        res.status(data.status).send(data.data);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//Add new test sub category



router.post('/', (req, res) =>{
    testSubCategoryController.addTestSubCategory(req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});



//delete test category



router.delete('/:name', (req, res) =>{
    testSubCategoryController.deleteTestSubCategory(req.params.name).then(data =>{
        res.status(data.status).send(data.response);
    }).catch(err =>{
        res.status(err.status).send(err.message);
    });
});



//update test category



router.put('/:name', (req, res)=> {
    testSubCategoryController.updateTestSubCategory(req.params.name, req.body).then(data => {
        res.status(data.status).send(data.message);
    }).catch(err => {
        res.status(err.status).send(err.message);
    });
});




module.exports = router;
