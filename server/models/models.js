const db = require("../../database/index.js");
const Promise = require("bluebird");
const dbQueryAsync = Promise.promisify(db.query.bind(db));
module.exports = {
  getCows: () => {
    console.log("it got it");
    return dbQueryAsync(`Select * from cow`)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  postCows: values => {
    return dbQueryAsync(`INSERT INTO cow (cow_name,cow_description) VALUES (?,?)`, values)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  updateCows: values => {
    return dbQueryAsync(`UPDATE cow SET cow_name = ?, cow_description= ? WHERE id=?`, values)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  deleteCows: id => {
    return dbQueryAsync(`DELETE FROM cow WHERE id = ?`, id)
      .then(data => {
        return data;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
