import React, {useState, useEffect} from 'react';
import { DataGrid, GridToolbar  } from '@mui/x-data-grid';

// local
// const getReqApi = 'http://127.0.0.1:8000/api/profile/';
// prod
const getReqApi = 'http://65.0.151.183:8000/api/profile/';


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
    const [authStr, setAuthStr] = useState("");

    const handleAuthSubmit = (props) => {
      setAuthStr(localStorage.getItem("authStr"));
    }

    const handleAuthChange = (e) => {
      localStorage.setItem("authStr",e.target.value);
    }

    useEffect( () => {
      if (authStr){
        fetch(getReqApi)
        .then((response)=> response.json())
        .then((data) => {
            console.log(data)
            setData(data);
        })
        .catch((err)=> {console.log(err.message)})
      }
    }, [authStr])


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


    
  

  { if (authStr !== 'hpl.fun.369'){
    return (<>
      <section className="section">
            <header>
                <h4>Please Enter auth key.</h4>
            </header>
            <main>
                <form onSubmit={handleAuthSubmit} >

                    <div className="form-item box-item">
                        <input type="password" name="reference" placeholder="Auth key" data-required onChange={handleAuthChange} />
                        <small className="errorReq"><i className="fa fa-asterisk" aria-hidden="true"></i> required field</small>
                    </div>
                    
                    <div className='buttons__div' >
                        <div className="form-item">
                            <button type='submit' id="submit" className="submit">Submit</button>
                        </div>
                    </div>

                </form>
            </main>
        </section>

    </>)
  } else {
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
  } } 

}
