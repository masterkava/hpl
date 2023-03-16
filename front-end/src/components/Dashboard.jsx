import React, {useState, useEffect} from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridToolbar  } from '@mui/x-data-grid';

const rows = [
  { 
    id: 1, 
    fname: 'Mayur', 
    lname: 'Kava',
    yuvak_type: 'Existing',
    mobile_number: '9725988147',
    date_of_birth: '25/11/1995',
    sabha_location: 'TF',
    reference: 'Mohit Darji',
    good_at: 'Batsman',
    hand: 'Right',
    tshirt_size: 'XL',
    tshirt_name: 'Mayur'
},
{ 
    id: 2, 
    fname: 'Mayur', 
    lname: 'Kava',
    yuvak_type: 'New',
    mobile_number: '9725988147',
    date_of_birth: '25/11/1995',
    sabha_location: 'TF',
    reference: 'Mohit Darji',
    good_at: 'Batsman',
    hand: 'Right',
    tshirt_size: 'XL',
    tshirt_name: 'Mayur'
},

];

const columns = [
  { field: 'fname', headerName: 'First Name' },
  { field: 'lname', headerName: 'Last Name' },
  { field: 'yuvak_type', headerName: 'Type' },
  { field: 'mobile_number', headerName: 'Mob No' },
  { field: 'date_of_birth', headerName: 'DOB' },
  { field: 'sabha_location', headerName: 'Sabha' },
  { field: 'reference', headerName: 'Ref' },
  { field: 'good_at', headerName: 'Player' },
  { field: 'hand', headerName: 'Hand' },
  { field: 'tshirt_size', headerName: 'Tshirt Size' },
  { field: 'tshirt_name', headerName: 'Tshirt Name' },

];

export default function Dashboard() {

    const [data, setData] = useState([]);


    useEffect( () => {
        fetch('http://127.0.0.1:8000/api/profile/')
        .then((response)=> response.json())
        .then((data) => {
            console.log(data)
            setData(data);
        })
        .catch((err)=> {console.log(err.message)})
    }, [])

    const handleHomeClick = () => {

    }

    // const handleEvent = (event) => {
    //     fetch('http://127.0.0.1:8000/api/profile/'+event.id+'/', { method: 'DELETE' })
    //         .then(() => console.log("removed successfully."))
    //     console.log(event);
    // }

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/api/profile/'+removeItem+'/', { method: 'DELETE' })
    //         .then(() => console.log("removed successfully."))//setStatus('Delete successful'));
    
    // // empty dependency array means this effect will only run once (like componentDidMount in classes)
    // }, [removeItem]);    

  return (
    <>
        
    <div style={{ height: 900, width: '100%' }}>
      <DataGrid rows={data} columns={columns} 
        sx={{
            boxShadow: 2,
            border: 2,
            fontWeight: 600,
            fontSize:' 12px',
            fontFamily: 'PT Sans',
            borderColor: 'primary.light',
            '& .MuiDataGrid-cell:hover': {
                color: 'primary.main',
            },
        }} 
        slots={{
            toolbar: GridToolbar,
          }}
          initialState={{
            pagination: { paginationModel: { pageSize: 15 } },
          }}
          pageSizeOptions={[ 15, 30, 45]}
        //   onRowClick={handleEvent}
  />
    </div>
    </>

  );
}
