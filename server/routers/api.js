const express = require('express');
const proxy = require("express-http-proxy");

const apiHost = process.env.API_HOST || 'localhost:3001';
const db = require("../../db/db_server")


module.exports = function(app){
  app.get('/api/state', async (req, res) => {
    try {
      const groceryList = await db.getList();
      res.send(groceryList)
    } catch (error) {
      res.status(400).send("couldnt get that list")
    }
  })

  app.post('/api/state', async (req, res) => {
    try {
      await db.addItem(req.body.item) ? res.send(true) : res.send(false)
    } catch (error) {
      res.status(400).send("couldnt add that item")
    }
  })

  app.put('/api/state', async (req, res) => {
    try {
    // TODO: take id
    const data = await db.putItem(red.body.id, req.body.item);
    res.send(data)
    } catch (error) {
      res.status(400).send("couldnt update that item")
    }
  })

  app.delete('/api/state', async (req, res) => {
    try {
      const data = await db.deleteItem(req.body.item)
      res.send(data)
    } catch (error) {
      res.status(400).send("couldnt update that item")
    }
  })
  app.use('/api', proxy(apiHost));
};
