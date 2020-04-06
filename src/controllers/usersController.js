const express = require('express');
const userService = require('../services/usersService');

module.exports = {
    authenticate,
    getAll
};

function authenticate(req, res, next) {
    userService.authenticate(req.body)
        .then(userReturned => userReturned ? res.json(userReturned) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}