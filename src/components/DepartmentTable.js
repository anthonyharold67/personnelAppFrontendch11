import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';


function createData(index,name,personal_count) {
  console.log(index,name,personal_count)
return { index,name,personal_count };
}

export default function DepartmentTable() {
    const {myKey} = React.useContext(AuthContext)
    const navigate = useNavigate()
    const [data,setData] = React.useState()
    
    const getDepartments= async (str) =>{
      try {
          const res = await axios.get(`http://anthonycw.pythonanywhere.com/api/`,{headers:{'Authorization':`Token ${myKey}`}})
          const rows= res.data.map((item,index)=> createData(index+1,item.name,item.personal_count));
          setData(rows)
          console.log(res);
      }
      catch(error) {
          // toastErrorNotify(error.message)
      }
  }
    React.useEffect(()=>{
      if(myKey){
        getDepartments()
      }
    },[myKey])

    const handleClick=(deparment)=>{
        navigate(`/detail/${deparment}`)
    }

  return (
    <div style={{margin:"1rem"}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">N.</TableCell>
            <TableCell align="center">Deparment Name</TableCell>
            <TableCell align="center">How many staff work in this department?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data && data?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.index}</TableCell>
              <TableCell align="center" onClick={()=>handleClick(row.name)} sx={{cursor: "pointer"}}>{row.name}</TableCell>
              <TableCell align="center">{row.personal_count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
