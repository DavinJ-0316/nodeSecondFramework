const express=require("express");
const {getUserList}=require("../controller/usercontroller");
var router=  express.Router();


/**
 * @openapi
 * '/api/user':
 *  get:
 *     tags:
 *     - User Controller
 *     summary: Get all users
 *     security:
 *       - BearerAuth: []
 *     responses:
 *      200:
 *        description: Fetched Successfully
 *      400:
 *        description: Bad Request
 *      401:
 *        description: Unauthorized
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */
router.get("",getUserList);

module.exports=router;