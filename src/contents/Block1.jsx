import React, { useState } from 'react'
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import GridViewIcon from '@mui/icons-material/GridView';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Stepper from '@mui/material/Stepper';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import TextField from '@mui/material/TextField';
import { Button, Step, StepLabel,   Typography } from '@mui/material';
import Block2 from './Block2';
import Block3 from './Block3'
// import  {styled } from '@mui/styles';
// import { style } from '@mui/system';


// sx={{
//     width: 300,
//     height: 300,
//     backgroundColor: 'primary.dark',
//     '&:hover': {
//       backgroundColor: 'primary.main',
//       opacity: [0.9, 0.8, 0.7],
//     },
//   }}

const Box1 = styled(Box)({
width:'100%',
height:'1550px',
display:'flex',

})
const Box2 = styled(Box)({
    display:'flex',
    
    width:'300px',
    height:'1080px',
    backgroundColor:'#082434',
    scrollBehavior: 'smooth',
    // position:'fixed',
    

})

const steps = [
    'Upload EDFs',
    'Map channels',
    'Save & Preview',
  ];

const Block1 = () => {
    const [value , setValue] = useState('upload');
    // const [back , setBack] = useState('initial');
   let [state,setState] = useState(0);
    const handleChange1 = (event)=>{
        setValue(event);
        if(event==='upload'){
          setState(0);
        }
        else if(event==='map')
        setState(++state)
    }
    let next = 'Next' , save = 'Save';
  return (
    <>
       <Box1>
            <Box2> 
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-between',width:'100%'}}>
                    <Box sx={{width:'100%',display:'flex',flexDirection:'column',padding:'10px'}}>

                            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:'30px 0px',marginLeft:'-80px' ,borderBottom:'0.5px solid gray',}}>
                                <Typography sx={{color:'#fff',fontWeight:'500',fontSize:'25px'}}>React Test</Typography>
                            </Box>
                            <Box sx={{display:'flex',gap:'10px',padding:'20px',width:'86%'}}>
                                <GridViewIcon sx={{color:'#fff'}}/>
                                <Typography sx={{color:'#fff'}}>Dashboard</Typography>
                            </Box>
                            <Box sx={{display:'flex',gap:'10px',padding:'20px',background:'#02354F',width:{xl:'83.5%',lg:'84.5%',md:'83%',sm:'81.5%',xs:'76%'}}}>
                                <NoteAddIcon sx={{color:'#fff'}}/>
                                <Typography sx={{color:'#fff'}}>Montages</Typography>
                            </Box>
                            <Box sx={{display:'flex',gap:'10px',padding:'20px',width:'86%'}}>
                                <MonetizationOnIcon sx={{color:'#fff'}}/>
                                <Typography sx={{color:'#fff'}}>Credits</Typography>
                            </Box>
                    </Box>
                    <Box sx={{width:'88%',height:'145px',background:'#02354F',display:'flex',
                        flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
                        <Typography sx={{color:'#fff',fontWeight:'500',fontSize:'25px'}}>1,650</Typography>
                        <Typography sx={{color:'#fff'}}>Total Credits available</Typography>
                    </Box>
                </Box> 
            </Box2>




            <Box sx={{width:'100%',display:'flex',alignItems:'center',flexDirection:'column'}}>
                <Box sx={{width:'90%',height:'130px',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px'}}>
                    <h2>Test_Study</h2>
                    <Box sx={{display:'flex',alignItems:'center',gap:'7px',padding:'10px'}}>
                        <PersonIcon sx={{color:'#fff',background:'blue',borderRadius:'50%',}}/>
                        <h4 style={{opacity:'0.4'}}>Ankit Bansal</h4>
                        <ArrowDropDownIcon/>
                    </Box>
                </Box>

                {/* Stepper */}
                <Box sx={{width:'90%',height:'137px',display:'flex',alignItems:'center',marginTop:'',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',}}>
                    <Box sx={{width:'100%'}}>
                        <Stepper activeStep={state} alternativeLabel>
                            {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>
                    </Box>
                </Box>

               
               {/* 1st page */}
               {value === 'upload' && <Box sx={{width:'90%',height:'590px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',marginTop:'40px',display:'flex',justifyContent:'center',alignItems:'center',}}>
                   <Box sx={{width:'95%',height:'520px',border:'0.5px dashed',display:'flex',alignItems:'center',justifyContent:'center',background:'#F8F8F8'}}>
                    <Box sx={{display:'flex',flexDirection:'column',gap:'5px',alignItems:'center'}}>
                        <InsertDriveFileIcon sx={{fontSize:'60px',color:'#2F7EC7'}} />
                        {/* <TextField variant='outlined' sx={{opacity:'0.4',color:'#222'}}>Browser Files</TextFild> */}
                        <TextField id="outlined-basic" variant="outlined" type='file' />
                        <Typography>or drop files here</Typography>
                    </Box>
                    
                   </Box>
                </Box>}

                {/* 2nd page */}
                {value==='map' &&  <Block2/> && (state <= 2 ? <Block2/> : <Block3/>)  }

                

                <Box sx={{width:'100%',height:'120px',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',marginTop:'40px',display:'flex',justifyContent:'space-between'}}>
                    
                    <Box sx={{display:'flex',alignItems:'center',gap:'8px',padding:'0px 20px'}}>
                       
                        <Button onClick={() => handleChange1("upload")} variant='outlined' sx={{padding:'10px 35px',textDecoration:'underline',opacity:'0.4'}}>Back</Button>
                        
                        <Typography sx={{opacity:'0.4'}}>Cancel Montage</Typography>
                    </Box>
                    
                    {
                        state <= 2 &&
                    <Box sx={{display:'flex',alignItems:'center',padding:"0px 20px",}}>
                        <Button  onClick={() => handleChange1("map")}  variant='outlined' sx={{background:'#9BC4EA',padding:'10px 35px',textDecoration:'underline',opacity:'1.2',color:'#fff'}}>{state <=1 ? next:save}</Button>
                    </Box>
                   }

                </Box>

            </Box>
       </Box1>
    </>
  )
}

export default Block1;
