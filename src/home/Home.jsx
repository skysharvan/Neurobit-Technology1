
import React from 'react'
import Block1 from  '../contents/Block1'


const Home = () => {
  return (
    <div>
      {/* <Box1>

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
                              <Box sx={{display:'flex',gap:'10px',padding:'20px',background:'#02354F',width:{xl:'84.5%',lg:'84.5%',md:'83%',sm:'81.5%',xs:'76%'}}}>
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
         <Box sx={{width:'100%',display:'flex',flexDirection:'column',justifyContent:'',alignItems:'flex-end',}}>
            <Box sx={{width:'79%',height:'130px',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px',marginRight:'82px'}}>
                          <h2>Test_Study</h2>
                          <Box sx={{display:'flex',alignItems:'center',gap:'7px',padding:'10px'}}>
                              <PersonIcon sx={{color:'#fff',background:'blue',borderRadius:'50%',}}/>
                              <h4 style={{opacity:'0.4'}}>Ankit Bansal</h4>
                              <ArrowDropDownIcon/>
                          </Box>
            </Box>

            <Box sx={{width:'79%',height:'137px',display:'flex',alignItems:'center',marginTop:'',boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',marginRight:'82px'}}>
                      <Box sx={{width:'100%'}}>
                          <Stepper activeStep={1} alternativeLabel>
                              {steps.map((label) => (
                                <Step key={label}>
                                  <StepLabel>{label}</StepLabel>
                              </Step>
                              ))}
                          </Stepper>
                      </Box>
            </Box>
         </Box>
      </Box1> */}
     <Block1 />
     {/* {value==='map' &&  <Block2/> } */}
    </div>
  )
}

export default Home ;
