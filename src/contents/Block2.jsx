import { Autocomplete, Box, Button, Checkbox, TextField, Typography } from '@mui/material'
import React from 'react';
// import {useForm} from 'react-hook-form';


const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const top100Films = [
    {label:'channel1-1'},
    {label:'channel1-2'},
    {label:'channel1-3'},
    {label:'channel1-4'},
    {label:'channel1-5'},
    {label:'channel1-6'},
    {label:'channel1-7'},
    {label:'channel1-8'},
    {label:'channel1-9'},
    {label:'channel1-10'}
];
const Block2 = () => {
//  const {register , handleSubmit} = useForm();
//  const onSubmit = (data) =>{
//   console.log(data);
//  }
  return (
    <>
    {/* <form onsubmit={handleSubmit(onSubmit)}></form> */}
        <Box sx={{width:'100%', height:'570px',display:'flex',flexDirection:'column',alignItems:'center',margin:'30px 0px'}}>
            <Box sx={{width:'90%', height:'63px',display:'flex',alignItems:'center',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',gap:'80px',}}>
              <Typography sx={{margin:'0px 20px'}}>Channel</Typography>
              <Typography>Primary channels (default select)</Typography>
              <Typography>Reference channels (default N/A)</Typography>
            </Box>

            <Box sx={{width:'90%',height:'102px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',margin:'20px 0px',display:'flex',alignItems:'center',gap:'70px'}}>
                  <Box sx={{display:'flex',}}>
                    <Typography sx={{fontSize:'20px',margin:'0px 20px'}}>C3-A2</Typography>
                  </Box>
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Select channel" />}
                      
                      />
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                    
                      renderInput={(params) => <TextField {...params} label="Select channel" />}
                      />
                  
                    <Button sx={{fontSize:'18px',color:'#3E78B8',padding:'10px'}}> + ADD BACKUP CHANNEL</Button>
                
            </Box>
            <Box sx={{width:'90%',height:'102px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',margin:'20px 0px',display:'flex',alignItems:'center',gap:'70px'}}>
                  <Box sx={{display:'flex',}}>
                    <Typography sx={{fontSize:'20px',margin:'0px 20px'}}>C3-A2</Typography>
                  </Box>
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Select channel" />}
                      />
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Select channel" />}
                      />
                  <Button sx={{fontSize:'18px',color:'#3E78B8',padding:'10px'}}> + ADD BACKUP CHANNEL</Button>
            </Box>
          
            <Box sx={{width:'90%',height:'102px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',margin:'20px 0px',display:'flex',alignItems:'center',gap:'80px'}}>
                  <Box sx={{display:'flex',}}>
                    <Typography sx={{fontSize:'20px',margin:'0px 20px'}}>EMG</Typography>
                  </Box>
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Select channel" />}
                      />
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Select channel" />}
                      />
                  <Button sx={{fontSize:'18px',color:'#3E78B8',padding:'10px'}}> + ADD BACKUP CHANNEL</Button>
            </Box>
            <Box sx={{width:'90%',height:'102px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',margin:'20px 0px',display:'flex',alignItems:'center',gap:'70px'}}>
                  <Box sx={{display:'flex',}}>
                    <Typography sx={{fontSize:'20px',margin:'0px 20px'}}>Additional Settings</Typography>
                  </Box>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <Checkbox {...label} defaultChecked />
                    <Typography>Spindle</Typography>
                  </Box>
                  <Box sx={{display:'flex',alignItems:'center'}}>
                    <Checkbox {...label} defaultChecked />
                    <Typography>Artifacts</Typography>
                  </Box>
                  
            </Box>
        </Box>
      
    </>
  )
}

export default Block2
