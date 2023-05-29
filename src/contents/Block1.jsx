import React, { useState } from 'react'
import Box from '@mui/material/Box';

import GridViewIcon from '@mui/icons-material/GridView';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Stepper from '@mui/material/Stepper';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import TextField from '@mui/material/TextField';
import { Button, Step, StepLabel,   Typography, styled } from '@mui/material';
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
// height:'1550px',
display:'flex',
position:'relative',

})
const Box2 = styled(Box)(({theme})=>({

    flex:"1",
    
    // height:{md:'1500px',sm:'1700px',xs:'4000px'},
    backgroundColor:'#082434',
    scrollBehavior: 'smooth',
   
    
    [theme.breakpoints.down("sm")]:{
    //  display:"none"
    }
}))


const steps = [
    'Upload EDFs',
    'Map channels',
    'Save & Preview',
  ];

const Block1 = () => {
    const [value , setValue] = useState('upload');
    const [file , setFile] = useState();
    // const [data1 , setData1] = useState({ });
    // const [data2 , setData2] = useState('kumar');
    // const [back , setBack] = useState('initial');
    const handleChange = (e)=>{
        // const uploadfile = e.target.name;
        setFile(e.target.value);
        // setData(e.target.value);
        // console.log(uploadfile);
    }
   let [state,setState] = useState(0);
    const handleChange1 = (event)=>{
        setValue(event);
        if(event==='upload'){
          setState(0);
          setFile();
        }
        else if(event==='map')
        setState(++state)
    }
    let next = 'Next' , save = 'Save';
  return (
    <>
       <Box1>
            <Box2> 
                <Box sx={{display:'flex',flexDirection:'column',alignItems:'space-between',justifyContent:'center',width:'100%',gap:{md:'250px'}}}>
                    <Box sx={{width:'100%',display:'flex',flexDirection:'column',padding:'10px'}}>

                            <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',padding:'30px 0px',marginLeft:'-80px' ,borderBottom:'0.5px solid gray',}}>
                                <Typography sx={{color:'#fff',fontWeight:'500',fontSize:'25px'}}>React Test</Typography>
                            </Box>
                            <Box sx={{display:'flex',gap:'10px',padding:'20px',width:'86%'}}>
                                <GridViewIcon sx={{color:'#fff'}}/>
                                <Typography sx={{color:'#fff'}}>Dashboard</Typography>
                            </Box>
                            <Box sx={{display:'flex',gap:'10px',padding:{md:'18px',sm:'0px',xs:'0px'},background:'#02354F',width:'86%'}}>
                                <NoteAddIcon sx={{color:'#fff'}}/>
                                <Typography sx={{color:'#fff'}}>Montages</Typography>
                            </Box>
                            <Box sx={{display:'flex',gap:'10px',padding:'20px',width:'86%'}}>
                                <MonetizationOnIcon sx={{color:'#fff'}}/>
                                <Typography sx={{color:'#fff'}}>Credits</Typography>
                            </Box>
                    </Box>
                    <Box sx={{width:'88%',height:'auto',background:'#02354F',display:'flex', padding:{md:'40px 10px'},
                        flexDirection:'column',alignItems:'center',justifyContent:'center',marginBottom:'20px',marginLeft:{md:'10px'}}}>
                        <Typography sx={{color:'#fff',fontWeight:'500',fontSize:'25px'}}>1,650</Typography>
                        <Typography sx={{color:'#fff'}}>Total Credits available</Typography>
                    </Box>
                </Box> 
            </Box2>




            <Box sx={{width:'100%',display:'flex',alignItems:'center',flexDirection:'column', flex:"3"}}>
                <Box sx={{width:{md:'90%',xs:'100%'},height:'130px',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px'}}>
                    <h2>Test_Study</h2>
                    <Box sx={{display:'flex',alignItems:'center',gap:'7px',padding:'10px'}}>
                        <PersonIcon sx={{color:'#fff',background:'blue',borderRadius:'50%',}}/>
                        <h4 style={{opacity:'0.4'}}>Ankit Bansal</h4>
                        <ArrowDropDownIcon/>
                    </Box>
                </Box>

                {/* Stepper */}
                <Box sx={{width:{md:'90%',xs:'90%'},height:'auto',display:'flex',alignItems:'center',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',padding:'20px'}}>
                    <Box sx={{width:{md:'100%',xs:'95%'}}}>
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
               {value === 'upload' && <Box sx={{width:'90%',height:'auto',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',marginTop:'40px',display:'flex',justifyContent:'center',alignItems:'center',position:'relative',top:'0%'}}>
                   <Box sx={{width:'95%',height:{md:'520px',xs:'250px'},border:'0.5px dashed',display:'flex',alignItems:'center',justifyContent:'center',background:'#F8F8F8'}}>
                    <Box sx={{display:'flex',flexDirection:'column',gap:'5px',alignItems:'center',}}>
                        <InsertDriveFileIcon sx={{fontSize:'60px',color:'#2F7EC7'}} />
                        {/* <TextField variant='outlined' sx={{opacity:'0.4',color:'#222'}}>Browser Files</TextFild> */}
                        <TextField id="outlined-basic" variant="outlined" type='file' name='file' value={file} onChange={handleChange}  />
                        <Typography>or drop files here</Typography>
                    </Box>
                    
                   </Box>
                </Box>}

                {/* 2nd page */}
                {value==='map' &&  <Block2 /> && (state <= 2 ? <Block2 /> : <Block3/>)  }

                

                <Box sx={{width:{md:'95%',xs:'100vw'},height:'auto',padding:{md:' 40px 0px',xs:'35px 0px'},boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',marginTop:{md:'120px',xs:'60px'},display:'flex',justifyContent:'space-between',position:'absolute',bottom:'0%',top:'100%',right:'10px',left:'10px',}}>
                    
                    <Box sx={{display:'flex',alignItems:'center',gap:'8px',padding:'0px 20px'}}>
                       
                        <Button  onClick={() => handleChange1("upload")} variant='outlined' sx={{width:"33%",textDecoration:'underline',opacity:'0.4'}}>Back</Button>
                        
                        <Typography sx={{opacity:'0.9', width:"33%"}}>Cancel Montage</Typography>
                    </Box>
                    
                    {
                        state <= 2 &&
                    <Box sx={{display:'flex',alignItems:'center',padding:" 0px 10px",}}>
                        {
                         file !== undefined?
                        
                        <Button  onClick={() => handleChange1("map")}   variant='outlined' sx={{background:'#9BC4EA',width:"33%",textDecoration:'underline',opacity:'1.2',color:'#fff'}}>{state <=1 ? next:save}</Button>  :
                           <Typography>upload file first</Typography>
                       }
                        
                    </Box>
                   }

                </Box>

            </Box>
       </Box1>
    </>
  )
}

export default Block1;
