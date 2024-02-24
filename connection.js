const mysql = require('mysql');
const express = require("express");


const con =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"college"
});

module.exports = con;