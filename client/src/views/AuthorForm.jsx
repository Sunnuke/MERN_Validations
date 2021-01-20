import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import Form from "../components/Form";

export default () => {
    const [ errors, setErrors ] = useState([]);
    const [ load, setLoad ] = useState(false);

    const createAuthor = (author) => {
        axios.post("http://localhost:8000/api/author/new", author)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                setErrors(err)
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
                <p>{errors}</p> :
                ''
            }
        </div>
    )
}