'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Customer name',
    trim: true
  },
  email: {
    type: String,
    default: '',
    required: 'Please fill Customer name',
    trim: true
  },
  phone: {
    type: String,
    default: '',
    required: 'Please fill Customer name',
    trim: true
  },
  address: {
    type: String,
    default: '',
    required: 'Please fill Customer name',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Customer', CustomerSchema);
