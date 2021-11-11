var express = require('express'); 
const tiger_controlers= require('../controllers/tiger'); 
var router = express.Router(); 
 
/* GET tigers */ 
router.get('/', tiger_controlers.tiger_view_all_Page ); 
router.post('/', tiger_controlers.tiger_create_post);
module.exports = router; 