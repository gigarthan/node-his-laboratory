//IT16139640


const laboratorySchema = require('../models/laboratory');



const laboratoryController = function () {


//////Add new laboratory


    this.addLaboratory = function (laboratoryInstance) {
        return new Promise((resolve, reject) => {

            const laboratory = new laboratorySchema({

                name: laboratoryInstance.name,
                 labTypes :laboratoryInstance.labTypes,
                 department :laboratoryInstance.department,
                count : laboratoryInstance.count,
                labInCharge: laboratoryInstance.labInCharge,
                location: laboratoryInstance.location,
                email : laboratoryInstance.email,
                contact1 :laboratoryInstance.contact1,
                contact2: laboratoryInstance.contact2
            });

            laboratory.save().then(() => {

                resolve({
                    status: 200,
                    message: 'New laboratory added '
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })
    };



//////Get all laboratories



    this.getAllLaboratories = function () {
        return new Promise((resolve, reject) => {
            laboratorySchema.find().exec().then(data => {
                resolve({
                    status: 200,
                    message: 'Get laboratories',
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





//////Get a specific laboratory

// By name

    this.getSingleLaboratory = function (name) {
        return new Promise((resolve, reject) => {

            laboratorySchema.find({
                name: name
            }).exec().then(data => {

                resolve({
                    status: 200,
                    message: 'Get a specific laboratory',
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




//////Update a laboratory

//by name

    this.updateLaboratory= function (name, data) {
        return new Promise((resolve, reject) => {

            laboratorySchema.update({
                name: name
            }, data).then(() => {

                resolve({
                    status: 200,
                    message: 'Update laboratory by name'
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })

    };




//////delete laboratory


//by name


    this.deleteLaboratory = function (name) {

        return new Promise((resolve, reject) => {
            laboratorySchema.remove({
                name: name
            }).then(() => {
                resolve({
                    status: 200,
                    message: 'Delete laboratory by name'
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


module.exports = new laboratoryController();


