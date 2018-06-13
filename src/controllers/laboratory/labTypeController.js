//IT16139640


const labTypeSchema = require('../../models/laboratory/labType');



const labTypeController = function () {


    //Add new lab type


    this.addLabType = function (labTypeInstance) {
        return new Promise((resolve, reject) => {

            const labType = new labTypeSchema({
                name: labTypeInstance.name
            });

            labType.save().then(() => {

                resolve({
                    status: 200,
                    message: 'New lab type added '
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })
    };



    //Get all lab types



    this.getAllLabTypes = function () {
        return new Promise((resolve, reject) => {
            labTypeSchema.find().exec().then(data => {
                resolve({
                    status: 200,
                    message: 'Get lab types',
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





//Get a specific lab type


    this.getSingleLabType = function (name) {
        return new Promise((resolve, reject) => {

            labTypeSchema.find({
                name: name
            }).exec().then(data => {

                resolve({
                    status: 200,
                    message: 'Get a specific lab type',
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




//Update a lab type



    this.updateLabType = function (name, newData) {
        return new Promise((resolve, reject) => {

            labTypeSchema.update({
                name: name
            }, newData).then(() => {

                resolve({
                    status: 200,
                    message: 'Update lab type'
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })

    };




//delete lab type



    this.deleteLabType = function (name) {

        return new Promise((resolve, reject) => {
            labTypeSchema.remove({
                name: name
            }).then(() => {
                resolve({
                    status: 200,
                    message: 'Delete lab type'
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


module.exports = new labTypeController();


