import { useEffect, useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Box from '../Common/Box';
import FormInput from './FormInput';
import FormButton from './FormButton';
import FormCheckbox from './FormCheckbox';
import Header from '../Header/Header';
/* import { getCountries, getCountryCallingCode } from 'react-phone-number-input'; */

const AuthForm = () => {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState(0);
  const [phoneNumber, setPhoneNumber] = useState();
  var local_email = "";
  var local_check = "";
  var local_phone = "";

  const [formValues, setFormValues] = useState({
    email: local_email,
    phone: '',
    password: '',
    isChecked: local_check
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const onChangeCheckbox = (e) => {
    const { name, checked } = e.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const setBodyMinWidth = (minWidth) => {
    document.body.setAttribute('style', `min-width: ${minWidth};`);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, isChecked } = formValues;

    if (isChecked && email !== "" && email !== null) {
      localStorage.local_email = email;
      localStorage.checkbox = isChecked;
    } else if (selectedType === 0) {
      localStorage.local_email = "";
      localStorage.checkbox = "";
    }
    if (isChecked && phoneNumber !== "" && phoneNumber !== null) {
      localStorage.local_phone = phoneNumber;
      localStorage.checkbox = isChecked;
    } else if (selectedType === 1) {
      localStorage.local_phone = "";
      localStorage.checkbox = "";
    }
    formValues.phone = phoneNumber
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, formValues)
      .then(res => {
        if (res.data.response === true) {
          // swal({
          //   title: "Success!",
          //   text: res.data.message,
          //   icon: "success",
          // });
          localStorage.setItem('token', res.data.data.token);
          router.push('/home');
        } else {
          swal({
            title: "Error!",
            text: res.data.message,
            icon: "error",
          });
        }
      })
      .catch(err => {
        alert(err)
      });
    // router.push('/home');
  };

  useEffect(() => {
    setBodyMinWidth('auto');
    local_email = localStorage.getItem('local_email');
    local_check = localStorage.getItem('checkbox');
    local_phone = localStorage.getItem('local_phone');
  }, []);

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div className='mobileResponsive'>
        {/* <Header /> */}
        <div className='flex flex-center full-height flex-column'>
          <h1 className='form-title center login-title'>LOGIN</h1>
          <div className='login no-select'>
            <Box>
              <div className='box-vertical-padding box-horizontal-padding'>
                <div>
                  <div className='form-logo center'>
                    {/* <img src='/images/logo_tupe.png' alt='Crypto Exchange' draggable='false' /> */}
                  </div>
                  {/* <p className='form-desc center'>
                </p> */}
                  <form className='form' onSubmit={handleSubmit} noValidate>
                    <div className='form-elements pt-4'>
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
                              type='text'
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
                            <PhoneInput
                              countryCallingCodeEditable='true'
                              defaultCountry='AU'
                              placeholder='Enter phone number'
                              value={phoneNumber}
                              onChange={setPhoneNumber}
                            />
                          </div>
                        </div>
                      )}
                      <div className='form-line box-horizontal-padding'>
                        <div className='full-width'>
                          <label htmlFor='password'>Your password *</label>
                          <FormInput
                            type='password'
                            name='password'
                            value={formValues.password}
                            placeholder='Enter Your password'
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className='form-line box-horizontal-padding'>
                        <div className='form-check'>
                          <FormCheckbox
                            name="isChecked"
                            checked={formValues.isChecked}
                            text='Remember the username'
                            onChange={onChangeCheckbox}
                          />
                        </div>
                      </div>
                      <div className='form-line box-horizontal-padding'>
                        <div className='full-width right'>
                          <Link href='/members/forgot-password'>I forgot my password</Link>
                        </div>
                      </div>
                      <div className='form-line box-horizontal-padding'>
                        <div className='buttons'>
                          <FormButton type='submit' text='Login' onClick={handleSubmit} />
                        </div>
                      </div>
                      <div className='form-line box-horizontal-padding pt-2'>
                        <div className='center'>
                          <p>
                            Do you have an account? <Link href='/members/signup'>Register</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthForm;
