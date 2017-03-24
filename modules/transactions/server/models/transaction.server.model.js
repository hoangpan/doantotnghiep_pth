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
  user_id: {
    type: String,
    default: '',
    trim: true
  },
  user_name: {
    type: String,
    default: '',
    required: 'Please fill Transaction name',
    trim: true
  },
  user_email: {
    type: String,
    default: '',
    required: 'Please fill Transaction email',
    trim: true
  },
  user_phone: {
    type: String,
    default: '',
    required: 'Please fill Transaction phone',
    trim: true
  },
  sumQty: {
    type: String,
    default: '',
    required: 'Please fill Transaction qty',
    trim: true
  },
  totalAmount: {
    type: String,
    default: '',
    required: 'Please fill Transaction Total',
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
