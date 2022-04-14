var express = require('express');
const gooogle_controlers= require('../controllers/gooogle');
var router = express.Router();
/* GET house */
router.get('/', gooogle_controlers.gooogle_view_all_Page );
module.exports = router;