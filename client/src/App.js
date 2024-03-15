import Rightbar from "./components/Rightbar";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed"
import { Box, Container, Stack } from "@mui/material";
import Divider from "@mui/material";
import Navbar from "./components/Navbar";


function App() {

  
  return (
    <Box>
      <Navbar/>
      <Stack direction="row" spacing={2} justifyContent="space-between" >
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      </Stack>
     
    </Box>
  );
}

export default App;
