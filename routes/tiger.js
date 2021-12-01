var express = require('express');
const tiger_controlers= require('../controllers/tiger');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET tiger */
router.get('/', tiger_controlers.tiger_view_all_Page );
/* GET detail tiger page */
router.get('/detail', tiger_controlers.tiger_view_one_Page);
/* GET create tiger page */
router.get('/create', secured, tiger_controlers.tiger_create_Page);
/* GET create update page */
// router.get('/update', tiger_controlers.tiger_update_Page);
/* GET update tiger page */
router.get('/update', secured, tiger_controlers.tiger_update_Page);
/* GET create tiger page */
router.get('/delete', secured, tiger_controlers.tiger_delete_Page);


module.exports = router;