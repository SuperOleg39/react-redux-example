import React, { Component, PropTypes } from 'react';
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
    model: React.PropTypes.string.isRequired,
    showErrors: React.PropTypes.bool.isRequired,
    label: React.PropTypes.string,
    messages: React.PropTypes.object,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,
    children: React.PropTypes.node,
};

export default TextField;