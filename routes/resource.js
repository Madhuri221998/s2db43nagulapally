var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var tool_controller = require('../controllers/tool'); 

/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/gooogle', gooogle_controller.gooogle_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/gooogle/:id', gooogle_controller.gooogle_delete); 
 
// PUT request to update Costume. 
router.put('/gooogle/:id', gooogle_controller.gooogle_update_put); 
 
// GET request for one Costume. 
router.get('/gooogle/:id', gooogle_controller.gooogle_detail); 
 
// GET request for list of all Costume items. 
router.get('/gooogle', gooogle_controller.gooogle_list); 
 
module.exports = router; 