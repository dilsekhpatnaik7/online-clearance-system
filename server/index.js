require('dotenv').config({path: './config.env'});
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
app.use(cors({
    credentials: true,
    origin: 'https://online-clearance-system-backend.vercel.app/s'
}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
require('./db/dbconfig.js')
const User = require('./models/userSchema')

// Routes
// Login Route
app.post('/login', async (req, res) => {
    console.log(req.body)
    const {email, password} = req.body;
    try {
        const check = await User.findOne({email: email})
        if(check.email === email && check.password === password) {
            const token = email;
            res.json({status: 'OK', user: token})
        } else {
            res.send({status: 'error'});
        }
    } catch (error) {
        res.send({status: 'error'});
    }
})

// Home Route
app.post('/home', async (req, res) => {
    try {
        const check = await User.findOne({email: req.body.email})
        if(check) {
            res.send({status: "OK", name: check});
        }
    } catch (error) {
        console.log(error)
        res.send({status: 'error'});
    }
})

// Account Details
app.post('/accountdetails', async (req, res) => {
    try {
        const check = await User.findOne({email: req.body.email})
        if(check) {
            res.send({status: "OK", student: check});
        }
    } catch (error) {
        console.log(error)
        res.send({status: 'error'});
    }
})

// Academics and Hostel
app.post('/acadhostel', async (req, res) => {
    try {
        const check = await User.findOne({email: req.body.email})
        if(check) {
            res.send({status: "OK", student: check});
        }
    } catch (error) {
        console.log(error)
        res.send({status: 'error'});
    }
})

// Mess
app.post('/mess', async (req, res) => {
    try {
        const check = await User.findOne({email: req.body.email})
        if(check) {
            res.send({status: "OK", student: check});
        }
    } catch (error) {
        console.log(error)
        res.send({status: 'error'});
    }
})

// Library
app.post('/library', async (req, res) => {
    try {
        const check = await User.findOne({email: req.body.email})
        if(check) {
            res.send({status: "OK", student: check});
        }
    } catch (error) {
        console.log(error)
        res.send({status: 'error'});
    }
})

// Others
app.post('/others', async (req, res) => {
    try {
        const check = await User.findOne({email: req.body.email})
        if(check) {
            res.send({status: "OK", student: check});
        }
    } catch (error) {
        console.log(error)
        res.send({status: 'error'});
    }
})

// Get Clearance
app.post('/getclearance', async (req, res) => {
    try {
        const check = await User.findOne({email: req.body.email})
        if(check) {
            res.send({status: "OK", student: check});
        }
    } catch (error) {
        console.log(error)
        res.send({status: 'error'});
    }
})

const port = process.env.port || 5000;
app.listen(port, () => {
    console.log("Server is listening...")
})