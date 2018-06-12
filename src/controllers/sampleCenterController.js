//IT16139640


const sampleCenterSchema = require('../models/sampleCenter');



const sampleCenterController = function () {


//////Add new sample center


    this.addSampleCenter = function (sampleCenterInstance) {
        return new Promise((resolve, reject) => {

            const sampleCenter = new sampleCenterSchema({

                name: sampleCenterInstance.name,
                type :sampleCenterInstance.type,
                InCharge: sampleCenterInstance.InCharge,
                location: sampleCenterInstance.location,
                email : sampleCenterInstance.email,
                contact1 :sampleCenterInstance.contact1,
                contact2: sampleCenterInstance.contact2
            });

            sampleCenter.save().then(() => {

                resolve({
                    status: 200,
                    message: 'New sample center added '
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })
    };




//////Get all sample centers



    this.getAllSampleCenters = function () {
        return new Promise((resolve, reject) => {
            sampleCenterSchema.find().exec().then(data => {
                resolve({
                    status: 200,
                    message: 'Get sample centers',
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





//////Get a specific sample center

// By name

    this.getSingleSampleCenter = function (name) {
        return new Promise((resolve, reject) => {

            sampleCenterSchema.find({
                name: name
            }).exec().then(data => {

                resolve({
                    status: 200,
                    message: 'Get a specific sample center',
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




//////Update a sample center

//by name

    this.updateSampleCenter= function (name, data) {
        return new Promise((resolve, reject) => {

            sampleCenterSchema.update({
                name: name
            }, data).then(() => {

                resolve({
                    status: 200,
                    message: 'Update sample center by name'
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })

    };




//////delete sample center


//by name


    this.deleteSampleCenter = function (name) {

        return new Promise((resolve, reject) => {
            sampleCenterSchema.remove({
                name: name
            }).then(() => {
                resolve({
                    status: 200,
                    message: 'Delete sample center by name'
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


module.exports = new sampleCenterController();


