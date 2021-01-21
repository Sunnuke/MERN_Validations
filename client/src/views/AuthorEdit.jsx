import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";
import Form from "../components/Form";

export default (props) => {
    console.log(props);
    const { id } = props;
    const [ author, setAuthor ] = useState("");
    const [ errors, setErrors ] = useState([]);
    const [ load, setLoad ] = useState(false);
    const [ eload, setEload ] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/author/" + id)
            .then(res => {
                setAuthor(res.data.name)
                setLoad(true);
            })
            .catch(err => console.log(err));
    }, [])

    const updateAuthor = (author) => {
        axios.put("http://localhost:8000/api/author/" + id, author)
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
                setEload(true);
            });
    }

    return(
        <div>
            <Link to={"/"}>
                Home
            </Link> <br />
            <p>Edit this author</p>
            {load && <Form authorIn={author} submitAuthor={updateAuthor} />}
            {
                eload ?
                <p style={{color: "red"}}>{errors}</p> :
                ''
            }
        </div>
    )
}