import { CheckBox } from '@mui/icons-material'
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Switch, TextField } from '@mui/material'
import React from 'react'

const M_Input = () => {
    return <>
        <TextField label="enter name" placeholder='standard' variant='standard' />
        <TextField label="enter name" placeholder='outlined' variant='outlined' />
        <TextField label="enter name" placeholder='filled' variant='filled' />
        <hr />
        <TextField color='primary' label="enter name" placeholder='outlined' variant='outlined' />
        <TextField color='secondary' label="enter name" placeholder='outlined' variant='outlined' />
        <hr />
        <TextField error label="enter name" placeholder='outlined' variant='outlined' />

        {/* select */}
        <FormControl fullWidth>
            <InputLabel>Choose City</InputLabel>
            <Select>
                <MenuItem>Delhi</MenuItem>
                <MenuItem>pune</MenuItem>
                <MenuItem>mumbai</MenuItem>
            </Select>
        </FormControl>

        <hr />

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
        </FormControl>

        <hr />
        <FormGroup>
            <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
            <FormControlLabel required control={<Checkbox />} label="Required" />
        </FormGroup>
        <hr />
        <FormGroup>
            <FormControlLabel control={<Switch defaultChecked />} label="Label" />
            <FormControlLabel required control={<Switch />} label="Required" />
            <FormControlLabel disabled control={<Switch />} label="Disabled" />
        </FormGroup>

    </>
}

export default M_Input