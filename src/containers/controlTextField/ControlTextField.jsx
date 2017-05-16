import React from 'react';
import PropTypes from 'prop-types';
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
    model: PropTypes.string.isRequired,
    validators: PropTypes.object,
    messages: PropTypes.object,
    label: PropTypes.string,
    fieldValue: PropTypes.object,
};

export default ControlTextField;