import { Box, Button } from "@mui/material";
import { ControlTextField } from "../../Controls/Controls";
import { useState } from "react";
export const RegsisterPatient = () => {
    const [firstname, setFirstName] = useState(null);

    return (
        <>
            <div className="home">
                <Box sx={{ justifyContent: 'center' , border:'1px solid lightgray', margin:'10px'}}>
                <div style={{ display: 'flex', flexDirection: 'row',margin:'5px' }}>
                        <ControlTextField label={"Medical Id"} id={'medicalId'} size={'small'} />&nbsp;&nbsp;
                        <ControlTextField label={"Patient Id"} id={'patientId'} size={'small'} />&nbsp;&nbsp;
                        
                        <ControlTextField label={"Mobile Number"} id={'mobilenumber'} size={'small'} />&nbsp;&nbsp;

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row',margin:'5px'  }}>
                        <ControlTextField label={"Firstname"} id={'firstname'} size={'small'} />&nbsp;&nbsp;
                        <ControlTextField label={"Lastname"} id={'lastname'} size={'small'} />&nbsp;&nbsp;
                        
                        <ControlTextField label={"Address"} id={'address'} size={'small'} />&nbsp;&nbsp;

                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row',margin:'5px'  }}>
                        <ControlTextField label={"Email"} id={'email'} size={'small'} />&nbsp;&nbsp;
                        <ControlTextField label={"Gender"} id={'gender'} size={'small'} />&nbsp;&nbsp;
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row',margin:'5px'  }}>
                        <ControlTextField label={"Matrial Status"} id={'matrialStatus'} size={'small'} />&nbsp;&nbsp;
                        <ControlTextField label={"Alternate Mobile"} id={'Alternate Mobile'} size={'small'} />&nbsp;&nbsp;
                        <ControlTextField label={"Ref source"} id={'refsource'} size={'small'} />&nbsp;&nbsp;
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row-reverse',margin:'5px'}}>
                   
                        <Button variant="outlined">Submit</Button>&nbsp;&nbsp;
                        <Button variant="outlined">Reset</Button>
                    </div>
                   
                </Box>

            </div>
        </>
    )
}