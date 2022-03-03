import { useFormik } from 'formik';
function FormComp() {
    const {
        handleSubmit,
        values,
        handleChange
    } = useFormik({
        initialValues: {
            firstName: 'sefa',
            lastName: 'e.',
            email: 's@g.com',
            gender: 'male',
            country: ''
        },
        onSubmit: values => {
            console.log(values);
        },
    });
    return (
        <>
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="firstName">First Name : </label>
                    <input
                        name="firstName"
                        placeholder="Jane"
                        value={values.firstName}
                        onChange={handleChange} />
                    <br />
                    <br />
                    <label htmlFor="lastName">Last Name : </label>
                    <input
                        name="lastName"
                        placeholder="Doe"
                        value={values.lastName}
                        onChange={handleChange} />
                    <br />
                    <br />
                    <label htmlFor="email">Email : </label>
                    <input
                        name="email"
                        placeholder="jane@acme.com"
                        value={values.email}
                        type="email"
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <span>Male</span>
                    <input
                        name="gender"
                        value="male"
                        type="radio"
                        onChange={handleChange}
                        checked={values.gender === 'male'} />
                    <span>Female</span>
                    <input name="gender"
                        value="female"
                        onChange={handleChange}
                        type="radio"
                        checked={values.gender === 'female'} />
                    <br />
                    <br />
                    <div>
                        Movie
                        <input
                            type='checkbox'
                            name='hobies'
                            value='Movie'
                            onChange={handleChange} />
                    </div>
                    <div>
                        Travel
                        <input
                            type='checkbox'
                            name='hobies'
                            value='Travel'
                            onChange={handleChange} />
                    </div>
                    <div>
                        Book
                        <input
                            type='checkbox'
                            name='hobies'
                            value='Book'
                            onChange={handleChange} />
                    </div>
                    <br />
                    <br />

                    <select name='country' onChange={handleChange} value={values.country}>
                        <option value='tr'>Tr</option>
                        <option value='en'>En</option>
                        <option value='usa'>Usa</option>
                    </select>
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
export default FormComp