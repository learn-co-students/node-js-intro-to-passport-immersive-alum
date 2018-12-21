"use strict";

const bookshelf = require('../db/bookshelf');
const bcrypt = require('bcrypt')

const Comment = require('./comment');
const Post = require('./post');

const User = bookshelf.Model.extend({
  tableName: 'users',

  initialize: function() {this.on('creating', this.encryptPassword)},

  hasTimestamps: true,

  posts: function() { return this.hasMany(Posts, 'author')},

  comments: function() {return this.hasMany(Comments)},

  encryptPassword: (model, attrs, options) => {
    return new Promise((resolve, reject) => {
      bcrypt.hash(model.attributes.password, 10, (err, hash) => {
        if (err) return reject(err)
        model.set('password', hash)
        resolve(hash)
      })
    })
  },

  validatePassword: function(suppliedPassword) {
    let self = this
    return new Promise((resolve, reject) => {
      const hash = self.attributes.password
      bcrypt.compare(suppliedPassword, hash, (error, result) => {
        if (error) return reject(error)
        return resolve(result)
      })
    })
  }
});

module.exports = bookshelf.model('User', User);
