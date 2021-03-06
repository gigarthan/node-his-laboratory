//IT16139640
'use strict';

const mongoose = require('../../config/database');
const testCategorySchema = require('../../models/labTest/testCategory');



const testCategoryController = function () {


    //Add new test category


    this.addTestCategory = function (testCategoryInstance) {
        return new Promise((resolve, reject) => {

            const testCategory = new testCategorySchema({
                name: testCategoryInstance.name,
                subCategoryName: testCategoryInstance.subCategoryName,
                specimenType: testCategoryInstance.specimenType,
                specimenRetentionType: testCategoryInstance.specimenRetentionType,
                duration: testCategoryInstance.duration,
            });

            testCategory.save().then(() => {

                resolve({
                    status: 200,
                    message: 'New Test Category added '
                });
            }).catch(err => {
                reject({
                    status: 404,
                    message: err
                });
            })

        })
    };



    //Get all test categories



    this.getAllTestCategory = function () {
        return new Promise((resolve, reject) => {
            testCategorySchema.find().exec().then(data => {
                resolve({
                    status: 200,
                    message: 'Get test categories',
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





//Get a specific test category by categoryName



this.getSingleTestCategory = function (name) {
    return new Promise((resolve, reject) => {

        testCategorySchema.find({
            name: name
        }).exec().then(data => {

            resolve({
                status: 200,
                message: 'Get a specific test category',
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




//Update a test category by categoryName



this.updateTestCategory = function (name, newData) {
    return new Promise((resolve, reject) => {

        testCategorySchema.update({
            name: name
        }, newData).then(() => {

            resolve({
                status: 200,
                message: 'Update test category'
            });
        }).catch(err => {
            reject({
                status: 404,
                message: err
            });
        })

    })

};



//delete test category by categoryName



this.deleteTestCategory = function (name) {

    return new Promise((resolve, reject) => {
        testCategorySchema.remove({
            name: name
        }).then(() => {
            resolve({
                status: 200,
                message: 'Delete test category'
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


module.exports = new testCategoryController();
