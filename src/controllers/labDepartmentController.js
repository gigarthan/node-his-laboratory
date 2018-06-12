//IT16139640
'use strict';

const labDepartmentSchema = require('../models/labDepartment');



const labDepartmentController = function () {


    //Add new test sub category


    this.addLabDepartment = function (labDepartmentInstance) {
        return new Promise((resolve, reject) => {

            const labDepartment = new labDepartmentSchema({
                name: labDepartmentInstance.name
            });

            labDepartment.save().then(() => {

                resolve({
                    status: 200,
                    message: 'New lab department added '
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })
    };



    //Get all lab departments



    this.getAllLabDepartments = function () {
        return new Promise((resolve, reject) => {
            labDepartmentSchema.find().exec().then(data => {
                resolve({
                    status: 200,
                    message: 'Get lab departments',
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





//Get a specific lab department


    this.getSingleLabDepartment = function (name) {
        return new Promise((resolve, reject) => {

            labDepartmentSchema.find({
                name: name
            }).exec().then(data => {

                resolve({
                    status: 200,
                    message: 'Get a specific test sub category',
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




//Update a lab department



    this.updateLabDepartment = function (name, newData) {
        return new Promise((resolve, reject) => {

            labDepartmentSchema.update({
                name: name
            }, newData).then(() => {

                resolve({
                    status: 200,
                    message: 'Update lab department'
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })

    };



//delete lab department



    this.deleteLabDepartment = function (name) {

        return new Promise((resolve, reject) => {
            labDepartmentSchema.remove({
                name: name
            }).then(() => {
                resolve({
                    status: 200,
                    message: 'Delete lab department'
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


module.exports = new labDepartmentController();
