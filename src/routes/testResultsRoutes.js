const express = require('express');
const router = express.Router();
const controller = require('../controllers/testResultsController');

router.get('/:reqId', (req, res) => {
    const id = req.params.reqId;
    
    controller.getTestResultFields(id)
        .then( response => {
            res.status(response.status).json(response.data);
        })
        .catch( e => {
            res.status(e.status).json(e.message);
        });
});

router.post('/:reqId', (req, res) => {
    const id = req.params.reqId;

    controller.addTestResults(id, req.body)
        .then(data => {
            res.status(data.status).json(data.data);
        })
        .catch(e => {
            res.status(e.status).json({ error: e.message });
        });
});

router.get('/reports/:id', (req, res) => {
    const id = req.params.id;
    controller.generateReport(id, res)
        .catch(e => {
            res.status(500).json(e);
        });    
})

module.exports = router;