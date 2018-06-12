//IT16139640
'use strict';

const testSubCategorySchema = require('../models/testSubCategory');



const testSubCategoryController = function () {


    //Add new test sub category


    this.addTestSubCategory = function (testSubCategoryInstance) {
        return new Promise((resolve, reject) => {

            const testSubCategory = new testSubCategorySchema({
                name: testSubCategoryInstance.name
            });

            testSubCategory.save().then(() => {

                resolve({
                    status: 200,
                    message: 'New Test sub Category added '
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })
    };



    //Get all test sub categories



    this.getAllTestSubCategory = function () {
        return new Promise((resolve, reject) => {
            testSubCategorySchema.find().exec().then(data => {
                resolve({
                    status: 200,
                    message: 'Get test sub categories',
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





//Get a specific test sub category



    this.getSingleTestSubCategory = function (name) {
        return new Promise((resolve, reject) => {

            testSubCategorySchema.find({
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




//Update a test sub category



    this.updateTestSubCategory = function (name, newData) {
        return new Promise((resolve, reject) => {

            testSubCategorySchema.update({
                name: name
            }, newData).then(() => {

                resolve({
                    status: 200,
                    message: 'Update test sub category'
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })

    };



//delete test sub category



    this.deleteTestSubCategory = function (name) {

        return new Promise((resolve, reject) => {
            testSubCategorySchema.remove({
                name: name
            }).then(() => {
                resolve({
                    status: 200,
                    message: 'Delete test sub category'
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


module.exports = new testSubCategoryController();
