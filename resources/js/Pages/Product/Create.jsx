import React from "react";
import { Head, Link } from "@inertiajs/react";
import { router, usePage } from "@inertiajs/react";

const Create = () => {
    const { errors } = usePage().props;
    const [input, setInput] = React.useState({
        name: "",
        code: "",
        price: "",
        stock: "",
        photo: null,
        description: "",
        status: false,
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        router.post("/product", input);
    };

    return (
        <>
            <Head title="Product Create" />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-primary mt-3">Create a product</h3>
                        <small className="text-primary">
                            By creating a product you might see in product list
                        </small>
                        <hr />
                    </div>
                    <div className="col-12 mb-3">
                        <Link
                            className="btn btn-primary btn-sm my-3"
                            href="/product"
                        >
                            - Back to product list
                        </Link>

                        <form
                            onSubmit={handleFormSubmit}
                            encType="multipart/form-data"
                        >
                            <div className="mb-3">
                                <label htmlFor="code" className="form-label">
                                    Product Code
                                </label>
                                <input
                                    type="text"
                                    className={
                                        errors.code
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="code"
                                    name="code"
                                    value={input.code}
                                    onChange={(e) => {
                                        setInput({
                                            ...input,
                                            [e.target.name]: e.target.value,
                                        });
                                    }}
                                />
                                {errors.code && (
                                    <div className="invalid-feedback">
                                        {errors.code}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    className={
                                        errors.name
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="name"
                                    name="name"
                                    value={input.name}
                                    onChange={(e) => {
                                        setInput({
                                            ...input,
                                            [e.target.name]: e.target.value,
                                        });
                                    }}
                                />
                                {errors.name && (
                                    <div className="invalid-feedback">
                                        {errors.name}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">
                                    Product Price
                                </label>
                                <input
                                    type="number"
                                    className={
                                        errors.price
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="price"
                                    name="price"
                                    value={input.price}
                                    onChange={(e) => {
                                        setInput({
                                            ...input,
                                            [e.target.name]: e.target.value,
                                        });
                                    }}
                                />
                                {errors.price && (
                                    <div className="invalid-feedback">
                                        {errors.price}
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="photo" className="form-label">
                                    Product Photo
                                </label>
                                <input
                                    className={
                                        errors.photo
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    type="file"
                                    id="photo"
                                    name="photo"
                                    onChange={(e) => {
                                        setInput({
                                            ...input,
                                            [e.target.name]: e.target.files[0],
                                        });
                                    }}
                                />

                                {errors.photo && (
                                    <div className="invalid-feedback">
                                        {errors.photo}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="description"
                                    className="form-label"
                                >
                                    Product Description
                                </label>
                                <textarea
                                    className={
                                        errors.description
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="description"
                                    rows={3}
                                    name="description"
                                    value={input.description}
                                    onChange={(e) => {
                                        setInput({
                                            ...input,
                                            [e.target.name]: e.target.value,
                                        });
                                    }}
                                />
                                {errors.description && (
                                    <div className="invalid-feedback">
                                        {errors.description}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3">
                                <label htmlFor="stock" className="form-label">
                                    Product Stock
                                </label>
                                <input
                                    type="number"
                                    className={
                                        errors.stock
                                            ? "form-control is-invalid"
                                            : "form-control"
                                    }
                                    id="stock"
                                    name="stock"
                                    value={input.stock}
                                    onChange={(e) => {
                                        setInput({
                                            ...input,
                                            [e.target.name]: e.target.value,
                                        });
                                    }}
                                />
                                {errors.stock && (
                                    <div className="invalid-feedback">
                                        {errors.stock}
                                    </div>
                                )}
                            </div>

                            <div className="mb-3 form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="status"
                                    name="status"
                                    checked={input.status}
                                    onChange={(e) => {
                                        setInput({
                                            ...input,
                                            [e.target.name]: e.target.checked,
                                        });
                                    }}
                                />
                                <label
                                    className="form-check-label"
                                    htmlFor="status"
                                >
                                    Is sale
                                </label>
                            </div>

                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Create;
