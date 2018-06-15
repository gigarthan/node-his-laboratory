const Order = require('../models/order');
const TestField = require('../models/testField');
const Result = require('../models/results');

const controller = function () {
    this.getTestResultFields = function (id) {
        return new Promise((resolve, reject) => {
            Order.findById(id)
                .then(order => {
                    const age = getAge(order.dob);
                    const {
                        testName,
                        gender,
                        fullName,
                        dob,
                        patientHIN
                    } = order;
                    const patient = {
                        testName,
                        gender,
                        fullName,
                        dob,
                        patientHIN
                    };
                    TestField.find({
                            testName,
                            minAge: {
                                $lte: age
                            },
                            maxAge: {
                                $gte: age
                            },
                            gender
                        })
                        .then(fields => {
                            const fieldNames = fields.map(field => {
                                return field.field
                            });
                            const data = {
                                patient,
                                fields: fieldNames
                            }
                            resolve({
                                status: 200,
                                data: data
                            });
                        })
                        .catch(e => {
                            reject({
                                status: 500,
                                message: e.message
                            });
                        });
                })
                .catch(e => {
                    reject({
                        status: 500,
                        message: e.message
                    });
                });
        });
    }

    this.addTestResults = function (id, values) {
        return new Promise((resolve, reject) => {
            const result = new Result();
            result.request = id;
            result.results = values;
            result.save()
                .then(() => {
                    Order.findById(id)
                        .then(order => {
                            order.status = 'report_issued';
                            order.save()
                                .then(() => {
                                    resolve({
                                        status: 201,
                                        data: {
                                            success: true
                                        }
                                    });
                                })
                                .catch(e => {
                                    reject({
                                        status: 500,
                                        message: e.message
                                    });
                                })
                        })
                        .catch(e => {
                            reject({
                                status: 500,
                                message: e.message
                            });
                        })
                })
                .catch(e => {
                    reject({
                        status: 500,
                        message: e.message
                    });
                })
        });
    }

    this.generateReport = function (id, res) {

        return new Promise((resolve, reject) => {
            Result.find({
                    request: id
                })
                .populate('request')
                .exec()
                .then(results => {
                    const result = results[0];
                    const PDFDocument = require('../pdf/pdfTable');
                    let doc = new PDFDocument();

                    doc.pipe(res);

                    let resultFields = [];
                    for(let f in result.results){
                        resultFields.push(f);
                    }

                    TestField.find({
                            field: {
                                $in: resultFields
                            }
                        })
                        .then(testFields => {

                            let referenceRange = {};
                            let referenceRangeUnit = {}
                            
                            testFields.forEach(field => {
                                referenceRange[field.field] = `${field.minValue}-${field.maxValue}`;
                                referenceRangeUnit[field.field] = field.unit;
                            });

                            let resultRow = [];

                            for (let r in result.results) {
                                let ref = referenceRange[r] + ' ' + referenceRangeUnit[r];
                                resultRow.push([r, result.results[r], ref]);
                            }

                            const resultTable = {
                                headers: ['        ', 'Result', 'Reference Range'],
                                rows: resultRow
                            };

                            const patientAge = getAge(result.request.dob);

                            doc.text(`Patient Name           : ${result.request.fullName}`);
                            doc.moveDown();
                            doc.text(`Age                             : ${patientAge}`);
                            doc.moveDown();
                            doc.text(`Gender                      : ${result.request.gender}`);
                            doc.moveDown();
                            doc.text(`Reference No          : ${result.request._id}`);
                            doc.moveDown();
                            doc.text(`Requested By          : ${result.request.reqPerson}`);
                            doc.moveDown();
                            doc.text(`Specimen                  : ${result.request.specimen.type}`);
                            doc.moveDown();

                            doc.fontSize('20').text(`${result.request.testName}`, {
                                underline: true,
                                align: 'center',

                            });
                            doc.moveDown();
                            doc.fontSize('12');
                            doc.table(resultTable);


                            doc.end();
                            resolve({
                                status: 200,
                                file: doc
                            });
                        })
                        .catch(e => {
                            console.log(e);
                        })


                })
                .catch(e => {
                    reject({
                        status: 500,
                        message: e.message
                    });
                });


            return;
        });
    }
}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

module.exports = new controller();