const mongojs = require('mongojs');
const db = mongojs('fullapp', ['termins']);

const reportController = (req, res) => {
  let id = req.params.id;

  db.termins.update(
    { _id: mongojs.ObjectID(id) },
    {
      $set: {
        active: false,
      },
    },
    (err, docs) => {
      // pcheck err
      res.redirect('/advisor');
    },
  );
};

module.exports = reportController;
