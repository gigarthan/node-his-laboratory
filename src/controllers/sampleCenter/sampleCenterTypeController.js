//IT16139640

const sampleCenterTypeSchema = require('../../models/sampleCenter/sampleCenterType');



const sampleCenterTypeController = function () {


    //Add new sample center type


    this.addSampleCenterType = function (sampleCenterTypeInstance) {
        return new Promise((resolve, reject) => {

            const sampleCenterType = new sampleCenterTypeSchema({
                name: sampleCenterTypeInstance.name
            });

            sampleCenterType.save().then(() => {

                resolve({
                    status: 200,
                    message: 'New sample center type added '
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })
    };



    //Get all sample center types



    this.getAllSampleCenterTypes = function () {
        return new Promise((resolve, reject) => {
            sampleCenterTypeSchema.find().exec().then(data => {
                resolve({
                    status: 200,
                    message: 'Get sample center types',
                    data: data
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            });
        })
    };





//Get a specific sample center type


    this.getSingleSampleCenterType = function (name) {
        return new Promise((resolve, reject) => {

            sampleCenterTypeSchema.find({
                name: name
            }).exec().then(data => {

                resolve({
                    status: 200,
                    message: 'Get a specific sample center type',
                    data: data
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })


    };




//Update a sample center type



    this.updateSampleCenterType = function (name, newData) {
        return new Promise((resolve, reject) => {

            sampleCenterTypeSchema.update({
                name: name
            }, newData).then(() => {

                resolve({
                    status: 200,
                    message: 'Update sample center type'
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })

    };




//delete sample center type



    this.deleteSampleCenterType = function (name) {

        return new Promise((resolve, reject) => {
            sampleCenterTypeSchema.remove({
                name: name
            }).then(() => {
                resolve({
                    status: 200,
                    message: 'Delete sample center type'
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            });
        });
    };


};


module.exports = new sampleCenterTypeController();


