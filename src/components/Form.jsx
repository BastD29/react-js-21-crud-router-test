import { useNavigate } from "react-router-dom"


export default function Form({ handleChange, handleSubmit, inputData }) {

    const navigate = useNavigate();

    return (
        <>
            <header>
                <button
                    onClick={() => navigate("/")}
                >
                    Go back
                </button>
                <hr />
            </header>

            <div className="form-row row">
                <div className='col'>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={inputData.fullName}
                        name="fullName"
                        className='form-control'
                        placeholder='Full name'
                    />
                </div>
                <div className='col'>
                    <input
                        type="email"
                        onChange={handleChange}
                        value={inputData.emailAddress}
                        name="emailAddress"
                        className='form-control'
                        placeholder='Email address'
                    />
                </div>
                <div className='col'>
                    <input
                        type="text"
                        onChange={handleChange}
                        value={inputData.salary}
                        name="salary"
                        className='form-control'
                        placeholder='Salary'
                    />
                </div>
                <div className='col'>
                    <input
                        type="submit"
                        onClick={handleSubmit}
                        className="btn btn-primary"
                    />
                </div>
            </div>
        </>
        
    )
}
