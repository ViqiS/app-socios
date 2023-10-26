'use client'
import React, {useState} from 'react';
import axios from 'axios';
import styles from './login.module.css';
import {RiAccountCircleFill} from 'react-icons/ri';
import {BiUser} from 'react-icons/bi';
import {MdPassword} from 'react-icons/md';
import Link from 'next/link';
import {useRouter} from 'next/navigation';

const links = [
    {
        label: "You don't have an account?",
        route: '/register'
    }
]

export default function Login() {
    const router = useRouter();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const [fakeUser, setFakeUser] = useState({
        user: 'pruebausuario',
        password: '12345678'
        });

    const handleUserChange = (e) => {
        setUser(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const simulateLogin = async (user, password) => {
        if (user === fakeUser.user && password === fakeUser.password) {
            return {
                data: {
                    message: 'Login successful',
                    user,
                    password
                }
            };
        } else {
            throw new Error('Invalid email or password');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user || !password) {
            setError({message: 'Please enter both user name and password.'});
            return;
        }
        try {
            const response = await simulateLogin(user, password);
            console.log('Login response:', response.data);
            setLoggedIn(true);
            router.push('/home');
        } catch (error) {
            console.error('Error during login:', error);
            setError({message: error.message});
        }
    };

    return (
        <section className={styles.sectionLogin}>
            <form className={styles.FormLogin} onSubmit={handleSubmit}>

                <div className={styles.shape}>
                    <div className={styles.containerLogin}>

                        <RiAccountCircleFill className={styles.iconAccount}/>
                        <h1 className={styles.title}>Sign in</h1>

                        <div className={styles.containerInput}>
                            <label className={styles.divUser}>
                                <BiUser className={styles.icon}/>
                                <input
                                    type="text"
                                    className={styles.userName}
                                    placeholder='User name'
                                    value={user}
                                    onChange={handleUserChange}/>
                            </label>
                            <label className={styles.divPassword}>
                                <MdPassword className={styles.icon}/>
                                <input
                                    type="password"
                                    className={styles.password}
                                    placeholder='********'
                                    value={password}
                                    onChange={handlePasswordChange}/>
                            </label>
                        </div>

                        <button type='submit' className={styles.buttonLogin}>Log in</button>
                        {error && <p className={styles.errorMessage}>{error.message}</p>}
                        <div className={styles.inputQuestions}>
                            <div className={styles.divRemember}>
                                <input type="checkbox" className={styles.rememberCheck}/>
                                <p className={styles.remember}>Remember</p>
                            </div>
                            {
                                links.map(
                                    ({label, route}, index) => <span
                                        className={error
                                            ? styles.haveAttention
                                            : styles.have}
                                        key={index}
                                            >
                                        <Link href={route}>
                                            {label}
                                        </Link>
                                    </span>
                                )
                            }
                        </div>
                        <div className={styles.divForgot}>
                            <span
                                className={error
                                    ? styles.forgotAttention
                                    : styles.forgot}>
                                Forgot your password?
                            </span>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
/*     const handleSubmit = async (e) => {
        e.preventDefault();
        try {

            const response = await axios.post('/api/v1/auth/login', fakeUser);
            console.log('Login response:', response.data);
            setLoggedIn(true);
        } catch (error) {
            console.error('Error during login:', error);
            setError({message: 'Invalid email or password.'});
        }
    };
 */