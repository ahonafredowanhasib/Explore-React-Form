import React from 'react';
import useInputField from '../Hooks/UseInputField';

const HooksForm = () => {

    const [name, nameOnchange] = useInputField('')
    const [email, emailOnchange] = useInputField('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Submit', name, email)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input defaultValue={name} type="name" onChange={nameOnchange} />

                <br />

                <input defaultValue={email} onChange={emailOnchange} type="email" name="email" />

                <br />
                
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default HooksForm;