import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
const Search = () => {

  const { query } = useSelector((state) => state.searchMov)
  return (
    <Box sx={{textAlign:"center", mt:7}}>

      {query && query.map((item, i) => {

        return (<h1 key={i}>{item.title}</h1>)

      })}


    </Box>
  )

}

export default Search;
