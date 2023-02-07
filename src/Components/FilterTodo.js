import { Button, FormControl, InputLabel, List, MenuItem, Select } from "@mui/material";

const FilterTodo = ({ filter, setFilter }) => {


    return (
        <List>
            <FormControl sx={{ m: 3, minWidth: 200}} variant="standard">
                <InputLabel id="demo-simple-select-standard-label">Todo Type</InputLabel>
                <Select labelId="demo-simple-select-standard-label"  id="demo-simple-select-standard" label="Todo Type" onChange={(e) => setFilter(e.target.value)} value={filter}>
                    <MenuItem value={'all'}>All Todos</MenuItem>
                    <MenuItem value={'false'}>Incompleted</MenuItem>
                    <MenuItem value={'true'}>Completed</MenuItem>
                </Select>
            </FormControl>
        </List>
    )
}
export default FilterTodo;