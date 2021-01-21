import React, { useState } from "react";

export default (props) => {
    const { authorIn,  submitAuthor } = props;
    const [ name, setName ] = useState(authorIn);

    const ProcessAuthor = (e) => {
        e.preventDefault();
        submitAuthor({ name });
    }

    return(
        <div>
            <form onSubmit={ProcessAuthor}>
                <label>Author's Name:</label>
                <input type="text" 
                name="name"
                value={name}
                onChange={ e => { setName(e.target.value) } } /><br/>
                <input type="submit" />
            </form>
        </div>
    )
}