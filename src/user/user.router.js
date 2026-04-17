const express = require('express');
const router = express.Router();

// handle post request for path /users
router.post('/users', (request, response) => {
   console.log(request.body)
   return response.json({ route: 'get-users' });
});

module.exports = router;

