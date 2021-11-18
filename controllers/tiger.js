var tiger = require('../models/tiger');
// List of all tigers
exports.tiger_list = function (req, res) {
    res.send('NOT IMPLEMENTED: tiger list');
};
// for a specific tiger.
// for a specific tiger.
exports.tiger_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await tiger.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };
// Handle tiger create on POST.
exports.tiger_create_post = async function (req, res) {
    console.log(req.body)
    let document = new tiger();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"tiger_type":"regular", "quantity":13, "cost":43.56}
    document.color = req.body.color;
    document.place = req.body.place;
    document.weight = req.body.weight;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle tiger delete on DELETE.
exports.tiger_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await tiger.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle tiger update form on PUT.
exports.tiger_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await tiger.findById( req.params.id)
 // Do updates of properties
 if(req.body.color)
 toUpdate.color = req.body.color;
 if(req.body.place) toUpdate.place = req.body.place;
 if(req.body.weight) toUpdate.weight = req.body.weight;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
 }
};

// List of all tigers
exports.tiger_list = async function (req, res) {
    try {
        thetiger = await tiger.find();
        res.send(thetiger);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.tiger_view_all_Page = async function (req, res) {
    try {
        thetiger = await tiger.find();
        res.render('tiger', {
            title: 'tiger Search Results',
            results: thetiger
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.tiger_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await tiger.findById( req.query.id)
    res.render('tigerdetail',
   { title: 'tiger Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a tiger.
// No body, no in path parameter, no query.
// Does not need to be async
exports.tiger_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('tigercreate', { title: 'tiger Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a tiger.
// query provides the id
exports.tiger_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await tiger.findById(req.query.id)
    res.render('tigerupdate', { title: 'tiger Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.tiger_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await tiger.findById(req.query.id)
    res.render('tigerdelete', { title: 'tiger Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };