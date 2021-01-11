async function save(req, res) {
  let found = false;
  try{
    found = await myPromise(req.params.id);
  }catch(err) {
    //
  }
  return res.json({found});
}

function myPromise(id) {
  return new Promise((resolve, reject) => {
    if(id == 1){
      resolve(true);
    }else {
      reject(false);
    }
  });
}

module.exports = save;
