import React, { useState, useEffect } from "react";
import { Link } from "@reach/router";
import axios from "axios";
import Authors from "../components/Authors";

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
    }, []);

    return(
        <div>
            <Link to={"/new"}>
                Add an Author
            </Link>
            <p>We have quotes by:</p>
            <Authors authors={authors} settingList={settingList} />
        </div>
    )
}