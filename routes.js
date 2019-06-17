const router = require("express").Router();
const config = require("config");
const customerApi = require("./api/customer");
const vehicleApi = require("./api/vehicle");

router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );
  // intercept OPTIONS method
  if ("OPTIONS" == req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});


/* -------Normal routes here------- */
/*------------main api route-------------*/
router.get("/", function(req, res) {
  res.json({
    status: true,
    message: "Welcome to Connected Vehicles API!"
  });
});

router.route("/customer").post(customerApi.post);
router.route("/customers").delete(customerApi.removeAll);
router.route("/vehicles").get(vehicleApi.search);
router.route("/vehicle/connect").put(vehicleApi.connect);
/* 
   route middleware to verify a token
   routes after this middleware needs to provide token
*/

module.exports = router;
