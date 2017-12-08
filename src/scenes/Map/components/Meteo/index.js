import React  from 'react'
import Input, { InputLabel } from 'material-ui/Input';
import { MenuItem } from 'material-ui/Menu';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';

function Meteo ({onChange, value}) {
  return (
    <div>
      <div>
        <FormControl>
          <InputLabel htmlFor="meteo">Météo</InputLabel>
          <Select
            style={{width: '200px'}}
            value={value}
            onChange={onChange}
            input={<Input name="meteo" id="meteo" />}
          >
            <MenuItem value="">
              <em>Aucune</em>
            </MenuItem>
            <MenuItem value={1}>Normale</MenuItem>
            <MenuItem value={2}>Pluie légère</MenuItem>
            <MenuItem value={3}>Pluie forte</MenuItem>
            <MenuItem value={4}>Neige - grêle</MenuItem>
            <MenuItem value={5}>Brouillard - fumée</MenuItem>
            <MenuItem value={6}>Vent fort - tempête</MenuItem>
            <MenuItem value={7}>Temps éblouissant</MenuItem>
            <MenuItem value={8}>Temps couvert</MenuItem>
            <MenuItem value={9}>Autre</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Meteo
