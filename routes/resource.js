var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var gooogle_controller = require('../controllers/gooogle');
var detail_controllers = require('../controllers/detail');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// gooogle ROUTES ///
// POST request for creating a gooogle.
router.post('/gooogle', gooogle_controller.gooogle_create_post);
// DELETE request to delete gooogle.
router.delete('/gooogle/:id', gooogle_controller.gooogle_delete);
// PUT request to update gooogle.
router.put('/gooogle/:id',gooogle_controller.gooogle_update_put);
// GET request for one gooogle.
router.get('/gooogle/:id', gooogle_controller.gooogle_detail);
// GET request for list of all gooogle items.
router.get('/gooogle', gooogle_controller.gooogle_list);
/* GET detail costume page */ 
router.get('/detail', detail_controllers.gooogle_view_one_Page);
module.exports = router;