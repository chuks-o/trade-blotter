import React from "react"
import { Drawer, IconButton, Typography } from "@mui/material"
import { styled, useTheme } from "@mui/material/styles"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

interface SidebarProps {
  isOpen: boolean
  handleDrawerToggle: () => void
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

const LogoStyled = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}))

const DRAWER_WIDTH = 240

export const SideBar: React.FC<SidebarProps> = ({
  isOpen,
  handleDrawerToggle,
}) => {
  const theme = useTheme()
  return (
    <>
      <Drawer
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          "& .MUIDrawer-paper": {
            width: DRAWER_WIDTH,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={isOpen}
      >
        <DrawerHeader>
          <LogoStyled>
            <Typography variant="subtitle2" component="div" align="left">
              Logo
            </Typography>
            <IconButton onClick={handleDrawerToggle}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </LogoStyled>
        </DrawerHeader>
      </Drawer>
    </>
  )
}
