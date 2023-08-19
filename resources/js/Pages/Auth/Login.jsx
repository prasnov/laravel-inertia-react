import React from "react";
import { usePage, Head, router } from "@inertiajs/react";

const Login = () => {
    const { errors } = usePage().props;
    const { flash } = usePage().props;
    const [input, setInput] = React.useState({
        email: "",
        password: "",
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        router.post("/login", input);
    };

    return (
        <>
            <Head title="Login" />
            <div className="vh-100 d-flex justify-content-center align-items-center">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className="card bg-white">
                                <div className="card-body p-5">
                                    <form
                                        className="mb-3 mt-md-4"
                                        onSubmit={handleFormSubmit}
                                    >
                                        <h2 className="fw-bold text-center mb-2 text-uppercase ">
                                            Brand
                                        </h2>
                                        <p className=" mb-5 text-center">
                                            Please enter your email and
                                            password!
                                        </p>

                                        {flash.msg && (
                                            <p className="text-danger text-center">
                                                {flash.msg}
                                            </p>
                                        )}
                                        <div className="mb-3">
                                            <label
                                                htmlFor="email"
                                                className="form-label "
                                            >
                                                Email address
                                            </label>
                                            <input
                                                type="email"
                                                className={
                                                    errors.email
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                }
                                                id="email"
                                                name="email"
                                                placeholder="name@example.com"
                                                value={input.email}
                                                onChange={(e) =>
                                                    setInput({
                                                        ...input,
                                                        [e.target.name]:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback">
                                                    {errors.email}
                                                </div>
                                            )}
                                        </div>
                                        <div className="mb-3">
                                            <label
                                                htmlFor="password"
                                                className="form-label "
                                            >
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                className={
                                                    errors.password
                                                        ? "form-control is-invalid"
                                                        : "form-control"
                                                }
                                                id="password"
                                                name="password"
                                                placeholder="*******"
                                                value={input.password}
                                                onChange={(e) =>
                                                    setInput({
                                                        ...input,
                                                        [e.target.name]:
                                                            e.target.value,
                                                    })
                                                }
                                            />
                                            {errors.password && (
                                                <div className="invalid-feedback">
                                                    {errors.password}
                                                </div>
                                            )}
                                        </div>
                                        <p className="small">
                                            <a
                                                className="text-primary"
                                                href="forget-password.html"
                                            >
                                                Forgot password?
                                            </a>
                                        </p>
                                        <div className="d-grid">
                                            <button
                                                className="btn btn-outline-dark"
                                                type="submit"
                                            >
                                                Login
                                            </button>
                                        </div>
                                    </form>
                                    <div>
                                        <p className="mb-0  text-center">
                                            Don't have an account?{" "}
                                            <a
                                                href="signup.html"
                                                className="text-primary fw-bold"
                                            >
                                                Sign Up
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
