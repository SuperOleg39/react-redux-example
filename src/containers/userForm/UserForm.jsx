import React from 'react';

import { isRequired, isEmail } from '../../core/services/validatorService';
import ControlTextField from '../controlTextField/ControlTextField';

const Form = () => (
    <form>
        <ControlTextField
            model="user.name"
            label="Имя"
            validators={{
                isRequired,
                isEmail
            }}
            messages={{
                isRequired: 'Name is required',
                isEmail: 'Name is not valid',
            }}
        />
        <ControlTextField
            model="user.lastName"
            label="Фамилия"
            validators={{
                isRequired,
            }}
            messages={{
                isRequired: 'Last name is required',
            }}
        />
        <ControlTextField
            model="user.middleName"
            label="Отчество"
        />
    </form>
);

export default Form;