import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate, useParams } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { AuthContext } from '../contexts/AuthContext';



function createData(index,days,title,first_name,last_name,gender,salary,is_staffed,id) {
    console.log(index,days,first_name,last_name,gender,salary)
  return { index,days,title,first_name,last_name,gender,salary,is_staffed,id };
}

export default function DeparmentDetail() {
    const {str} = useParams()
    const {myKey}= React.useContext(AuthContext)
    const isStaff=sessionStorage.getItem("is_staff") || false
    const [data,setData] = React.useState()
    const [deparmentId,setId] = React.useState()
    const navigate = useNavigate()
    const getDepartments= async (str) =>{
        try {
            const res = await axios.get(`http://127.0.0.1:8000/api/department/${str}/`,{headers:{'Authorization':`Token ${myKey}`}})
            console.log(res)
            const rows= res.data[0].departments.map((item,index)=> createData(index+1,item.days_since_joined,item.title,item.first_name,item.last_name,item.gender,item.salary,item.is_staffed,item.id) );
            setData(rows)
            setId(res.data[0].id)
        }
        catch(error) {
            // toastErrorNotify(error.message)
        }
    }
    React.useEffect(()=>{
        getDepartments(str)
    },[])

    const handleDelete=(id)=>{

    }
    const handleEdit =()=>{

    }
    const handleClick = ()=>{
      navigate("/create-personal",{state:{deparmentId}})
    }

  return (
    <div style={{margin:"1rem"}}>
    <h1>{str} Deparments Personal List</h1>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">N.</TableCell>
            <TableCell align="center">Did Joined?</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">First Name</TableCell>
            <TableCell align="center">Last Name</TableCell>
            <TableCell align="center">Gender</TableCell>
            <TableCell align="center">Salary</TableCell>
            <TableCell align="center">Is Staffed?</TableCell>
            {isStaff !== "false" &&  (
            <>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
            </>
            )
            }


          </TableRow>
        </TableHead>
        <TableBody>
          {data && data?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row.index}</TableCell>
              <TableCell align="center">{row.days} day ago</TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.first_name}</TableCell>
              <TableCell align="center">{row.last_name}</TableCell>
              <TableCell align="center">{row.gender}</TableCell>
              <TableCell align="center">{row.salary} $</TableCell>
              <TableCell align="center">{row.is_staffed ? "✅" : "❌"}</TableCell>
              {
                isStaff!== "false" && (
                    <>
                        <TableCell align="center" sx={{cursor: "pointer"}} onClick={handleEdit}><EditIcon/></TableCell>
                        <TableCell align="center" sx={{cursor: "pointer"}} onClick={()=>handleDelete(row.id)}><DeleteIcon/></TableCell>
                    </>
                )
              }
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

   {isStaff !== "false" && (<TableCell onClick={handleClick} sx={{backgroundColor: "darkslategray",color:"white"}}> Add Personal</TableCell>)}
    </div>
  );
}
