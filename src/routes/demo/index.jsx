import React from 'react';

import MuiTextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import DatePicker from 'material-ui/DatePicker';
import {
    Step,
    Stepper,
    StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Field from 'components/field/Field.tsx';

const Demo = () => (
    <form className="container">
        <div style={{ width: '100%', margin: '0 auto 25px', padding: '0 10%', borderBottom: '1px solid rgba(0, 0, 0, 0.1)' }}>
            <Stepper activeStep={0}>
                <Step>
                    <StepLabel>Заполнение анкеты</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Выбор продуктов</StepLabel>
                </Step>
                <Step>
                    <StepLabel>Завершение оформления</StepLabel>
                </Step>
            </Stepper>
        </div>

        <h1>
            Заполните кредитную анкету. Это не отнимет у Вас больше 15 минут.
            <Field name={false} />
        </h1>

        <section className="row">
            <h2 style={{ fontSize: '18px' }}>
                Личные данные
            </h2>
            <div className="column">
                <MuiTextField
                    id="surname"
                    floatingLabelText="Фамилия"
                />
            </div>
            <div className="column">
                <MuiTextField
                    id="name"
                    floatingLabelText="Имя"
                />
            </div>
            <div className="column">
                <MuiTextField
                    id="name"
                    floatingLabelText="Отчество"
                />
            </div>
            <div
                className="column"
                style={{ margin: '20px 0 10px' }}
            >
                <p style={{ margin: '0 10px 0 0', lineHeight: '28px' }}>
                    Пол:
                </p>
                <RadioButtonGroup
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                    name="sex"
                    defaultSelected="not_light"
                >
                    <RadioButton
                        style={{ display: 'inline-block', width: '120px' }}
                        value="0"
                        label="мужской"
                    />
                    <RadioButton
                        style={{ display: 'inline-block', width: '120px' }}
                        value="1"
                        label="женский"
                    />
                </RadioButtonGroup>
            </div>
            <div className="column">
                <DatePicker
                    floatingLabelText="Дата рождения"
                    hintText="Дата рождения"
                    container="inline" />
            </div>
            <div className="column">
                <MuiTextField
                    id="born"
                    floatingLabelText="Место рождения"
                />
            </div>
        </section>

        <section>
            <h2>
                Паспортные данные
            </h2>
            <p className="caption">
                Укажите паспортные данные в точности так, как это указано в вашем паспорте
            </p>
            <div className="text-field-group">
                <MuiTextField
                    style={{ width: '120px' }}
                    id="serial"
                    floatingLabelText="Серия"
                />
                <MuiTextField
                    style={{ width: '120px' }}
                    id="number"
                    floatingLabelText="Номер"
                />
            </div>
            <div>
                <MuiTextField
                    id="issuer"
                    floatingLabelText="Кем выдан"
                />
            </div>
            <div>
                <MuiTextField
                    id="born"
                    floatingLabelText="Место рождения"
                />
            </div>
        </section>

        <div className="footer">
            <FlatButton
                label="Отмена"
                style={{marginRight: 12}}
            />
            <RaisedButton
                label="Продолжить"
                primary={true}
            />
        </div>
    </form>
);

export default Demo;