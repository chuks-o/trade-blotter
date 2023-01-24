import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Switch as ThemeSwitch,
} from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import LightModeIcon from "@mui/icons-material/LightMode"
import DarkModeIcon from "@mui/icons-material/DarkMode"

interface AppBarComponentProps {
  handleDrawerToggle: () => void
  onThemeChange: () => void
  isDarkMode: boolean
  isDrawerOpen: boolean
}

export const AppBarComponent: React.FC<AppBarComponentProps> = ({
  handleDrawerToggle,
  onThemeChange,
  isDarkMode,
  isDrawerOpen,
}): JSX.Element => {
  return (
    <div>
      <AppBar position="static" variant="elevation" className="appbar-wrapper">
        <Toolbar variant="dense">
          <IconButton
            color="inherit"
            onClick={handleDrawerToggle}
            edge="start"
            sx={{
              mr: 2,
              ...(isDrawerOpen && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="subtitle2" component="div" sx={{ flexGrow: 1 }}>
            Trade Blotter App
          </Typography>
          {isDarkMode ? <DarkModeIcon /> : null}
          <ThemeSwitch size="small" onChange={onThemeChange} />
          {!isDarkMode ? <LightModeIcon /> : null}
        </Toolbar>
      </AppBar>
    </div>
  )
}
