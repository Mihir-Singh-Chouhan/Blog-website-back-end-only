const Joi = require("joi");
 
const validation = Joi.object({
  slug: Joi.string().required(),
  title: Joi.string().required(),
  body: Joi.string().required(),
  categoryIDs: Joi.string().required(),
  tagIDs: Joi.string().required(),
  coverImage: Joi.string().optional(),
});
 
function blogValidation(req, res, next) {
  const { error } = validation.validate(req.body);
  if (error) {
    res.status(406).json({ msg: "Data not valid", details: error.details });
  } else {
    next();
  }
}
 
module.exports = { blogValidation };