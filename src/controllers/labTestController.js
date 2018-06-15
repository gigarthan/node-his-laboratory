var mongoose = require('../config/database')
var LabTest = require('../models/labTest');
var TestField = require('../models/testField');
var TestNotification = require('../models/testNotification');

var Controller = function () {
    this.addLabTest = function (data) {
        return new Promise(function (resolve, reject) {
            var labTest = new LabTest({
                laboratory: data.laboratory,
                category: data.category,
                subCategory:data.subCategory,
                testName: data.testName
            });
            labTest.save().then(function () {
                resolve({status: 201, message: 'Test added'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error: '+reason})
            });

        });
    }

    this.getAllLabTests = function () {
        return new Promise(function (resolve, reject) {
            LabTest.find().exec().then(function (data) {
                resolve({status: 200, testData: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error: '+reason});
            });
        });
    }

    this.getAllTestFieldsData = function () {
        return new Promise(function (resolve, reject) {
            TestField.find().exec().then(function (data) {
                resolve({status: 200, message: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error- Test not found: '+reason});
            });
        });
    }

    this.getLabTestInCategory = function (Category) {
        return new Promise(function (resolve, reject) {
            LabTest.find({category: Category}).exec().then(function (data) {
                resolve({status: 200, test: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error- Test not found: '+reason});
            });
        });
    }

    this.getLabTestInSubCategory = function (SubCategory) {
        return new Promise(function (resolve, reject) {
            LabTest.find({subCategory: SubCategory}).exec().then(function (data) {
                resolve({status: 200, test: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error- Test not found: '+reason});
            });
        });
    }

    this.updateLabTest = function (testName, data) {
        return new Promise(function (resolve, reject) {
            LabTest.update({testName: testName}, data).then(function () {
                resolve({status: 200, message: 'Test updated'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot update test: '+reason});
            });
        });
    }

    this.deleteLabTest = function (testName) {
        return new Promise(function (resolve, reject) {

            LabTest.remove({testName: testName}).then(function () {
                resolve({status: 200, message: 'Test deleted'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot delete test: '+reason});
            });
        });
    }

    this.addTestField = function (data) {
        return new Promise(function (resolve, reject) {
            var testField = new TestField({
                testName:data.testName,
                field: data.field,
                gender: data.gender,
                minAge:data.minAge,
                maxAge: data.maxAge,
                minValue:data.minValue,
                maxValue:data.maxValue,
                unit:data.unit,
            });
            testField.save().then(function () {
                resolve({status: 201, message: 'TestField added'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error: '+reason})
            });

        });
    }

    this.getAllTestFields = function (testName) {
        return new Promise(function (resolve, reject) {
            TestField.find({testName: testName}).exec().then(function (data) {
                resolve({status: 200, book: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error- Test not found: '+reason});
            });
        });
    }

    this.updateTestField = function (testName, data) {
        return new Promise(function (resolve, reject) {
            TestField.update({testName: testName}, data).then(function () {
                resolve({status: 200, message: 'TestFields updated'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot update test fields: '+reason});
            });
        });
    }

    this.deleteTestField = function (testField) {
        return new Promise(function (resolve, reject) {
            TestField.remove({field: testField}).then(function () {
                resolve({status: 200, message: 'TestField deleted'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot delete test field: '+reason});
            });
        });
    }



    this.addNotification = function (data) {
        return new Promise(function (resolve, reject) {
            var testNotification = new TestNotification({
                date: data.date,
                category: data.category,
                subCategory:data.subCategory,
                testName:data.testName
            });
            testNotification.save().then(function () {
                resolve({status: 201, message: 'TestNotification added'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error: '+reason})
            });

        });
    }

    this.getNotification = function () {
        return new Promise(function (resolve, reject) {
            TestNotification.find().exec().then(function (data) {
                resolve({status: 200, message: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error: '+reason});
            });
        });
    }

    this.deleteNotification = function (testName) {
        return new Promise(function (resolve, reject) {
            TestNotification.remove({testName:testName}).then(function () {
                resolve({status: 200, message: 'Notification deleted'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot delete notification: '+reason});
            });
        });
    }

}

module.exports = new Controller();