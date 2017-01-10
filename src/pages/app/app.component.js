import React, { Component, PropTypes } from 'react';
import Field from '../../UI/field';

let AppComponent = (props) => (
    <div>
        <Field model={props.name} onChange={props.onChangeName} />
        <br />
        <Field model={props.lastName} onChange={props.onChangeLastName} />
        <br />
        <Field model={props.middleName} onChange={props.onChangeMiddleName} />
        <br />
    </div>
);

export default AppComponent;