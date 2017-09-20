const express = require("express");
const router = express.Router();
const helloController = require("../controllers/hello");
const authController = require("../controllers/authController");

//We do not have to add /api because we have already done that in app.js line 31

// function to catch errors so we can avoid writing nested if else statements
function catchErrors(fn) {
  return function(req, res, next) {
    return fn(req, res, next).catch(next);
  };
}

router.get("/", helloController.index);
// route to add new principal.
//catch errors will catch all errors and forward them to error handler in app.js line 47
router.post("/principal/add", catchErrors(authController.principalRegister));

module.exports = router;
