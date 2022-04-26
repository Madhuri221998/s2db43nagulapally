var gooogle = require('../models/gooogle');

// List of all gooogle
exports.house_list = async function(req, res) {
    try{
    thehouse = await gooogle.find();
    res.send(thehouse);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

//exports house_list = function(req, res) {
 //res.send('NOT IMPLEMENTED: gooogle list');
//};
// for a specific gooogle.
exports.house_detail = async function(req, res) {
 //res.send('NOT IMPLEMENTED: gooogle detail: ' + req.params.id);
 console.log("detail"  + req.params.id) 
 try { 
     result = await gooogle.findById( req.params.id) 
     res.send(result) 
 } catch (error) { 
     res.status(500) 
     console.log("test--")
     res.send(`{"error": document for id ${req.params.id} not found`); 
 } 
};
// Handle gooogle create on POST.
// Handle gooogle create on POST.
exports.house_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gooogle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many diffeprice formats, we will be picky
    // and require that it be a json object
        document.house_itemname = req.body.house_itemname;
    document.house_quantity = req.body.house_quantity;
    document.house_price = req.body.house_price;
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
//exports.house_delete = function(req, res) {
 //res.send('NOT IMPLEMENTED: gooogle delete DELETE ' + req.params.id);
//};
// Handle gooogle delete on DELETE. 
// Handle gooogle delete on DELETE.
exports.house_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await gooogle.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle gooogle update form on PUT.
//exports.house_update_put = function(req, res) {
 //res.send('NOT IMPLEMENTED: gooogle update PUT' + req.params.id);
//};

//Handle gooogle update form on PUT. 
exports.house_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await gooogle.findById( req.params.id) 
        console.log(req.body);
        // Do updates of properties 
        if(req.body.house_itemname)  
               toUpdate.house_itemname = req.body.house_itemname; 
        if(req.body.house_quantity) toUpdate.house_quantity = req.body.house_quantity; 
        if(req.body.house_price) toUpdate.house_price = req.body.house_price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
}; 

// VIEWS
// Handle a show all view
exports.house_view_all_Page = async function(req, res) {
    try{
        console.log('test'+gooogle.find())
    thehouse = await gooogle.find();
    res.render('gooogle', { title: 'gooogle Search Results', results: thehouse });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // Handle a show one view with id specified by query
exports.house_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await gooogle.findById( req.query.id)
    res.render('housedetail',
   { title: 'gooogle Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for creating a gooogle.
// No body, no in path parameter, no query.
// Does not need to be async
exports.house_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('housecreate', { title: 'gooogle Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle building the view for updating a gooogle.
// query provides the id
exports.house_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await gooogle.findById(req.query.id)
    res.render('houseupdate', { title: 'gooogle Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.house_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await gooogle.findById(req.query.id)
    res.render('housedelete', { title: 'gooogle Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };