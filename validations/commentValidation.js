const Joi = require("joi");
 
const validation = Joi.object({
  comment: Joi.string().required(),
  blogId: Joi.string().required(),
});
 
function commentValidation(req, res, next) {
  const { error } = validation.validate(req.body);
  if (error) {
    res.status(406).json({ msg: "Data not valid", details: error.details });
  } else {
    next();
  }
}
 
module.exports = { commentValidation };