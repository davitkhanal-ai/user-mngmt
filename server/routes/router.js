const express = require('express')
const route = express.Router()
const services = require("../services/render")


/** @description Root route
 * @method Get
 */
route.get('/',services.homeRoutes)

/** @description add user
 * @method Post
 */
route.get('/add-user',services.add_user)

/** @description update user
 * @method Get
 */
route.get('/update-user',services.update_user)


module.exports = route