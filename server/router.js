const Router = require('express');

const controller = require('./controller');

const router = new Router();

router.get('/firstPageOnLoad', controller.firstPageOnLoad);

router.post('/checkButtonClick', controller.checkButtonClick);

module.exports = router;