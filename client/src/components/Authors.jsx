import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

export default (props) => {
    const { authors, settingList } = props;
    const editing = (id) => {
        navigate("/edit/" + id);
    }
    return(
        <>
            <Link to={"/new"}>
                Add an Author
            </Link>
            <p>We have quotes by:</p>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((author, i) => {
                            <tr>
                                <td>{author.name}</td>
                                <td>
                                    <button onClick={ e => editing(author._id) } >Edit</button>
                                    <button>Fake Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </>
    )
}