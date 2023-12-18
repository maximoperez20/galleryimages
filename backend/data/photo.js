const db = require("./../utils/db");

function getAllPhotos(mode) {
  let sqlQuery;
  switch (mode) {
    case "all":
      sqlQuery = "SELECT * from images;";
      break;
    case "visible":
      sqlQuery = "SELECT * from images WHERE visible = 1;";
      break;
    case "novisible":
      sqlQuery = "SELECT * from images WHERE visible = 0;";
      break;
    default:
      sqlQuery = "SELECT * from images WHERE visible = 1;";
      break;
  }
  return new Promise((resolve, reject) => {
    db.query(sqlQuery, function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function getAllVisiblePhotos() {
  return new Promise((resolve, reject) => {
    db.query("SELECT * from images WHERE visible = 1;", function (err, result) {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

function uploadPhotoToDb(data) {
  db.query(
    `INSERT INTO images (path, description) VALUES ("${data.path}", "${data.description}");`,
    function (err, result) {
      if (err) {
        console.log("error");
      } else {
        console.log("exito guardando registro");
      }
    }
  );
}

function setPhotoVisible(id) {
  const queryString = `UPDATE images SET visible = 1 WHERE id=${id};`;
  db.query(queryString, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      console.log("exito actualizando el campo a visible=1");
    }
  });
}

function setPhotoRejected(id) {
  const queryString = `UPDATE images SET visible = 2 WHERE id=${id};`;
  db.query(queryString, (err, result) => {
    if (err) {
      console.log("error");
    } else {
      console.log("exito actualizando el campo a rejected, visible = 2");
    }
  });
}

exports.getAllPhotos = getAllPhotos;
exports.getAllVisiblePhotos = getAllVisiblePhotos;
exports.uploadPhotoToDb = uploadPhotoToDb;

exports.setPhotoVisible = setPhotoVisible;
exports.setPhotoRejected = setPhotoRejected;
