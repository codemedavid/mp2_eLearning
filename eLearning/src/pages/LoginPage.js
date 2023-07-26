import React, { useState } from 'react';
import { MDBContainer, MDBTabs, MDBTabsItem, MDBTabsLink, MDBTabsContent, MDBTabsPane, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import axios from 'axios';
import Header from '../components/mainComponents/header/Header';
import { useNavigate } from 'react-router-dom';
function LoginPage() {
  const navigate = useNavigate()
  const [justifyActive, setJustifyActive] = useState('tab1');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };

    fetch('/eLearning/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        // Assuming the server returns a token upon successful login
        const token = result.token;
        const userType = result.userType;
        const userId = result.userId;
        // Save the token in local storage for future authentication
        

        // Redirect to the appropriate page based on user type
        console.log(token);
        if(token != null){
          if (userType === 'instructor') {
            // Redirect to the instructor dashboard
            localStorage.setItem('token', token);
        localStorage.setItem('userType', userType);
        localStorage.setItem('userId', userId)
            navigate('/admin')
          } else {
            // Redirect to the default user dashboard
            localStorage.setItem('token', token);
        localStorage.setItem('userType', userType);
        localStorage.setItem('userId', userId)
            navigate('/')
            
          }
        }
      })
      .catch(err => console.error(err));
  };




  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerUserType, setRegisterUserType] = useState('student');

  const handleRegister = async (e) => {
    e.preventDefault();

    const data = {
      email: registerEmail,
      password: registerPassword,
      userType: registerUserType,
    };

    try {
      const response = await axios.post('/eLearning/signup', data);
      // Assuming the server returns a token upon successful registration
      const token = response.data.token;
      const userType = response.data.userType;
      const userId = response.data.userId;

      // Save the token and user type in local storage for future authentication
      localStorage.setItem('token', token);
      localStorage.setItem('userType', userType);
      localStorage.setItem('userId', userId)
      navigate('/')
      // Redirect to the appropriate page based on user type
      if(token != null){
        if (userType === 'instructor') {
          // Redirect to the instructor dashboard
          navigate('/admin')
        } else {
          // Redirect to the default user dashboard
          navigate('/')
        }
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
    <Header />
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            Login
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            Register
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          <div className="text-center mb-3">
            <p>Sign in with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <form onSubmit={handleLogin}>
            <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

            <div className="d-flex justify-content-between mx-4 mb-4">
              <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
              <a href="!#">Forgot password?</a>
            </div>

            <MDBBtn className="mb-4 w-100" type="submit">
              Sign in
            </MDBBtn>
            <p className="text-center">Not a member? <a onClick={() => handleJustifyClick('tab2')} >Register</a></p>
          </form>
        </MDBTabsPane>

        {/* The rest of the Register pane JSX remains unchanged */}
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        {/* Existing code remains unchanged */}
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={justifyActive === 'tab1'}>
          {/* Existing code remains unchanged */}
        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>
          <div className="text-center mb-3">
            <p>Create an account:</p>
          </div>

          <form onSubmit={handleRegister}>
            <MDBInput wrapperClass='mb-4' label='Email address' id='form3' type='email' value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)} />
            <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' value={registerPassword} onChange={(e) => setRegisterPassword(e.target.value)} />

            <select className='form-select mb-4' aria-label='Default select example' value={registerUserType} onChange={(e) => setRegisterUserType(e.target.value)}>
              <option value='student'>Student</option>
              <option value='instructor'>Instructor</option>
            </select>

            <MDBBtn className="mb-4 w-100" type="submit">
              Register
            </MDBBtn>
          </form>
        </MDBTabsPane>
      </MDBTabsContent>
    </MDBContainer>
      </MDBTabsContent>
    </MDBContainer>
    </>
  );
}

export default LoginPage;
