import React, { Fragment } from "react";
import { Link } from "@inertiajs/react";

const Pagination = ({ links }) => {
    const getClassName = (active) => {
        if (active) {
            return "page-link active";
        } else {
            return "page-link";
        }
    };

    return (
        <nav aria-label="...">
            <ul className="pagination">
                {links.map((link, key) => {
                    return (
                        <li className="page-item" key={key}>
                            {key == 0 || key == links.length - 1 ? (
                                <Link
                                    className="page-link"
                                    href={link.url}
                                    aria-label={key == 0 ? "Previous" : "Next"}
                                >
                                    {key === 0 ? (
                                        <span aria-hidden={true}>&laquo;</span>
                                    ) : (
                                        <span aria-hidden={true}>&raquo;</span>
                                    )}
                                </Link>
                            ) : (
                                <Link
                                    className={getClassName(link.active)}
                                    href={link.url}
                                >
                                    {link.label}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default Pagination;
