import React, { useState } from 'react';
import { signInWithEmailAndPasswordAuth } from '../../utils/Firebase/Firebase.utils';
import './SignIn.styles.scss';
import ThemeInput from '../ThemeInput/ThemeInput.component';
import Button from '../Button/Button.component';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            await signInWithEmailAndPasswordAuth(email, password);
            setEmail('');
            setPassword('');
        } catch (error) {
            console.error('Error signing in with email and password', error);
        }
    };

    const handleChange = (event) => {
        const { value, name } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };

    return (
        <div className='sign_in'>
            <form onSubmit={handleSubmit} className='sign_in_form'>
                <div className="input_main">
                    <ThemeInput 
                        inputClass='coming_soon_email'
                        inputType='email'
                        inputName='email'
                        inputPlaceholder='Enter Your Email'
                        value={email} 
                        onChange={handleChange} 
                        required 
                    />
                    <ThemeInput 
                        inputClass='coming_soon_email'
                        inputType='password'
                        inputName='password'
                        inputPlaceholder='Enter Your Password'
                        value={password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div className="form_check">
                    <input className='checkbox' type="checkbox" />
                    <label className='form_check_label  heading-xs'>Remember me</label>
                </div>
                <div className="action_otr">
                    <Button buttonType='dark' type='submit'>Sign In</Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
