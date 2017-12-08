import React  from 'react'
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

function Luminosity ({onChange, value}) {
  return (
    <div>
      <div>
        <FormControl>
          <InputLabel htmlFor="luminosity">Luminosité</InputLabel>
          <Select
            style={{width: '200px'}}
            value={value}
            onChange={onChange}
            input={<Input name="luminosity" id="luminosity" />}
          >
            <MenuItem value="">
              <em>Aucune</em>
            </MenuItem>
            <MenuItem value={1}>Plein jour</MenuItem>
            <MenuItem value={2}>Crépuscule ou aube</MenuItem>
            <MenuItem value={3}>Nuit sans éclairage public</MenuItem>
            <MenuItem value={4}>Nuit avec éclairage public non allumé</MenuItem>
            <MenuItem value={5}>Nuit avec éclairage public allumé</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Luminosity
