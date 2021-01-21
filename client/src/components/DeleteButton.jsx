import React from "react";
import axios from "axios";
import { navigate } from "@reach/router";

export default (props) => {
    const { authorId, removingDOM } = props;
    const deleting = (e) => {
        axios.delete("http://localhost:8000/api/author/" + authorId)
            .then(res => {
                removingDOM();
                navigate("/");
            })
    }
    return(
            <button onClick={ e => {deleting(e)} }>
                Delete
            </button>
    )
}