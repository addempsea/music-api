import Joi from 'joi';

const validateData = async(data, schema) => {
  try {
    const options = {
      language: {
        key: '{{key}} ',
      },
    };
    const result = await Joi.validate(data, schema, options);
    return result;
  } catch (error) {
    return error;
  }
};

export default validateData;
