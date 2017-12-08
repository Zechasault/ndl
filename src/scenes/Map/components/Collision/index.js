import React  from 'react'
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

function Collision ({onChange, value}) {
  return (
    <div>
      <div>
        <FormControl>
          <InputLabel htmlFor="collision">Collision</InputLabel>
          <Select
            style={{width: '200px'}}
            value={value}
            onChange={onChange}
            input={<Input name="collision" id="collision" />}
          >
            <MenuItem value="">
              <em>Aucune</em>
            </MenuItem>
            <MenuItem value={1}>Deux véhicules (frontale)</MenuItem>
            <MenuItem value={2}>Deux véhicules (par l’arrière)</MenuItem>
            <MenuItem value={3}>Deux véhicules (par le coté)</MenuItem>
            <MenuItem value={4}>Trois véhicules et plus (en chaîne)</MenuItem>
            <MenuItem value={5}>Trois véhicules et plus (collisions multiples)</MenuItem>
            <MenuItem value={6}>Autre collision</MenuItem>
            <MenuItem value={7}>Sans collision</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Collision
