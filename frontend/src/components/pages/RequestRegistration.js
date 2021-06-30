import React, { Fragment, useEffect, useState } from 'react';
import PublicContainer from '../container/PublicContainer';

import Input from '../utils/Input';
import Button from '../utils/Button';
import useForm from '../../hooks/useForm';
import validate from '../../hooks/FormValidation';
import { requestRegistration } from '../../api';
import Toast from '../utils/Toast';
import Spinner from '../utils/Spinner';

const RequestRegistration = () => {
    const [toastState, setToastState] = useState({});
    const [showSpinner, setShowSpinner] = useState(false);
    const [toastType, setToastType] = useState({ type: '', icon: '' });

    const handleOnSubmit = async () => {
        if (!isSubmitting) return;
        setIsSubmitting(false);

        // request registration
        const response = await requestRegistration(values);
        const { data } = response;

        if (!response.ok) return setErrors(data.data);

        return setToastState(data.data);
    };

    const { handleChange, handleSubmit, values, errors, setErrors, isSubmitting, setIsSubmitting } = useForm(handleOnSubmit, validate, setShowSpinner, ['name_of_child', 'age', 'date_of_birth', 'gender', 'level', 'name_of_parent', 'gaurdian', 'address', 'contact', 'is_sms', 'signature']);

    useEffect(() => {
        if (Object.keys(errors).length > 0) {
            setIsSubmitting(false);
            setShowSpinner(false);

            setToastState(errors);
            setToastType({ type: 'error', icon: 'IconError' });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [errors, showSpinner]);

    useEffect(() => {
        setShowSpinner(false);
        setIsSubmitting(false);

        setToastType({ type: 'success', icon: 'IconSuccess' });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [toastState]);

    return (
        <Fragment>
            <Spinner visible={showSpinner} className='full-width' size={56} />
            <PublicContainer footer footer_image>
                <div className='toast-container'>{toastState && Object.keys(toastState).map((key, i) => <Fragment key={i}>{toastState[key] && <Toast message={toastState[key]} iconName={toastType.icon} className={`nth-${i}`} type={toastType.type} toast_key={key} state={toastState} setState={setToastState} />}</Fragment>)}</div>
                <div className='enroll-now-page mg-b-40'>
                    <div className='page-banner-area'>
                        <div className='container'>
                            <div className='page-banner-content'>
                                <h2>Enroll Now</h2>
                            </div>
                        </div>
                    </div>
                    <section className='enrollment-form mg-t-50 pd-b-50'>
                        <div className='container grid'>
                            <div className='image-section col-lg-2 col-md-2 col-sm-12 col-xs-12'></div>
                            <div className='form-wrapper col-lg-8 col-md-8 col-sm-12 col-xs-12'>
                                <h2 className='mg-b-20'>REGISTRATION FORM</h2>
                                <form action='' onSubmit={handleSubmit} className='grid enroll-form'>
                                    <div className='grid inner-grid col-lg-12 col-md-12 col-sm-12 col-xs-12' id='child-info'>
                                        <h2 className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>Child Information:</h2>
                                        <div className='col-lg-8 col-md-7 col-sm-7 col-xs-12'>
                                            <Input type='text' value={values?.name_of_child || ''} className={errors?.name_of_child && 'error'} onChange={handleChange} name='name_of_child' label='Name of Child' />
                                        </div>
                                        <div className='col-lg-4 col-md-5 col-sm-5 col-xs-12'>
                                            <Input type='number' value={values?.number_of_siblings || ''} className={errors?.number_of_siblings && 'error'} onChange={handleChange} name='number_of_siblings' label='Siblings Attending' />
                                        </div>
                                        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                                            <Input type='text' value={values?.age || ''} className={errors?.age && 'error'} onChange={handleChange} name='age' label='Age' />
                                        </div>
                                        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                                            <Input type='date' value={values?.date_of_birth || ''} className={errors?.date_of_birth && 'error'} onChange={handleChange} name='date_of_birth' label='dob' />
                                        </div>
                                        <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                                            <Input type='radio' onChange={handleChange} options={['male', 'female']} className={errors?.gender && 'error'} name='gender' label='Gender' />
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                            <Input type='radio' onChange={handleChange} options={['level_1', 'level_2', 'level_3']} name='level' label='Level' className={`justify-space-between ${errors?.level && 'error'}`} />
                                        </div>
                                    </div>
                                    <div className='grid inner-grid col-lg-12 col-md-12 col-sm-12 col-xs-12' id='name_of_parent-info'>
                                        <h2 className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>Parent Information:</h2>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                            <Input type='text' value={values?.name_of_parent || ''} className={errors?.name_of_parent && 'error'} onChange={handleChange} name='name_of_parent' label='Name of parent(s)' />
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                            <Input type='text' value={values?.name_of_guardian || ''} className={errors?.name_of_guardian && 'error'} onChange={handleChange} name='name_of_guardian' label='Name of Guardian(s)' />
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                            <Input type='text' value={values?.address || ''} className={errors?.address && 'error'} onChange={handleChange} name='address' label='Address' />
                                        </div>
                                        <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                                            <Input type='text' value={values?.contact || ''} className={errors?.contact && 'error'} onChange={handleChange} name='contact' label='Contact' />
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                            <Input type='radio' onChange={handleChange} options={['yes', 'no']} name='is_sms' label='Do you receive text messages on this contact?' className={`mg-b-5 ${errors?.is_sms && 'error'}`} />
                                            {/* <Input type='text' value={values?.alt_contact || ''} className={errors?.alt_contact && 'error'} onChange={handleChange} name='alt_contact' label='Indicate text message contact' /> */}
                                        </div>
                                    </div>
                                    <div className='grid inner-grid col-lg-12 col-md-12 col-sm-12 col-xs-12' id='medical-info'>
                                        <h2 className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>Child Medical Information:</h2>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                            <Input type='textarea' value={values?.child_medical_condition || ''} onChange={handleChange} name='child_medical_condition' label='Medical conditions(s)' className='extend-height' />
                                        </div>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                            <Input type='textarea' value={values?.allegies || ''} onChange={handleChange} name='allegies' label='Allegies' className='extend-height' />
                                        </div>
                                    </div>
                                    <div className='grid inner-grid col-lg-12 col-md-12 col-sm-12 col-xs-12' id='declaration'>
                                        <h2 className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>Declaration:</h2>
                                        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
                                            <div>
                                                I, &nbsp;
                                                <Input type='text' value={values?.signature || ''} className={errors?.signature && 'error'} onChange={handleChange} name='signature' label='Full Name' />
                                                &nbsp;hereby certify to the best of my knowledge that the above information is true and accurate. I understand that in the event that my information is found to be false or misleading, the applicant will be disqualified and fees forfeited at Queen Yekel's. Unrivaled Nursery and Kindergarten. All information provided will be treated with strict confidence. I understand that payment of fees confirms my registration and acknowledgement that I have
                                                read, understood and agree to all Terms and conditions of the said school.
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-lg-5 col-md-6 col-sm-6 col-xs-12'>
                                        <Button type='submit' className=''>
                                            <span>Submit Request</span>
                                        </Button>
                                    </div>
                                </form>
                            </div>
                            <div className='image-section col-lg-2 col-md-2 col-sm-12 col-xs-12'></div>
                        </div>
                    </section>
                </div>
            </PublicContainer>
        </Fragment>
    );
};

export default RequestRegistration;
