const express = require('express')
const { getuser, getuserr, postuser, deleteuser, patchuser, putuser } = require("../control/user.control")

const routing = express.Router()
routing.get ('/users',getuserr );
routing.get ('/users/:id',getuser);
routing.post ('/users',postuser );
routing.delete ('/users/:id', deleteuser);
routing.patch ('/users/:id',patchuser );
routing.put ('/users/:id',putuser );

module.exports = routing