import * as React from 'react';
interface IitemProps {
    label: string;
    children?: any;
    valid: boolean;
    error: string;
}
export default (props: IitemProps) => {
    const { label, children, valid, error } = props;
    return (
        <div>
            <label>{label}</label>
            {children}
            {!valid && <span>{error}</span>}
        </div>
    );
};