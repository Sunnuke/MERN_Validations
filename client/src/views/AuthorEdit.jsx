import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import Form from "../components/Form";

export default (props) => {
    const { id } = props;
    const [ author, setAuthor ] = useState("");
    const [ errors, setErrors ] = useState([]);
    const [ load, setLoad ] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then(res => {
                setAuthor(res.data.name)
            })
            .catch(err => console.log(err));
    })

    const updateAuthor = (author) => {
        axios.put("http://localhost:8000/api/author/" + id, author)
            .then(res => {
                console.log(res);
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setErrors(err)
                setLoad(true);
            });
    }

    return(
        <div>
            <Link to={"/"}>
                Home
            </Link> <br />
            <p>Edit this author</p>
            <Form authorIn={author} submitAuthor={updateAuthor} />
            {
                load ?
                <p>{errors}</p> :
                ''
            }
        </div>
    )
}