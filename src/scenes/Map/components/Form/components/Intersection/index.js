import React  from 'react'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'

function Intersection ({onChange, value}) {
  return (
    <div>
      <div>
        <FormControl>
          <InputLabel htmlFor="intersection">Intersection</InputLabel>
          <Select
            style={{width: '200px'}}
            value={value}
            onChange={onChange}
            input={<Input name="intersection" id="intersection" />}
          >
            <MenuItem value="">
              <em>Aucune</em>
            </MenuItem>
            <MenuItem value={1}>Hors intersection</MenuItem>
            <MenuItem value={2}>Intersection en X</MenuItem>
            <MenuItem value={3}>Intersection en T</MenuItem>
            <MenuItem value={4}>Intersection en Y</MenuItem>
            <MenuItem value={5}>Intersection à plus de 4 branches</MenuItem>
            <MenuItem value={6}>Giratoire</MenuItem>
            <MenuItem value={7}>Place</MenuItem>
            <MenuItem value={8}>Passage à niveau</MenuItem>
            <MenuItem value={9}>Autre intersection</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  )
}

export default Intersection
