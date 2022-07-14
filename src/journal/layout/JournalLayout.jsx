import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar";

export const JournalLayout = ({children}) => {

    const drawerWidth = 240;

  return (
    <Box sx={{display: 'flex'}}>
        <NavBar drawerWidth={drawerWidth}/>
        {/*Sidebar */}

        <Box component='main' sx={{flexGrow: '1', p:3}}>
        {/*ToolBar */}
        {children}
        </Box>
    </Box>
  )
}
