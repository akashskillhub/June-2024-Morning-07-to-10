import React from 'react'

const Register = () => {
    return <>
        <div class="container">
            <div class="row">
                <div class="col-sm-6 offset-sm-3">
                    <div class="card">
                        <div class="card-header">Signup</div>
                        <div class="card-body">
                            <div>
                                <label for="name" class="form-label">First name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    placeholder="Enter your name"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="email" class="form-label">First Email</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="email"
                                    placeholder="Enter Your Email"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a username.</div>
                            </div>
                            <div class="mt-2">
                                <label for="password" class="form-label">Password</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="password"
                                    placeholder="Enter Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">Please choose a password.</div>
                            </div>
                            <div class="mt-2">
                                <label for="cpassword" class="form-label"
                                >Confirm Password</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="cpassword"
                                    placeholder="Confirm Your Password"
                                />
                                <div class="valid-feedback">Looks good!</div>
                                <div class="invalid-feedback">
                                    Please Recheck Your Password.
                                </div>
                            </div>
                            <button type="button" class="btn btn-primary w-100 mt-3">
                                Signup
                            </button>
                            <p class="text-center mt-3">
                                Already Have Account? <a href="#">Login</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Register