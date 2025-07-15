//import express from 'express';
//import path from 'path';
//import index.ejs from 'ejs';
const express = require('express');
const app = express();

app.get(`/`, (req, res) => {
  res.render(`index.ejs`);
});

app.listen(3000)