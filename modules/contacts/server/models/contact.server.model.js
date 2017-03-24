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
  user_name: {
    type: String,
    default: '',
    required: 'Please fill Contact username',
    trim: true
  },
  user_email: {
    type: String,
    default: '',
    required: 'Please fill Contact useremail',
    trim: true
  },
  user_phone: {
    type: String,
    default: '',
    required: 'Please fill Contact userphone',
    trim: true
  },
  comments: {
    type: String,
    default: '',
    required: 'Please fill Contact Comment',
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
