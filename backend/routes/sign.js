const Router = require('express').Router()
    , Ctrl = require('../controller/Sign');

Router.post('/join', (req, res, next) => {
    Ctrl.join(req.body).then(data => { 
    res.json(data)
  }).catch(err => {
    next(err);
  })
});

Router.post(
    '/login', 
    (req, res, next) => {
        Ctrl.login(req.body.id, req.body.pass).then(data => { 
            res.json(data);
        }).catch(err => {
            res.json(err);
            next(err);
        })
});

module.exports = Router;