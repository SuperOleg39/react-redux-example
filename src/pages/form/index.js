import React from 'react';

import { isRequired } from '../../core/services/rulesService';
import Field from '../../UI/field';

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