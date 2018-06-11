var mongoose = require('../config/database')
var LabTest = require('../models/labTest');
var TestField = require('../models/testField');
var TestNotification = require('../models/testNotification');

var Controller = function () {
    this.addLabTest = function (data) {
        return new Promise(function (resolve, reject) {
            var labTest = new LabTest({
                Laboratary: data.Laboratary,
                Category: data.Category,
                SubCategory:data.SubCategory,
                TestName: data.TestName
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

    this.getLabTestInCategory = function (Category) {
        return new Promise(function (resolve, reject) {
            LabTest.find({Category: Category}).exec().then(function (data) {
                resolve({status: 200, test: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error- Test not found: '+reason});
            });
        });
    }

    this.getLabTestInSubCategory = function (SubCategory) {
        return new Promise(function (resolve, reject) {
            LabTest.find({SubCategory: SubCategory}).exec().then(function (data) {
                resolve({status: 200, test: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error- Test not found: '+reason});
            });
        });
    }

    this.updateLabTest = function (testName, data) {
        return new Promise(function (resolve, reject) {
            LabTest.update({TestName: testName}, data).exec().then(function () {
                resolve({status: 200, message: 'Test updated'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot update test: '+reason});
            });
        });
    }

    this.deleteLabTest = function (testName) {
        return new Promise(function (resolve, reject) {

            LabTest.remove({TestName: testName}).then(function () {
                resolve({status: 200, message: 'Test deleted'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot delete test: '+reason});
            });
        });
    }

    this.addTestField = function (data) {
        return new Promise(function (resolve, reject) {
            var testField = new TestField({
                TestName:data.TestName,
                Field: data.Field,
                Gender: data.Gender,
                MinAge:data.MinAge,
                MaxAge: data.MaxAge,
                MinValue:data.MinValue,
                MaxValue:data.MaxValue,
                Unit:data.Unit,
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
            TestField.find({TestName: testName}).exec().then(function (data) {
                resolve({status: 200, book: data});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error- Test not found: '+reason});
            });
        });
    }

    this.updateTestField = function (testName, data) {
        return new Promise(function (resolve, reject) {
            TestField.update({TestName: testName}, data).exec().then(function () {
                resolve({status: 200, message: 'TestFields updated'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot update test fields: '+reason});
            });
        });
    }

    this.deleteTestField = function (testName) {
        return new Promise(function (resolve, reject) {
            TestField.remove({TestName: testName}).then(function () {
                resolve({status: 200, message: 'TestField deleted'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot delete test field: '+reason});
            });
        });
    }

    this.addNotification = function (data) {
        return new Promise(function (resolve, reject) {
            var testNotification = new TestNotification({
                Date: data.Date,
                Category: data.Category,
                SubCategory:data.SubCategory,
                TestName:data.TestName
            });
            testNotification.save().then(function () {
                resolve({status: 201, message: 'TestNotification added'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error: '+reason})
            });

        });
    }

    this.deleteNotification = function (Date,testName) {
        return new Promise(function (resolve, reject) {
            TestNotification.remove({Date: Date},{TestName:testName}).then(function () {
                resolve({status: 200, message: 'Notification deleted'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot delete notification: '+reason});
            });
        });
    }

    this.registerUser = function (data) {
        return new Promise(function (resolve, reject) {
            var register = new Register({
                FirstName: data.FirstName,
                LastName: data.LastName,
                Email:data.Email,
                PhoneNumber:data.PhoneNumber,
                UserName:data.UserName,
                Password:data.Password
            });
            register.save().then(function () {
                resolve({status: 201, message: 'User added'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Error: '+reason})
            });

        });
    }

    this.updateUser = function (UserName, data) {
        return new Promise(function (resolve, reject) {
            Register.update({UserName: UserName}, data).exec().then(function () {
                resolve({status: 200, message: 'User updated'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot update user: '+reason});
            });
        });
    }

    this.deleteUser = function (UserName) {
        return new Promise(function (resolve, reject) {
            Register.remove({UserName: UserName}).then(function () {
                resolve({status: 200, message: 'User deleted'});
            }).catch(function (reason) {
                reject({status: 500, message: 'Cannot delete user: '+reason});
            });
        });
    }

}

module.exports = new Controller();