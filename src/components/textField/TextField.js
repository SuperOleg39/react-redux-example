import React, { PropTypes } from 'react';
import { Errors } from 'react-redux-form';

const TextField = (props) => {
    const { model, label, messages, value, onChange, onBlur, onFocus } = props;

    return (
        <div>
            <label>{label}</label>
            <input
                type="text"
                name={model} value={value}
                onFocus={onFocus} onChange={onChange} onBlur={onBlur}
            />
            <Errors
                model={model}
                messages={messages}
                show={{touched: true}}
                wrapper={(props) => <div className="errors">{props.children}</div>}
                component={(props) => <div className="error">{props.children}</div>}
            />
        </div>
    )
};

TextField.propTypes = {
    model: React.PropTypes.string.isRequired,
    label: React.PropTypes.string,
    messages: React.PropTypes.object,
    value: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func
};

export default TextField;