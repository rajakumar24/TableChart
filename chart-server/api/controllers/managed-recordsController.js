"use strict";
const csvToJson = require("csvtojson");
var mongoose = require("mongoose"),
  Record = mongoose.model("Records");

const csv = require("csv-parser");
const fs = require("fs");
const results = [];

fs.createReadStream("./Data.csv")
  .pipe(csv())
  .on("data", (data) => results.push(data))
  .on("end", () => {
    console.log(results[0]);
  });

exports.list_all_records = function (req, res) {
  res.send(results);
};

exports.create_a_record = function (req, res) {
  var new_Record = new Record(req.body);
  new_Record.save(function (err, Record) {
    if (err) res.send(err);
    res.json(Record);
  });
};

exports.read_a_record = function (req, res) {
  Record.findById(req.params.recordId, function (err, Record) {
    if (err) res.send(err);
    res.json(Record);
  });
};

exports.update_a_record = function (req, res) {
  Record.findOneAndUpdate(
    { _id: req.params.recordId },
    req.body,
    { new: true },
    function (err, Record) {
      if (err) res.send(err);
      res.json(Record);
    }
  );
};

exports.delete_a_record = function (req, res) {
  Record.remove(
    {
      _id: req.params.recordId,
    },
    function (err, Record) {
      if (err) res.send(err);
      res.json({ message: "Record successfully deleted" });
    }
  );
};
