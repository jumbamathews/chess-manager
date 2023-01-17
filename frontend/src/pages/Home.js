import React, {useState} from 'react'
import Modal from "../components/modals/Modal";
import Login from "../components/forms/Login";
import Registration from "../components/forms/Registration";

/**
 * Welcome page containing Login and Registration modal forms.
 */
const Home = () => {
    const [loginModalStatus, setLoginModalStatus] = useState(false)
    const [registerModalStatus, setRegisterModalStatus] = useState(false)
    const loginForm = <Login />
    const registerForm = <Registration />

    return (
            <main className='home'>
                <img src="/img/home-chess.jpg" alt="home-chess" />
                <h1>Chess Mania</h1>
                <div className='login-register'>
                    <button
                        className={'login-btn'}
                        onClick={() => {
                            setLoginModalStatus(true)
                        }}
                    >
                        Login
                    </button>
                    < Modal
                        modalStatus={loginModalStatus}
                        setModalStatus={setLoginModalStatus}
                        title={"Login"}
                        body={loginForm}
                    />
                    <button
                        className={'register-btn'}
                        onClick={() => {
                            setRegisterModalStatus(true)
                        }}
                    >
                        Register
                    </button>
                    < Modal
                        modalStatus={registerModalStatus}
                        setModalStatus={setRegisterModalStatus}
                        title={"Register"}
                        body={registerForm}
                    />
                </div>
            </main>
    )
}

export default Home;