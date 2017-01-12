import React from 'react';

import { isRequired } from '../../core/services/validatorService';
import ControlTextField from '../controlTextField/ControlTextField';

const Form = () => (
    <form>
        <ControlTextField
            model="user.name"
            label="Имя"
            validators={{
                isRequired
            }}
            messages={{
                isRequired: 'Name is required'
            }}
        />
        <ControlTextField
            model="user.lastName"
            label="Фамилия"
            validators={{
                isRequired
            }}
            messages={{
                isRequired: 'Last name is required'
            }}
        />
        <ControlTextField
            model="user.middleName"
            label="Отчество"
        />
    </form>
);

export default Form;