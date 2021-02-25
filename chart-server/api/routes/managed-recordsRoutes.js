"use strict";
module.exports = function (app) {
  var recordList = require("../controllers/managed-recordsController");

  // Record Routes
  app
    .route("/records")
    .get(recordList.list_all_records)
    .post(recordList.create_a_record);

  app
    .route("/records/:recordId")
    .get(recordList.read_a_record)
    .put(recordList.update_a_record)
    .delete(recordList.delete_a_record);
};
