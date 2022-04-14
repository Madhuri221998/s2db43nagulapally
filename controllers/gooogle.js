var gooogle = require('../models/gooogle');

// List of all gooogle
exports.gooogle_list = async function(req, res) {
    try{
    thegooogle = await gooogle.find();
    res.send(thegooogle);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

//exports gooogle_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: gooogle list');
//};
// for a specific gooogle.
exports.gooogle_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: gooogle detail: ' + req.params.id);
};
// Handle gooogle create on POST.
// Handle Costume create on POST.
exports.gooogle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gooogle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.gooogle_rooms = req.body.gooogle_rooms;
    document.gooogle_area = req.body.gooogle_area;
    document.gooogle_rent = req.body.gooogle_rent;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
// Handle gooogle delete form on DELETE.
exports.gooogle_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: gooogle delete DELETE ' + req.params.id);
};
// Handle gooogle update form on PUT.
exports.gooogle_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: gooogle update PUT' + req.params.id);
};

// VIEWS
// Handle a show all view
exports.gooogle_view_all_Page = async function(req, res) {
    try{
    thegooogle = await gooogle.find();
    res.render('gooogle', { title: 'gooogle Search Results', results: thegooogle });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };