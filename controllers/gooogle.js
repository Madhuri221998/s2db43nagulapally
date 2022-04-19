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
exports.gooogle_detail = async function(req, res) {
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
exports.gooogle_create_post = async function(req, res) {
    console.log(req.body)
    let document = new gooogle();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many diffeprice formats, we will be picky
    // and require that it be a json object
    // {"gooogle_type":"goat", "cost":12, "size":"large"}
    document.gooogle_itemname = req.body.gooogle_itemname;
    document.gooogle_quantity = req.body.gooogle_quantity;
    document.gooogle_price = req.body.gooogle_price;
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
//exports.gooogle_delete = function(req, res) {
 //res.send('NOT IMPLEMENTED: gooogle delete DELETE ' + req.params.id);
//};
// Handle gooogle delete on DELETE. 
exports.gooogle_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
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
//exports.gooogle_update_put = function(req, res) {
 //res.send('NOT IMPLEMENTED: gooogle update PUT' + req.params.id);
//};

//Handle gooogle update form on PUT. 
exports.gooogle_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await gooogle.findById( req.params.id) 
        console.log(req.body);
        // Do updates of properties 
        if(req.body.gooogle_itemname)  
               toUpdate.gooogle_itemname = req.body.gooogle_itemname; 
        if(req.body.gooogle_quantity) toUpdate.gooogle_quantity = req.body.gooogle_quantity; 
        if(req.body.gooogle_price) toUpdate.gooogle_price = req.body.gooogle_price; 
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
exports.gooogle_view_all_Page = async function(req, res) {
    try{
        console.log('test'+gooogle.find())
    thegooogle = await gooogle.find();
    res.render('gooogle', { title: 'gooogle Search Results', results: thegooogle });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };