import { Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";

export const SearchBar = ({searchHandler,input,setInput}) => {
  
    return (
        <Stack direction="row" spacing={2} >
            <TextField fullWidth value={input} id="outlined-basic" label="Search by task Name..." variant="outlined" margin="normal" onChange={(e)=>{setInput(e.target.value)}}/>
            <Button variant="text" color="primary" size="small" onClick={()=>searchHandler(input)}>Search</Button>
        </Stack>
    )
}
export default SearchBar;