import validator from 'validator';

export const isRequired = (value) => !validator.isEmpty(''+value);

export const isEmail = (value) => validator.isEmail(''+value);