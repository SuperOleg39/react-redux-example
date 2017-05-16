import * as React from 'react';
import './Field.css';

function getArr(a: string) {
    console.log(a);
}

getArr('123');

export interface IFieldProps {
    name: string,
}

const Field = (props: IFieldProps) => {
    const { name } = props;

    return (
        <div>
            <input name={name} />
        </div>
    );
};

export default Field;