import React, { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await axios.post(`http://localhost:8000/api/signup`,
                {
                    username, password
                })
            toast.success('Registration Successfull')
            setUserName('')
            setPassword('')
        }
        catch (err) {
            toast.error(err.rersponse.data.error)
        }
    }
    return (
        <>
            <ToastContainer position='top-center' theme='colored' />
            <div className='container mt-5'>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <div className="mb-3 row">
                            <label htmlFor="staticEmail" class="col-sm-2 col-form-label">Username</label>
                            <div className="col-sm-10">
                                <input type="text" class="form-control" id="staticEmail" value={username} onchnage={(e) => setUserName(e.target.value)} />
                            </div>
                        </div>
                        <div className="mb-3 row">
                            <label htmlFor="inputPassword" class="col-sm-2 col-form-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" class="form-control" id="inputPassword" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                        </div>
                        <button className='btn btn-primary' onClick={handleSubmit}>Signup</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup