import react, { Component } from 'react';
import './SignIn.css'
import {Link} from 'react-router-dom'
class SignIn extends Component {
    render() {
        return (
            <div>
                {/* Background image */}
                <div id="sign" className="bg-image shadow-2-strong">
                    <div className="mask d-flex align-items-center h-100" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-md-8">
                                    <form className="bg-white  rounded-5 shadow-5-strong p-5">
                                        {/* Email input */}
                                        <div className="form-outline mb-4">
                                            <input type="email" id="form1Example1" className="form-control" />
                                            <label className="form-label" htmlFor="form1Example1">Email</label>
                                        </div>
                                        {/* Password input */}
                                        <div className="form-outline mb-4">
                                            <input type="password" id="form1Example2" className="form-control" />
                                            <label className="form-label" htmlFor="form1Example2">Mật khẩu</label>
                                        </div>
                                        {/* 2 column grid layout for inline styling */}
                                        <div className="row mb-4">
                                            <div className="col d-flex justify-content-center">
                                                {/* Checkbox */}
                                                
                                            </div>
                                            <div className="col text-center">
                                                {/* Simple link */}
                                                <Link to="/SignUp">Đăng ký tài khoản</Link>
                                            </div>
                                        </div>
                                        {/* Submit button */}
                                        <Link to="/">
                                        <button type="submit" className="btn btn-primary btn-block">Đăng nhập</button>
                                        </Link>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Background image */}
                {/*Main Navigation*/}
            </div>
        )
    }
}
export default SignIn;