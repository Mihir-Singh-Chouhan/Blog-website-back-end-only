const Joi = require("joi");
 
const validation = Joi.object({
  name: Joi.string().required(),
  blogIDs: Joi.string().required(),
});
 
function categoryValidation(req, res, next) {
  const { error } = validation.validate(req.body);
  if (error) {
    res.status(406).json({ msg: "Data not valid", details: error.details });
  } else {
    next();
  }
}
 
module.exports = { categoryValidation };