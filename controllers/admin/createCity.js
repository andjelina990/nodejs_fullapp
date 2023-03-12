const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users', 'city']);

const createCity = (req, res) => {
  let name = req.body.name;
  let zip = req.body.zip;

  db.city.insert({ name: name, zip: zip }, (err, docs) => {
    res.redirect('/admin');
  });
};

module.exports = createCity;
