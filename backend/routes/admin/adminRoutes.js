// adminRoutes.js
const express = require('express');
const router = express.Router();

// Import the admin model or schema
const admin = require('../../model/admin/adminSchema');

router.get("/test", (req, res) => {
    return res.status(200).send("backend connected");
  });

module.exports = router;
