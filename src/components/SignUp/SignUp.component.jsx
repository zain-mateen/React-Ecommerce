import React, { useState } from 'react';
import { createUserWithEmailAndPasswordAuth, createUserDocumentFromAuth } from '../../utils/Firebase/Firebase.utils';
import './SignUp.styles.scss';
import ThemeInput from '../ThemeInput/ThemeInput.component';
import Button from '../Button/Button.component';

const SignUp = () => {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await createUserWithEmailAndPasswordAuth(email, password);
            await createUserDocumentFromAuth(user, { displayName });

            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            console.error('Error signing up with email and password', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        switch (name) {
            case 'displayName':
                setDisplayName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'confirmPassword':
                setConfirmPassword(value);
                break;
            default:
                break;
        }
    };

    return (
        <div className='sign_up'>
            <form onSubmit={handleSubmit} className='sign_up_form'>
                <div className="input_main">
                    <ThemeInput 
                        inputClass='coming_soon_email'
                        inputType='text'
                        inputName='displayName'
                        inputPlaceholder='Display Name'
                        value={displayName} 
                        onChange={handleChange} 
                        required 
                    />
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
                    <ThemeInput 
                        inputClass='coming_soon_email'
                        inputType='password'
                        inputName='confirmPassword'
                        inputPlaceholder='Confirm Password'
                        value={confirmPassword} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <p className="desc heading-xs">
                    Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.
                </p>
                <div className="action_otr">
                    <Button buttonType='dark' type='submit'>Sign Up</Button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;
