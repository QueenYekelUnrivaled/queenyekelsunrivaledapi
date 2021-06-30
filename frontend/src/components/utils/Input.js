import React from 'react';

const InputText = ({ name, label, className, ...rest }) => {
    return (
        <div className={`flex input ${className}`}>
            {label && <label htmlFor={name}>{label}:</label>}
            <input type='text' id={name} name={name} {...rest} />
        </div>
    );
};

const InputNumber = ({ name, label, className, ...rest }) => {
    return (
        <div className={`flex input ${className}`}>
            {label && <label htmlFor={name}>{label}:</label>}
            <input type='number' id={name} name={name} {...rest} />
        </div>
    );
};

const InputDate = ({ name, label, className, ...rest }) => {
    return (
        <div className={`flex input ${className}`}>
            {label && <label htmlFor={name}>{label}:</label>}
            <input type='date' id={name} name={name} {...rest} />
        </div>
    );
};

const InputRadio = ({ name, label, options, className, ...rest }) => {
    return (
        <div className={`flex input ${className}`}>
            {label && <label htmlFor={name}>{label}:</label>}
            <div className='radio-wrapper flex justify-space-evenly align-center mg-l-5'>
                {options.map((option, i) => {
                    return (
                        <label className='flex align-center radio' key={i}>
                            <input type='radio' name={name} value={option} {...rest} />
                            <span className='flex align-center justify-center'>{option}</span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

const InputTextArea = ({ name, label, options, className, ...rest }) => {
    return (
        <div className={`flex input ${className}`}>
            {label && <label htmlFor={name}>{label}:</label>}
            <textarea name={name} id={name} {...rest}></textarea>
        </div>
    );
};

const Input = ({ type, ...rest }) => {
    switch (type) {
        case 'text':
            return <InputText {...rest} />;

        case 'number':
            return <InputNumber {...rest} />;

        case 'date':
            return <InputDate {...rest} />;

        case 'radio':
            return <InputRadio {...rest} />;

        case 'textarea':
            return <InputTextArea {...rest}></InputTextArea>;

        default:
            break;
    }
};

export default Input;
