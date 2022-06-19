import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from "sweetalert";
import PhoneInput from "react-phone-number-input"
import Head from 'next/head';
import Link from 'next/link';


import MainLayout from '../../../layouts/MainLayout';
import Box from '../../../components/Common/Box';
import FormInput from '../../../components/Forms/FormInput';
import FormButton from '../../../components/Forms/FormButton';
import { useRouter } from 'next/router';

const ForgotScreen = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState();
  const [formValues, setFormValues] = useState({
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formValues.phone = phoneNumber
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/forPassWithPhone`, formValues)
      .then(res => {
        if (res.data.response === true) {
          localStorage.setItem('forgotPasswordCode', res.data.code);
          if (formValues.phone) {
            localStorage.setItem('phone', formValues.phone);
          } else if (formValues.email) {
            localStorage.setItem('email', formValues.email);
          } else {
            console.log("something went wrong!!!");
          }

          swal({
            title: "Success!",
            text: res.data.message,
            icon: "success",
          });
          router.push("/members/confirmation-code");
        } else {
          swal({
            title: "Error!",
            text: res.data.message,
            icon: "error",
          });
        }
      })
      .catch(err => {
        console.log("error", err);
      });
  };


  const setBodyMinWidth = (minWidth) => {
    document.body.setAttribute('style', `min-width: ${minWidth};`);
  };

  useEffect(() => {
    setBodyMinWidth('auto');
  }, []);

  return (
    <MainLayout>
      <div className='flex flex-center full-height flex-column'>

        <div className='login no-select'>
          <Box>
            <div className='box-vertical-padding box-horizontal-padding'>
              <div>
                <div className='form-logo center'>
                  <img src='/images/logo_tupe.png' alt='Crypto Exchange' draggable='false' />
                </div>
                <h1 className='form-title center'>PASSWORD RESET</h1>
                <p className='form-desc center'>
                  Please enter your registered email address.
                  <br />
                  We will send the password reset information.
                </p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    {/* <div className='flex flex-center actionBar'>
                      <div
                        role='button'
                        className={
                          selectedType === 0
                            ? 'flex flex-center full-width pointer selected'
                            : 'flex flex-center full-width pointer'
                        }
                        tabIndex={0}
                        onClick={() => setSelectedType(0)}
                        onKeyDown={() => setSelectedType(0)}
                      >
                        <img src='/images/email.png' alt='email' draggable='false' />
                        <h1 className='form-title'>Email</h1>
                      </div>
                      <div className='button_line' />
                      <div
                        role='button'
                        className={
                          selectedType === 1
                            ? 'flex flex-center full-width pointer selected'
                            : 'flex flex-center full-width pointer'
                        }
                        tabIndex={0}
                        onClick={() => setSelectedType(1)}
                        onKeyDown={() => setSelectedType(1)}
                      >
                        <img src='/images/phone.png' alt='phone' draggable='false' />
                        <h1 className='form-title'>Phone</h1>
                      </div>
                    </div> */}
                    {selectedType === 0 ? (
                      <div className='form-line box-horizontal-padding'>
                        <div className='full-width'>
                          <label htmlFor='phone'>Your email address *</label>
                          <FormInput
                            type='email'
                            name='email'
                            value={formValues.email}
                            placeholder='Your email address'
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    ) : (
                      <div className='form-line box-horizontal-padding'>
                        <div className='full-width'>
                          <label htmlFor='phone'>Your phone number *</label>
                          {/* <FormInput
                            type='text'
                            name='phone'
                            value={formValues.phone}
                            placeholder='Enter Phone Number'
                            onChange={handleChange}
                          /> */}

                          <PhoneInput
                            countryCallingCodeEditable='true'
                            placeholder='Enter phone number'
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                          />
                        </div>
                      </div>
                    )}
                    <div className='form-line box-horizontal-padding'>
                      <div className='buttons'>
                        <FormButton type='submit' text='Submit' onClick={handleSubmit} />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </Box>
        </div>
      </div>
    </MainLayout>
  );
};

export default ForgotScreen;
