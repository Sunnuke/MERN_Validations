import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

export default () => {
    const [ authors, setAuthors ] = useState([]);
    const settingList = (list) => {
        setAuthors(list);
    }

    useEffect(() => {
        axios.get("http://localhost:8000/api/author")
        .then(res => {
            console.log(res.data)
            settingList(res.data);
        })
        .catch(err => console.log(err));
    });

    return(
        <>
            <Link to={"/new"}>
                Add an Author
            </Link>
            <p>We have quotes by:</p>
        </>
    )
}