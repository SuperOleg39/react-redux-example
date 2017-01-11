import React from 'react';
import validator from 'validator';

import Field from '../../UI/field';

const isRequired = (value) => !validator.isEmpty(''+value);

const Form = (props) => (
    <form>
        <Field
            model="user.name"
            label="Имя"
            validators={{
                isRequired
            }}
            messages={{
                isRequired: 'Name is required'
            }}
        />
        <Field
            model="user.lastName"
            label="Фамилия"
            validators={{
                isRequired
            }}
            messages={{
                isRequired: 'Last name is required'
            }}
        />
        <Field
            model="user.middleName"
            label="Отчество"
        />
    </form>
);

export default Form;