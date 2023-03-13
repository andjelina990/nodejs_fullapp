const mongojs = require('mongojs');
const db = mongojs('fullapp', ['city']);

const deleteCityController = (req, res) => {
  let cityId = req.params.cityId;

  db.city.remove({ _id: mongojs.ObjectID(cityId) }, (err, docs) => {
    res.send('Ok');
  });
};

module.exports = deleteCityController;
