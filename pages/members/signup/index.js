import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import swal from 'sweetalert';
import Head from 'next/head';
import { useRouter } from 'next/router';

import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import MainLayout from '../../../layouts/MainLayout';
import Box from '../../../components/Common/Box';
import FormInput from '../../../components/Forms/FormInput';
import FormButton from '../../../components/Forms/FormButton';
import FormCheckbox from '../../../components/Forms/FormCheckbox';
import Header from '../../../components/Header/Header';

const SignupScreen = () => {
  const router = useRouter();
  const [phoneNumber, setPhoneNumber] = useState();
  const [isSubmit, setIsSubmit] = useState(false);
  const [verify,setVerify] = useState(false);
  var [errors, setErrors] = useState({});
  const initialFormValues = {
    email: '',
    phone: '',
    vcode: '',
    scode: '',
    password: '',
    confirmPassword: '',
    name: '',
    lastname: '',
    citizenship: false,
    identityType: '',
    identityNumber: '',
    day: '',
    month: '',
    year: '',
    country: '',
    operator: '',
    agreeToPolicies1: false,
    agreeToPolicies2: false,
    agreeToPolicies3: false,
  };
  const [formValues, setFormValues] = useState(initialFormValues)

  const [selectedType, setSelectedType] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const setBodyMinWidth = (minWidth) => {
    document.body.setAttribute('style', `min-width: ${minWidth};`);
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;

    setFormValues({
      ...formValues,
      [name]: checked,
    });
  };

  const sendVerifyCode = async (e) => {
    e.preventDefault();

    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sendCode`, formValues)
      .then(res => {
        if (res.data.response === true) {
          swal({
            title: "Success!",
            text: res.data.message,
            icon: "success",
          });
        } else {
          swal({
            title: "Error!",
            text: res.data.message,
            icon: "error",
          });
        }
      }).catch(err => {
        console.log("error", err);
      })
  }
  
  const sendSMSVerifyCode = async (e) => {
    e.preventDefault();
    formValues.phone = phoneNumber
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sendSmsCode`, formValues)
      .then(res => {
        if (res.data.response === true) {
          localStorage.setItem('smsCode', res.data.code);
          swal({
            title: "Success!",
            text: res.data.message,
            icon: "success",
          });
        } else {
          swal({
            title: "Error!",
            text: res.data.message,
            icon: "error",
          });
        }
      }).catch(err => {
        console.log("error", err);
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line prefer-const
    let err = validate(formValues);
    
    if (Object.keys(err).length > 0) {
      setErrors(err);
      return false;
    }
    formValues.registrationType = selectedType;
    
    // Make server side api call for registration
    formValues.phone = phoneNumber
    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register`, formValues)
      .then(res => {
        if (res.data.response === true) {
          swal({
            title: "Success!",
            text: res.data.message,
            icon: "success",
          });
          navigate("/");
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
    setIsSubmit(true);
  };

  const validate = (value) => {
    const errors = {};
    var validEmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!value.name) {
      errors.name = "Referrer is required.";
    }
    if (selectedType === 0) {
      if (!value.email) {
        errors.email = "Email address is required.";
      } else if (!validEmailPattern.test(value.email)) {
        errors.email = "Please enter valid email address!";
      }
      if (!value.vcode) {
      errors.vcode = "Email verification code is required.";
      }
    } else {
      if (!value.phone) {
        errors.phone = "Phone number is required.";
      } else if (value.phone.length < 8) {
        errors.phone = "Phone number must be greatter than 8 digit.";
      }
      if (!value.scode) {
        errors.scode = "SMS verification code is required.";
      }
    }

    if (!value.password) {
      errors.password = "Password is required.";
    }
    if (!value.confirmPassword) {
      errors.confirmPassword = "Confirm password is required.";
    } else if (value.password !== value.confirmPassword) {
      errors.confirmPassword = "Password and confirm password does not match!";
    }
    if (!value.citizenship) {
      errors.citizenship = "Terms and conditions are required.";
    }
    return errors;
  };

  useEffect(() => {
    setBodyMinWidth('auto');
  }, []);

  return (
    <MainLayout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <div className='mobileResponsive'>
        {/* <Header /> */}
        <div className='flex flex-center flex-column'>
          <h1 className='form-title center login-title'>REGISTER</h1>
          <div className='login no-select'>
            <Box>
              <div className='box-vertical-padding box-horizontal-padding'>
                <div>
                  <div className='form-logo center'>
                    <img src='/images/logo_tupe.png' alt='Crypto Exchange' draggable='false' />
                  </div>

                  <p className='form-desc center'>
                    {/* Please enter the information below. your activation information to your phone
                  number we will send */}
                  </p>
                  <form className='form' onSubmit={handleSubmit} noValidate>
                    <div className='form-elements'>
                      <div className='flex flex-center actionBar'>
                        <div
                          role='button'
                          className={
                            selectedType === 0
                              ? 'flex flex-center full-width pointer selected'
                              : 'flex flex-center full-width pointer'
                          }
                          tabIndex={0}
                          onClick={() => {
                            setSelectedType(0);
                            setErrors({})
                          }}
                          onKeyDown={() => {
                            setSelectedType(0)
                            setErrors({})
                          }}
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
                          onClick={() => {
                            setSelectedType(1);
                            setErrors({})
                          }}
                          onKeyDown={() => {
                            setSelectedType(1)
                            setErrors({})
                          }}
                        >
                          <img src='/images/phone.png' alt='phone' draggable='false' />
                          <h1 className='form-title'>Phone</h1>
                        </div>
                      </div>
                      {selectedType === 0 ? (
                        <>
                          <div className="both-input-btn">
                            <div className='form-line box-horizontal-padding'>
                              <div className='full-width'>
                                <label htmlFor='email'>E-Mail Address *</label>
                                <FormInput
                                  type='email'
                                  name='email'
                                  value={formValues.email}
                                  placeholder='Enter Email Address'
                                  autoComplete ="off"
                                  onChange={handleChange}
                                />
                                <p className='error'>{errors.email}</p>
                              </div>
                            </div>
                            <div className='buttons'>
                              <FormButton type='submit' text="Send Verification Code" onClick={sendVerifyCode} />
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                        <div className='both-input-btn'>
                          <div className='form-line box-horizontal-padding'>
                            <div className='full-width'>
                              <label htmlFor='phone'>Phone Number *</label>
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
                              <p className='error'>{errors.phone}</p>
                            </div>
                          </div>
                          <div className='buttons'>
                                <FormButton type='submit' text='Send Verification Code' onClick={sendSMSVerifyCode} />
                          </div>
                        </div>
                        </>
                      )}
                      {selectedType === 0 ? (
                      <div className='form-line box-horizontal-padding'>
                        <div className='full-width'>
                          <label htmlFor='email'>E-Mail Verification Code *</label>
                          <FormInput
                            type='text'
                            name='vcode'
                            value={formValues.vcode}
                            placeholder='Enter Email Verification Code'
                            onChange={handleChange}
                          />
                          <p className='error'>{errors.vcode}</p>
                        </div>
                      </div>
                    ) : (
                      <>
                      <div className='form-line box-horizontal-padding'>
                        <div className='full-width'>
                          <label htmlFor='email'>SMS Code *</label>
                          <FormInput
                            type='text'
                            name='scode'
                            value={formValues.scode}
                            placeholder='Enter your SMS Code'
                            onChange={handleChange}
                          />
                          <p className='error'>{errors.scode}</p>
                        </div>
                      </div>
                      </>
                    )}
                      <div className='form-line box-horizontal-padding'>
                        <div className='full-width'>
                          <label htmlFor='password'>Your Password *</label>
                          <FormInput
                            type='password'
                            name='password'
                            value={formValues.password}
                            placeholder='Enter Your Password'
                            onChange={handleChange}
                          />
                          <p className='error'>{errors.password}</p>
                        </div>
                      </div>
                      <div className='form-line box-horizontal-padding'>
                        <div className='full-width'>
                          <label htmlFor='confirmPassword'>Confirm your password *</label>
                          <FormInput
                            type='password'
                            name='confirmPassword'
                            value={formValues.confirmPassword}
                            placeholder='Confirm your password'
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className='form-line box-horizontal-padding'>
                        <div className='full-width'>
                          <label htmlFor='name'>Referrer</label>
                          <FormInput
                            type='text'
                            name='name'
                            value={formValues.name}
                            placeholder='Referrer'
                            onChange={handleChange}
                          />
                          <p className='error'>{errors.name}</p>
                        </div>
                      </div>
                      <div className='form-line box-horizontal-padding'>
                        <div className='full-width'>
                          <FormCheckbox
                            name='citizenship'
                            checked={formValues.citizenship}
                            text='I agree the Terms and policy'
                            onChange={handleCheckboxChange}
                          />
                          <p className='error'>{errors.citizenship}</p>
                        </div>
                      </div>
                      <div className='form-line box-horizontal-padding'>
                        <div className='buttons'>
                          <FormButton type='submit' text='Register' onClick={handleSubmit} />
                        </div>
                      </div>
                      <div className='form-line box-horizontal-padding mt-2'>
                        <div className='center'>
                          <p>
                            Do you have an account? <Link href='/'>Sign in</Link>.
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
    </MainLayout>
  );
};

export default SignupScreen;
