import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";

export const SearchBar = ({searchHandler,input,setInput}) => {
  
    return (
        <Stack direction="row" spacing={2} margin={10}>
            <TextField  value={input} id="outlined-basic" label="Search by task Name..." variant="standard" fullWidth  onChange={(e)=>{setInput(e.target.value)}}/>
            <Button variant="text" color="primary" size="small" onClick={()=>searchHandler(input)}>Search</Button>
        </Stack>
    )
}
export default SearchBar;