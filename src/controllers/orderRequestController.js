var mongoose = require('../config/database')
var orderSchema = require('../models/order');

var orderController = function () {

    this.createNewOrder = function (orderData) {
        return new Promise((resolve, reject) => {
            var request = new orderSchema({
                patientHIN: orderData.patientHIN,
                fullName: orderData.fullName,
                gender: orderData.gender,
                dob: orderData.dob,

                reqPerson: orderData.reqPerson,
                departmentCategory: orderData.departmentCategory,
                departmentSubCategory: orderData.departmentSubCategory,

                testName: orderData.testName,
                priority: orderData.priority,
                comment: orderData.comment,

                reqDate: orderData.reqDate,
                dueDate: orderData.dueDate
            })
            request.save().then(() => {
                resolve({
                    'status': 201,
                    'message': 'New Order Request Created!'
                });
            }).catch(err => {
                reject({
                    'status': 500,
                    'message': err
                });
            })
        })
    }


    this.viewAllOrderRequsts = function () {
        return new Promise((resolve, reject) => {
            orderSchema.find().exec().then(data => {
                resolve({
                    'status': 200,
                    'message': data
                });
            }).catch(err => {
                reject({
                    'status': 404,
                    'message': err
                });
            })
        })
    }


    this.viewOrderByReqId = function (reqId) {
        return new Promise((resolve, reject) => {
            orderSchema.find({
                _id: reqId
            }).exec().then(data => {
                resolve({
                    'status': 200,
                    'message': data
                });
            }).catch(err => {
                reject({
                    'status': 404,
                    'message': err
                });
            })
        })
    }

    ////////////// NEED TO RE-CHECK AGAIN//////////////////////////////////////////////
    this.viewOrderByPatientHIN = function (patientHIN) {
        return new Promise((resolve, reject) => {
            orderSchema.find({
                patientHIN: patientHIN
            }).exec().then(data => {
                resolve({
                    'status': 200,
                    'message': data
                });
            }).catch(err => {
                reject({
                    'status': 404,
                    'message': err
                });
            })
        })
    }
    ////////////////////////////////////////////////////////////////////////


    this.delete = function (id) {
        return new Promise((resolve, reject) => {
            orderSchema.remove({
                _id: id
            }).then(() => {
                resolve({
                    'status': 200,
                    'message': 'Order Request Deleted'
                });
            }).catch(err => {
                reject({
                    'status': 500,
                    'message': err
                });
            })
        })
    }
}

module.exports = new orderController();