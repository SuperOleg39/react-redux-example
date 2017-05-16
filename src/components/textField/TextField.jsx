import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Errors } from 'react-redux-form';
import MuiTextField from 'material-ui/TextField';

import './textField.css';

const TextField = (props) => {
    const { model, label, messages, value, showErrors, onChange, onBlur, onFocus } = props;

    return (
        <div>
            <MuiTextField
                id={model}
                floatingLabelText={label}
                value={value}
                onFocus={onFocus}
                onChange={onChange}
                onBlur={onBlur}
                errorText={
                    (showErrors) ? (
                        <Errors
                            model={model}
                            messages={messages}
                            show={{ touched: true }}
                            wrapper={(props) => <div className="errors">{props.children}</div>}
                            component={(props) => <div className="error">{props.children}</div>}
                        />
                    ) : (
                        ''
                    )
                }
            />
        </div>
    );
};

TextField.propTypes = {
    model: PropTypes.string.isRequired,
    showErrors: PropTypes.bool.isRequired,
    label: PropTypes.string,
    messages: PropTypes.object,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    children: PropTypes.node,
};

export default TextField;