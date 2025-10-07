import React from 'react';

const SimpleForm = () => {

    // get data ---> 
    // 1. add handle function in the form onSubmit 
    // 2. set a event parameter 
    // 3. then console.log(e.target.(inputfield).value)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <input type="text" name='name' placeholder='Enter Your Name' />

                <br />
                <input type="email" name='email' placeholder='Enter Your Email' />

                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;