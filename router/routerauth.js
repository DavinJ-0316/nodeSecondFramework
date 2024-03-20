const express = require("express");
const logincontroller = require("../controller/authcontroller");

const router = express.Router();

/** POST Methods */ /**
 * @openapi
 * '/api/login':
 *  post:
 *     tags:
 *     - Login Controller
 *     summary: Login and generate Token
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *            type: object
 *            required:
 *              - username
 *              - password
 *            properties:
 *              username:
 *                type: string
 *              password:
 *                type: string
 *     responses:
 *      201:
 *        description: Created
 *      409:
 *        description: Conflict
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */ // register user/**
router.post("/login", logincontroller.logincontroller);

module.exports = router;