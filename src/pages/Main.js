import { AppBar, Avatar, Box, Button, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Main = () => {
    const navigate = useNavigate()
    const [anchorElUser, setAnchorElUser] = useState(null);
    const logout = (e) => {
        e.preventDefault();
        navigate('/');
    }

    const userName = JSON.parse(localStorage.getItem("user")).role
    console.log('xyz', userName.role)
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                            DashBoard
                        </Typography>
                        <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
                            <Typography variant="h7" component="div" sx={{ flexGrow: 1, marginRight: '0.5rem' }}>
                                {userName.role}
                            </Typography>
                            <Tooltip title="profile">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={userName.role} src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >

                                <MenuItem key="profile" onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">Profile</Typography>
                                </MenuItem>

                            </Menu>
                        </Box>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </Toolbar>
                </AppBar>
            </Box>
            <Dashboard />
        </div>
    );
}
export default Main;
