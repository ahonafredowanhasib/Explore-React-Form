import React, { useState } from 'react';

const UncontrolledCustomHook = () => {

    const [name, setName] = useState('')

    const [email, setEmail] = useState('')

    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    const handlepasswordOnchange = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)

        {
            password.length < 6 ? setError('Password must be 6 characters or longer') : setError('')
        }
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name, email, password)

    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    return (

        <div>

            <form onSubmit={handleSubmit}>

                <input type="name" placeholder='Name' onChange={handleNameChange} defaultValue={name} />

                <br />

                <input type="email" onChange={handleEmailChange} defaultValue={email} name='email' placeholder='Email' required />

                <br />

                <input type="password" name="password" placeholder='Password' onChange={handlepasswordOnchange} defaultValue={password} required />

                <br />

                <input type="submit" value="Submit" />

            </form>

            <p style={{ color: 'red' }}>{error}</p>

        </div>

    );
};

export default UncontrolledCustomHook;