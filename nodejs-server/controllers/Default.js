'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.wxV2MemberAccountClosureReasonsGET = function wxV2MemberAccountClosureReasonsGET (req, res, next, source) {
  Default.wxV2MemberAccountClosureReasonsGET(source)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
