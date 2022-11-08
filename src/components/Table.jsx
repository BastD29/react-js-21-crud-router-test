import { useNavigate } from "react-router-dom"


export default function Table({ tableData, handleDelete, handleEdit }) {

    const navigate = useNavigate();

    return (
            <>
                <header>
                    <button
                        onClick={() => navigate("/new")}
                    >
                        Add row
                    </button>
                    <hr />
                </header>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Email Address</th>
                            <th>Salary</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableData.map((data, index) => {
                                // console.log(data);
                                return (
                                    <tr key={index}>
                                        <td>{data.fullName}</td>
                                        <td>{data.emailAddress}</td>
                                        <td>{data.salary}</td>
                                        <td>
                                            <button
                                                onClick={() => handleEdit(data.id)}
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(data.id)}
                                                // onClick={() => console.log(data.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
    )
}
