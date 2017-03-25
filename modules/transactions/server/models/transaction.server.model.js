'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Transaction Schema
 */
var TransactionSchema = new Schema({
  customer_id: {
    type: String,
    default: '',
    trim: true
  },
  order_id: {
    type: String,
    default: '',
    trim: true
  },
  total: {
    type: String,
    default: '',
    required: 'Please fill Transaction total',
    trim: true
  },
  payment: {
    type: String,
    default: '',
    required: 'Please fill Transaction payment',
    trim: true
  },
  feedback: {
    type: String,
    default: '',
    required: 'Please fill Transaction feedback',
    trim: true
  },
  status: {
    type: String,
    default: '',
    required: 'Please fill Transaction stt',
    trim: true
  },
  order: {
    type: Schema.ObjectId,
    ref: 'Order'
  },
  customer: {
    type: Schema.ObjectId,
    ref: 'Customer'
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

mongoose.model('Transaction', TransactionSchema);
