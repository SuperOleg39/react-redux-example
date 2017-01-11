import React from 'react';
import { Errors } from 'react-redux-form';

const FieldComponent = (props) => {
    const { model, label, messages, value, onChange, onBlur, onFocus } = props;

    return (
        <div>
            <label>{label}</label>
            <input
                type="text"
                value={value}
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

export default FieldComponent;