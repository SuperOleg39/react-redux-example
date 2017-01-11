import React from 'react';
import { Control } from 'react-redux-form';

import FieldComponent from './field.component';

const Field = (props) => {
    const { validators, messages, model, label } = props;
    
    return (
        <Control
            component={FieldComponent}
            model={model}
            validators={validators}
            validateOn="blur"
            mapProps={{
                onChange: (props) => props.onChange,
                onBlur: (props) => props.onBlur,
                onFocus: (props) => props.onFocus,
                value: (props) => props.modelValue,
            }}
            controlProps={{
                model,
                label,
                messages,
            }}
        />
    );
};

export default Field;