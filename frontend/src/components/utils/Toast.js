import React, { useEffect } from 'react';
import colors from './colors';
import Icons from './Icons';

const Toast = ({ message, iconName, iconSize, className, type, toast_key, state, setState, setIsSubmitting }) => {
    let color;
    if (iconName === 'IconSuccess') color = colors.notify_success;
    else if (iconName === 'IconError') color = colors.notify_error;
    else if (iconName === 'IconWarning') color = colors.notify_warning;
    else color = colors.notify_gray;

    const handleCloseState = () => {
        setState({ ...state, [toast_key]: undefined });
        if (setIsSubmitting) setIsSubmitting(false);
    };

    useEffect(() => {
        //
    }, [state]);

    return (
        <div className={`notifications-container notify-is-right slideIn ${className} ${type}`}>
            <div className='notify'>
                <div className='__icon'>
                    <Icons name={iconName} size={iconSize} color={color} />
                </div>
                <div className='__close'>
                    <Icons name='IconClose' size={15} color='currentColor' onClick={handleCloseState} />
                </div>
                <div className='__text'>{message}</div>
            </div>
        </div>
    );
};

export default Toast;
