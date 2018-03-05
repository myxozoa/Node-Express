// import express from 'express';
// import bodyParser from 'body-parser';
const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = 3030;
const STATUS_SUCCESSFUL = 200;

const users = [{ id: 21, name: 'test'}, { id: 1, name: 'also testing'}];

server.get('/users', (req, res) => {
  res.status(STATUS_SUCCESSFUL);
  res.send(users);
});

server.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  let foundUser = null;
  users.forEach((user) => {
    if (id === user.id) {
      foundUser = user;
    }
  });
  res.status(STATUS_SUCCESSFUL);
  res.send(foundUser);
});

server.listen(PORT, (err) => {
  if (err) console.error(err);
  else console.log(`Server is listening on port ${PORT}`);
});