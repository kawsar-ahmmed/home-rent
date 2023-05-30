// import { getAuth } from 'firebase/auth';
import React from 'react';
import auth from '../../../Firebase/useFirebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import gLogo from '../../../Assets/Google__G__Logo.svg.webp'



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }
    if (user) {
        navigate('/home');
    }
    return (
        <div>
            {/* {errorElement} */}
            <div className="Socail-button">
                <Button onClick={() => signInWithGoogle()} className='Socail-button-google'>
                    <img width={25} src={gLogo} alt="" />
                    Login With Google
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;