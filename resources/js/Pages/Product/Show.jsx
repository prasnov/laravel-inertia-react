import React from "react";
import { Link, usePage, Head } from "@inertiajs/react";

const Show = () => {
    const { product } = usePage().props;
    const _imageStyle = {
        width: "200px",
        height: "200px",
        objectFit: "cover",
    };
    return (
        <>
            <Head title="Product show" />
            <div className="container mt-3">
                <div className="row">
                    <div className="col-12">
                        <h4 className="text-success">Product details</h4>
                        <small className="text-success">
                            This is information detail abaout product
                        </small>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-6">
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>Product code</td>
                                    <td>{product.code}</td>
                                </tr>
                                <tr>
                                    <td>Product name</td>
                                    <td>{product.name}</td>
                                </tr>
                                <tr>
                                    <td>Product price</td>
                                    <td>{product.price}</td>
                                </tr>
                                <tr>
                                    <td>Photo</td>
                                    <td>
                                        <img
                                            src={"/storage/" + product.photo}
                                            alt={product.name}
                                            style={_imageStyle}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>
                                        {product.description
                                            ? product.description
                                            : "-"}
                                    </td>
                                </tr>
                                <tr>
                                    <td>Stock</td>
                                    <td>{product.stock}</td>
                                </tr>
                                <tr>
                                    <td>Status</td>
                                    <td>{product.status}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>
                                        <Link
                                            className="btn btn-primary btn-sm"
                                            href="/product"
                                        >
                                            Back to home
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Show;
