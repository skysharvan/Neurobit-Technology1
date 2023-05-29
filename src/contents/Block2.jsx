import { Autocomplete, Box, Button, Checkbox, TextField, Typography } from '@mui/material'
import React from 'react';
// import {useForm} from 'react-hook-form';
import Block2Data from './Block2Data'


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
  // console.log(data1 );
//  }

// const handleChange1 = (e)=>{
//   setData1({...e.target.value
//   })
//   console.log(data1 );
// }
// const handleChange2 = (e)=>{
//   setData1({...e.target.value
//   })
//   console.log(data1+"ldmjcdsv cs sxsa" );
// }

  return (
    <>
    {/* <form onsubmit={handleSubmit(onSubmit)}></form> */}
        <Box sx={{width:'100%', height:{md:'570px',xs:'auto'},display:'flex',flexDirection:'column',alignItems:'center',margin:'30px 0px'}}>
            <Box sx={{width:{md:'90%',xs:'100%'}, height:{md:'auto',sm:'110px',xs:'130px'},display:'flex',alignItems:'center',padding:'15px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',gap:{md:'80px',xs:'30px'},}}>
              <Typography sx={{margin:'0px 20px'}}>Channel</Typography>
              <Typography>Primary channels (default select)</Typography>
              <Typography>Reference channels (default N/A)</Typography>
            </Box>
            {
              Block2Data.data.map((element , id)=>{
                return(
                  <Box key={id} sx={{width:{md:'90%',xs:'100%'},height:'auto',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',margin:'20px 0px',display:{md:'flex',sm:'flex',xs:'column'},alignItems:'center',gap:{md:'25px',sm:'100px',xs:'120px'},padding:{md:'20px'}}}>
                  <Box sx={{display:'flex'}}>
                    <Typography sx={{fontSize:'20px',margin:{md:'0px 20px',xs:'0px 8px'}}}>{element.channel}</Typography>
                  </Box>
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="Select channel" name='data1'   />}
                      
                      />
                  <Autocomplete
                      disablePortal
                      id="combo-box-demo"
                      options={top100Films}
                      sx={{ width: 300 }}
                    
                      renderInput={(params) => <TextField {...params} label="Select channel" name='data1'  />}
                      />
                  
                    <Button sx={{fontSize:'18px',color:'#3E78B8',padding:'10px'}}>{element.name}</Button>
                
                  </Box>
                )
              })
          
           
}
            <Box sx={{width:{md:'90%',xs:'100%'},height:'auto',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',margin:'20px 0px',display:{md:'flex',xs:'column'},alignItems:'center',gap:'70px',padding:{md:'20px'}}}>
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
