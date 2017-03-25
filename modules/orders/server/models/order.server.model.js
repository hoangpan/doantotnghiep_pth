'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Order Schema
 */
var OrderSchema = new Schema({
  customer_id: {
    type: String,
    default: '',
    trim: true
  },
  product_id: {
    type: String,
    default: '',
    trim: true
  },
  qty: {
    type: String,
    default: '',
    required: 'Please fill Order qty',
    trim: true
  },
  price: {
    type: String,
    default: '',
    required: 'Please fill Order price',
    trim: true
  },
  status: {
    type: String,
    default: '',
    required: 'Please fill Order stt',
    trim: true
  },
  customer: {
    type: Schema.ObjectId,
    ref: 'Customer'
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

mongoose.model('Order', OrderSchema);
