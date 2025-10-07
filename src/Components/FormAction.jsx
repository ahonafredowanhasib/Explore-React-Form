import React from 'react';

const FormAction = () => {

    // get data ---> 
    // 1. add handle function in the action of form
    // 2. formData set like event parameter
    // 3. then console.log(formData.get('inputField'))

    const handleFormActions = (formData) => {
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }
    return (
        <div>
            <form action={handleFormActions}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name='email' placeholder='Email' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;