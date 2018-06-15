var express = require('express');
var route = express.Router();
var controller = require('../controllers/labTestController');

route.post('/test', function (req, res) {
    controller.addLabTest(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.get('/test', function (req, res) {
    controller.getAllLabTests().then(function (data) {
        res.status(data.status).send(data.testData);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.get('/getFields', function (req, res) {
    controller.getAllTestFieldsData(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.get('/test/:Category', function (req, res) {
    controller.getLabTestInCategory(req.params.Category).then(function (data) {
        res.status(data.status).send(data.test);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.get('/test1/:subCategory', function (req, res) {
    controller.getLabTestInSubCategory(req.params.subCategory).then(function (data) {
        res.status(data.status).send(data.test);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.put('/uptest/:testName',function (req, res) {
    controller.updateLabTest(req.params.testName, req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.delete('/test/:testName',function (req, res) {
    controller.deleteLabTest(req.params.testName).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.post('/addFields', function (req, res) {
    controller.addTestField(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.put('/field/:testName',function (req, res) {
    controller.updateTestField(req.params.testName, req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.delete('/deleteField/:field',function (req, res) {
    controller.deleteTestField(req.params.field).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.post('/notification', function (req, res) {
    controller.addNotification(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.get('/notification', function (req, res) {
    controller.getNotification(req.body).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});

route.delete('/notification/:testName',function (req, res) {
    controller.deleteNotification(req.params.testName).then(function (data) {
        res.status(data.status).send(data.message);
    }).catch(function (err) {
        res.status(err.status).send(err.message);
    });
});


module.exports = route;