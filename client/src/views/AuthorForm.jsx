import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import Form from "../components/Form";

export default () => {
    const [ errors, setErrors ] = useState();
    const [ load, setLoad ] = useState(false);

    const createAuthor = (author) => {
        console.log(author);
        axios.post("http://localhost:8000/api/author/new", author)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                setLoad(true);
            });
    }

    return(
        <div>
            <Link to={"/"}>
                Home
            </Link> <br />
            <p>Add a new author</p>
            <Form authorIn="" submitAuthor={createAuthor} />
            {
                load ?
                <p style={{color: "red"}}>{errors}</p> :
                ''
            }
        </div>
    )
}