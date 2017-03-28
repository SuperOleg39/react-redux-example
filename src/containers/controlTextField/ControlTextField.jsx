import React, { PropTypes } from 'react';
import { Control } from 'react-redux-form';

import TextField from 'components/textField/TextField';

const ControlTextField = (props) => {
    const { validators, messages, model, label } = props;

    return (
        <Control
            component={TextField}
            model={model}
            validators={validators}
            validateOn="blur"
            mapProps={{
                onChange: (props) => props.onChange,
                onBlur: (props) => props.onBlur,
                onFocus: (props) => props.onFocus,
                value: (props) => props.modelValue,
                showErrors: (props) => (!props.fieldValue.valid && props.fieldValue.touched),
            }}
            controlProps={{
                model,
                label,
                messages,
            }}
        />
    );
};

ControlTextField.propTypes = {
    model: React.PropTypes.string.isRequired,
    validators: React.PropTypes.object,
    messages: React.PropTypes.object,
    label: React.PropTypes.string,
    fieldValue: React.PropTypes.object,
};

export default ControlTextField;