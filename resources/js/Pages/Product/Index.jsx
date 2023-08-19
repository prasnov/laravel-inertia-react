import React from "react";
import { Head, Link, router, usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import Pagination from "../../Components/Pagination";
const Index = ({ products }) => {
    let number = 0;

    const { flash } = usePage().props;

    const handleDelete = (e) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                router.delete(`/product/${e.target.id}`);
            }
        });
    };

    return (
        <>
            <Head title="Product List :D"></Head>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="text-center text-success mt-3">
                            Product List
                        </h3>
                    </div>
                    <div className="col-12 mt-2">
                        <Link
                            className="btn btn-primary btn-sm my-2"
                            href="/product/create"
                        >
                            + add product
                        </Link>

                        {flash.msg && (
                            <div
                                className="alert alert-success alert-dismissible fade show"
                                role="alert"
                            >
                                <span className="text-center">{flash.msg}</span>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="alert"
                                    aria-label="Close"
                                />
                            </div>
                        )}

                        <table className="table">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Product Code</th>
                                    <th>Product Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.length != 0 ? (
                                    products.data.map((product, key) => {
                                        number += 1;
                                        return (
                                            <tr key={key}>
                                                <td>{number}</td>
                                                <td>{product.code}</td>
                                                <td>{product.name}</td>
                                                <td>{product.price}</td>
                                                <td>
                                                    <Link
                                                        href={`/product/${product.code}`}
                                                        className="btn btn-primary btn-sm me-1"
                                                    >
                                                        view
                                                    </Link>
                                                    <Link
                                                        href={`/product/${product.code}/edit`}
                                                        className="btn btn-warning btn-sm me-1"
                                                    >
                                                        edit
                                                    </Link>
                                                    <button
                                                        id={product.code}
                                                        className="btn btn-danger btn-sm"
                                                        onClick={handleDelete}
                                                    >
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td
                                            colSpan={5}
                                            className="text-center text-danger"
                                        >
                                            Data is not available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-12 mt-2 d-flex justify-content-center">
                        <Pagination links={products.links} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;
