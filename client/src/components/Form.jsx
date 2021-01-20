import React, { useState } from "react";

export default (props) => {
    const { authorIn,  submitAuthor } = props;
    const [ author, setAuthor ] = useState(authorIn);

    const ProcessAuthor = (e) => {
        e.preventDefault();
        submitAuthor({ author });
    }

    return(
        <div>
            <form onSubmit={ProcessAuthor}>
                <label>Author</label>
                <input type="text" 
                name="author"
                value={author}
                onChange={ e => setAuthor(e.target.value) } /><br/>
                <input type="submit" />
            </form>
        </div>
    )
}