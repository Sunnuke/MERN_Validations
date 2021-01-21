import { navigate } from "@reach/router";
import DeleteButton from "./DeleteButton";

export default (props) => {
    const { authors, removingDOM } = props;
    const editing = (id) => {
        console.log(id);
        navigate("/edit/" + id);
    }
    return(
        <div>
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
                            return(
                                <tr key={i}>
                                    <td>{author.name}</td>
                                    <td>
                                        <button onClick={ e => editing(author._id) } >Edit</button>
                                        <DeleteButton authorId={author._id} removingDOM={removingDOM} />
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}