import { TextField } from "@mui/material"
export const ControlTextField = (props) => {


    return (
        <>
            <TextField
                label={props.label}
                id={props.id}
                margin="normal"
                size={props.size}
                onChange={props.onChange}
                disabled={props.disabled}
                error={props.error}
                helperText={props.helperText}
                autoComplete="new-password"
            />
        </>
    )
}

export const ControlSelect =(props)=>{

    return(
        <>
        </>
    )
}