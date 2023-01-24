import React, { useState } from "react"
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material"
import { AppBarComponent, SideBar } from "./components"

export const App: React.FC = (): JSX.Element => {
  const [themeMode, setThemeMode] = useState<"light" | "dark">("dark")
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false)

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontSize: 14,
    },
  })

  const handleDrawerToggle = React.useCallback(() => {
    setSideBarToggle(!sideBarToggle)
  }, [sideBarToggle])

  const onThemeChange = React.useCallback(() => {
    setThemeMode(themeMode === "dark" ? "light" : "dark")
  }, [themeMode])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBarComponent
        handleDrawerToggle={handleDrawerToggle}
        onThemeChange={onThemeChange}
        isDarkMode={themeMode === "dark"}
        isDrawerOpen={sideBarToggle}
      />
      <SideBar isOpen={sideBarToggle} handleDrawerToggle={handleDrawerToggle} />
      {/* children={<Menu></Menu>} */}
    </ThemeProvider>
  )
}

export default App
