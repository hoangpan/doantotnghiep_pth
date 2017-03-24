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
  product_id: {
    type: String,
    default: '',
    trim: true
  },
  user_id: {
    type: String,
    default: '',
    trim: true
  },
  transaction_id: {
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
  unitPrice: {
    type: String,
    default: '',
    required: 'Please fill Order unitPrice',
    trim: true
  },
  status: {
    type: String,
    default: '',
    required: 'Please fill Order stt',
    trim: true
  },
  product: {
    type: Schema.ObjectId,
    ref: 'Product'
  },
  transaction: {
    type: Schema.ObjectId,
    ref: 'Transaction'
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
