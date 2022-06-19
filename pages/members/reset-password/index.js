/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import MainLayout from "../../../layouts/MainLayout";
import Box from "../../../components/Common/Box";
import FormInput from "../../../components/Forms/FormInput";
import FormButton from "../../../components/Forms/FormButton";
import { useRouter } from "next/router";


const ResetPasswordScreen = () => {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    password: '',
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
    if (localStorage.getItem('phone')) {
      formValues.phone = localStorage.getItem('phone');
    } else if (localStorage.getItem('email')) {
      formValues.email = localStorage.getItem('email');
    } else {
      console.log("something went wrong!!!");
    }

    axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/resPassWithPhone`, formValues)
      .then(res => {
        if (res.data.response === true) {
          localStorage.removeItem("phone");
          localStorage.removeItem("email");
          swal({
            title: "Success!",
            text: "Password change successfully.",
            icon: "success",
          });
          router.push("/home");
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
                <h1 className='form-title center'>Create a new password</h1>
                <p className='form-desc center'>You'll use this password to access your account.</p>
                <form className='form' onSubmit={handleSubmit} noValidate>
                  <div className='form-elements'>
                    <div className='form-line'>
                      <div className='full-width'>
                        <FormInput
                          type='text'
                          name='password'
                          value={formValues.password}
                          placeholder='Type a new password'
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

export default ResetPasswordScreen;
