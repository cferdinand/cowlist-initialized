const { getCows, postCows, updateCows, deleteCows } = require("../models/models.js");

module.exports = {
  getAllCows: (req, res) => {
    getCows()
      .then(data => {
        res.send(data).status(200);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  addOneCow: (req, res) => {
    let cow = [req.body.cow_name, req.body.cow_description];
    postCows(cow)
      .then(data => {
        res.send(data).status(201);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  updateOneCow: (req, res) => {
    let cow = [req.body.cow_name, req.body.cow_description, Number(req.body.id)];
    updateCows(cow)
      .then(data => {
        res.send(data).status(201);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  },
  deleteOneCow: (req, res) => {
    let cowId = req.body.id;
    deleteCows(cowId)
      .then(data => {
        res.send(data).status(201);
      })
      .catch(err => {
        console.error(err);
        res.sendStatus(500);
      });
  }
};
