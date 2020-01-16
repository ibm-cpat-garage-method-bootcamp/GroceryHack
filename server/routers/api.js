const express = require('express');
const proxy = require("express-http-proxy");

const apiHost = process.env.API_HOST || 'localhost:3001';
const stateManager = require("../services/state-manager.js");

module.exports = function(app){
  app.get('/api/state', (req, res) => {
    res.send(stateManager.getList())
  })

  app.post('/api/state', (req, res) => {
    stateManager.addItem(req.body.item) ? res.send(true) : res.send(false)
  })

<<<<<<< HEAD
  app.put('/api/state', (req, res) => {
    res.send(stateManager.putItem(req.body.item))
  })

=======
>>>>>>> 217b2e1d3e04673eada3ea49218c3f438b72ffb0
  app.delete('/api/state', (req, res) => {
    res.send(stateManager.deleteItem(req.body.item))
  })
  app.use('/api', proxy(apiHost));
};
