import { navigate } from "@reach/router";

export default (props) => {
    const { authors, settingList } = props;
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
                                        <button>Fake Delete</button>
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