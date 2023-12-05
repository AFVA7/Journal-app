import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

export const SideBar = ({ drawerWidth = 240 }) => {
    return (
        <Box
            component='nav'
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        >
            <Drawer
                variant="permanent" // permanent: always open, temporary: only open when click on menu icon, persistent: open when click on menu icon and when click outside the drawer, close when click on menu icon again
                open
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>Andrés Valencia</Typography>
                </Toolbar>
                <Divider />

                <List>
                    {
                        ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot />
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Esto es un texto cualquiera'} />
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>

        </Box>
    )
}
