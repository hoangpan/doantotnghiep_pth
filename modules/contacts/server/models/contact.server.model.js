'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Contact Schema
 */
var ContactSchema = new Schema({
 product_id: {
    type: String,
    default: '',
    trim: true
  },
  name: {
    type: String,
    default: '',
    required: 'Please fill Contact name',
    trim: true
  },
  email: {
    type: String,
    default: '',
    required: 'Please fill Contact email',
    trim: true
  },
  comment: {
    type: String,
    default: '',
    required: 'Please fill Contact comment',
    trim: true
  },
  product: {
    type: Schema.ObjectId,
    ref: 'Product'
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  created: {
    type: Date,
    default: Date.now
  }
});

mongoose.model('Contact', ContactSchema);
