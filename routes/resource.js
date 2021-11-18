var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var tiger_controller = require('../controllers/tiger');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// tiger ROUTES ///
// POST request for creating a tiger.
router.post('/resource/tiger', tiger_controller.tiger_create_post);
// DELETE request to delete tiger.
router.delete('/resource/tiger/:id', tiger_controller.tiger_delete);
// PUT request to update tiger.
router.put('/resource/tiger/:id', tiger_controller.tiger_update_put);
// GET request for one tiger.
router.get('/resource/tiger/:id', tiger_controller.tiger_detail);
// GET request for list of all tiger items.
router.get('/resource/tiger', tiger_controller.tiger_list);
module.exports = router;