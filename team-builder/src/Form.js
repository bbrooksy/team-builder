import React from 'react'

 function Form (props) {

    const { values, update, submit } = props

    const onChange = e => {

        const name = e.target.name;

        const value = e.target.value;

        update(name, value);
    }

    const onSubmit = e => {

        console.log('Submitted')
        e.preventDefault();

        submit();

    }

    return (
        <form className='container' onSubmit={onSubmit}>
        <div className='form-inputs'>
            <label>Name
                <input
                    name='username'
                    type='text'
                    placeholder='Enter your name'
                    maxLength='35'
                    value={values.username}
                    onChange={onChange}/>
            </label>
            <label>Email
                <input
                type='email'
                name='email'
                onChange={onChange}
                value={values.email}
                placeholder='Enter your email address'>
                </input>
                </label>
            
            <label>Role
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>---Select from the following---</option>
                    <option value='Manager'>Manager</option>
                    <option value='Human Resources '>Human Resources</option>
                    <option value='Accounting'>Accounting</option>
                </select>
            </label>
            
            <div className='submit'>
                <button>Submit Application</button>
            </div>
        </div>
    </form>
    )


}

export default Form;