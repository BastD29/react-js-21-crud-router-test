import { useState } from 'react'
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Form from './components/Form'
import Table from './components/Table'
import database from "./data/database";

export default function App() {

  const data = database.rows;
  const navigate = useNavigate();

  const [tableData, setTableData] = useState(data);
  const [inputData, setInputData] = useState(
    {
      fullName:'',
      emailAddress:'',
      salary:''
    }
  )

  // HANDLECHANGE

  const handleChange = (e) => {
    const newInput = (data) => ({ 
      ...data,
      [e.target.name]: e.target.value
    });
    setInputData(newInput)
  }

  // HANDLESUBMIT

  const handleSubmit = (e) => {
    e.preventDefault();
    const checkEmptyInput = !Object.values(inputData).every(res => res === "");
    if (checkEmptyInput){
      const newData = (data) => ([...data, inputData]);
      setTableData(newData);
      const emptyInput = {
        fullName:'',
        emailAddress:'',
        salary:''
      }
      setInputData(emptyInput);
    }
    navigate("/")
  }

  // HANDLEDELETE

  const handleDelete = (id) => {
    const filteredRows = tableData.filter((row) => id !== row.id);
    setTableData(filteredRows)
  }

  // HANDLEEDIT

  const handleEdit = () => {

  }

  return (
    <>
      <Routes>
        <Route 
          path='/' 
          element={
            <Table 
              tableData={tableData} 
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          } 
        />
        <Route 
          path='/new' 
          element={
            <Form 
              handleChange={handleChange}
              inputData={inputData}
              handleSubmit={handleSubmit}
            />
          } 
        />
        <Route 
          // path='/:userId' 
          path={`/:userUUID`}
          element={
            <Form 
              handleChange={handleChange}
              inputData={inputData}
              handleSubmit={handleSubmit}
            />
          } 
        />
      </Routes>
    </>
  )
}
