const Program = require('../models/Program');

// Fetchs a list of Programs
module.exports.getPrograms = (req, res) => {
  Program.find()
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      res.send(JSON.stringify({ err }));
    });
};

// Fetchs the unique Program corresponding to given id
module.exports.getProgramById = (req, res) => {
  const id = req.params.id;
  Program.findOne(id)
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      res.send(JSON.stringify({ err }));
    });
};
