import React  from 'react'
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

function Agglomeration ({onChange, value}) {
  return (
    <div>
      <div>
        <FormControl>
          <InputLabel htmlFor="agglomeration">Agglomération</InputLabel>
          <Select
            style={{width: '200px'}}
            value={value}
            onChange={onChange}
            input={<Input name="agglomeration" id="agglomeration" />}
          >
            <MenuItem value="">
              <em>Aucune</em>
            </MenuItem>
            <MenuItem value={1}>Hors agglomération</MenuItem>
            <MenuItem value={2}>En agglomération</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Agglomeration
