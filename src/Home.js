import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const SignInButton = () => {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
    }
    return (
        <>
            <button onClick={signInWithGoogle}>Googleでログイン</button>
        </>
    )
}
const SignOutButton = () => {
    return (
        <>
            <button onClick={() => auth.signOut()}>サインアウト</button>
        </>
    )
}

const UserInfo = () => {
    return (
        <div className='userInfo'>
            <img src={auth.currentUser.photoURL} alt='' />
            <p>{auth.currentUser.displayName}</p>
        </div>
    )
}


const Home = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            {user ? (
                <>
                    <UserInfo />
                    <SignOutButton />
                </>
            ) : (
                <>
                    <SignInButton />
                </>
            )}
        </div>
    )
}

export default Home