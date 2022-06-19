import { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import MainLayout from "../../../layouts/MainLayout";
import Box from "../../../components/Common/Box";
import FormInput from "../../../components/Forms/FormInput";
import FormButton from "../../../components/Forms/FormButton";
import { useRouter } from "next/router";

const ConfirmationScreen = () => {
    const router = useRouter();
    const [formValues, setFormValues] = useState({
       code: "", 
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
        
        var localCode = localStorage.getItem('forgotPasswordCode');
        if (localCode === formValues.code) {
        localStorage.removeItem("forgotPasswordCode");
          swal({
            title: "Success!",
            text: "Code verify successfully.",
            icon: "success",
          });
          router("/members/reset-password");
        } else {
          swal({
            title: "Error!",
            text: "Please enter a valid verification code!!!",
            icon: "error",
          });
        }
       };
    
      return (
        <MainLayout>
          <div className='flex flex-center full-height'>
            <div className='login no-select'>
              <Box>
                <div className='box-vertical-padding box-horizontal-padding'>
                  <div>
                    <div className='form-logo center'>
                      <img src='/images/logo_tupe.png' alt='Crypto Exchange' draggable='false' />
                    </div>
                    <h1 className='form-title center'>Confirm your account</h1>
                    <p className='form-desc center'>
                     We sent a 6-digit code to your email address or mobile number. Enter the code to reset your password.
                    </p>
                    <form className='form' onSubmit={handleSubmit} noValidate>
                      <div className='form-elements'>
                        <div className='form-line'>
                          <div className='full-width'>
                            <FormInput
                              type='text'
                              name='code'
                              value={formValues.code}
                              placeholder='Enter Code'
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className='form-line'>
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
    
    export default ConfirmationScreen;