const express = require('express');
const Router = express.Router();
const Ctrl = require('../controller/employee');

Router.post(
    '/create', 
    (req, res, next) => {
        Ctrl.create(req.body).then(data => { 
          res.json(data)
        }).catch(err => {
          next(err);
        })
});

Router.get(
    '/', 
    (req, res) => {
        Ctrl.list().then(data => { 
          res.json(data)
        }).catch(err => {
          next(err);
        })
})

Router.get(
    '/read/:id', 
    (req, res) => {
        Ctrl.view(req.params.id).then(data => { 
          res.json(data)
        }).catch(err => {
          next(err);
        })
})

Router.put(
    '/update/:id', 
    (req, res, next) => {
        Ctrl.modify(req.params._id, req.body).then(data => { 
          res.json(data)
        }).catch(err => {
          next(err);
        })
})

Router.delete(
    '/delete/:id', 
    (req, res, next) => {
        Ctrl.delete(req.params.id).then(data => { 
          res.json(data)
        }).catch(err => {
          next(err);
        })
})

module.exports = Router;