"use strict";
(() => {
var exports = {};
exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 1504:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sendgrid)
});

;// CONCATENATED MODULE: external "@sendgrid/mail"
const mail_namespaceObject = require("@sendgrid/mail");
var mail_default = /*#__PURE__*/__webpack_require__.n(mail_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/sendgrid.js

mail_default().setApiKey('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');
async function sendEmail(req, res) {
    try {
        await mail_default().send({
            to: 'rohit.godse@outlook.com',
            from: "contact@softwill.in",
            subject: "Softwill Job Application",
            html: `<div>
              <b>Name: </b>${req.body.name}<br/>
              <b>Email: </b>${req.body.email}<br/>
              <b>Phone: </b>${req.body.phone}<br/>
              <b>Designation: </b>${req.body.designation}<br/>
            </div>`
        });
    } catch (error) {
        console.log(error);
        return res.status(error.statusCode || 500).json({
            error: error.message
        });
    }
    return res.status(200).json({
        error: ""
    });
}
/* harmony default export */ const sendgrid = (sendEmail);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1504));
module.exports = __webpack_exports__;

})();