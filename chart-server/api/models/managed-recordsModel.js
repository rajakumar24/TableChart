"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var RecordSchema = new Schema({
  index: {
    type: Number,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  Created_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Records", RecordSchema);
