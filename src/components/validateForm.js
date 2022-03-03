import { useFormik } from 'formik';
import validationSchema from './validations'
function ValidateForm() {
    const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            email: '',
            password: '',
            passwordConfirm: '',
        },
        onSubmit: values => {
            console.log(validationSchema);
            console.log(values);
        },
        validationSchema: validationSchema
    });
    console.log(errors);
    return (
        <>
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label>Email : </label>
                    <input
                        name="email"
                        placeholder="jane@acme.com"
                        value={values.email}
                        type="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.email && errors.email && 
                    <div className='form-error'>
                        {errors.email}
                    </div>
                    }
                    <br />
                    <br />
                    <label>Password : </label>
                    <input
                        name="password"
                        placeholder="jane@acme.com"
                        value={values.password}
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.password && errors.password &&
                        <div className='form-error'>
                            {errors.password}
                        </div>
                    }
                    <br />
                    <br />
                    <label>Password Confirm: </label>
                    <input
                        name="passwordConfirm"
                        placeholder="jane@acme.com"
                        value={values.passwordConfirm}
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />
                    {touched.passwordConfirm && errors.passwordConfirm &&
                        <div className='form-error'>
                            {errors.passwordConfirm}
                        </div>
                    }
                    <br />
                    <br />


                    <button type="submit">Submit</button>

                    <br />
                    <br />
                    <br />
                    <code>
                        {JSON.stringify(values)}
                    </code>
                </form>
            </div>
        </>
    )
}
export default ValidateForm