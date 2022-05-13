const Joi = require("joi");

const createNoteValidation = (data) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string(),
    tags: Joi.array().items(Joi.string()),
  });

  return schema.validate(data);
};

module.exports = {
  createNoteValidation,
};
