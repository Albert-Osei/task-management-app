const Joi = require('joi');

const {
    baseValidatorForBody,
} = require('./index');

const validateNewTask = (req, res, next) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
    });
    baseValidatorForBody(schema, req, res, next);
};


module.exports = {
    validateNewTask
}