import { useState, useEffect } from 'react';

const useForm = (callback, validate, setShowSpinner, validationList) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) callback();
    }, [errors, isSubmitting, callback]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setShowSpinner(true);
        setErrors(validate(values, validationList));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setIsSubmitting(false);
        setValues((value) => ({ ...value, [event.target.name]: event.target.value }));
    };

    return {
        handleChange,
        handleSubmit,
        setValues,
        setErrors,
        setIsSubmitting,
        isSubmitting,
        values,
        errors,
    };
};

export default useForm;
