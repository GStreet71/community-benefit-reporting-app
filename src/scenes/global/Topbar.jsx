import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, {bindTrigger, bindMenu} from "material-ui-popup-state";
import { useAuth } from "../../components/AuthContext";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { logout } = useAuth();

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <LightModeOutlinedIcon />
          )}
        </IconButton>
        
        {/* Notifications popup <menu> */}
        <PopupState variant="popover" pop upId="settings-popup-menu">
          {(popupState) => (
            <>
        <IconButton {...bindTrigger(popupState)}>
          <NotificationsOutlinedIcon />
        </IconButton>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>No New Notifications</MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
        
        {/* Settings popup meu */}
        <PopupState variant="popover" pop upId="settings-popup-menu">
          {(popupState) => (
            <>
              <IconButton {...bindTrigger(popupState)}>
                <SettingsOutlinedIcon />
              </IconButton>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>User Settings</MenuItem>
                <MenuItem onClick={popupState.close}>Account Settings</MenuItem>
                <MenuItem onClick={popupState.close}>Permissions</MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
        
        {/* User popup menu */}
        <PopupState variant="popover" pop upId="user-popup-menu">
          {(popupState) => (
            <>
              <IconButton {...bindTrigger(popupState)}>
                <PersonOutlinedIcon />
              </IconButton>
              <Menu {...bindMenu(popupState)}>
                <MenuItem onClick={popupState.close}>Profile</MenuItem>
                <MenuItem onClick={popupState.close}>Account</MenuItem>
                {/* logout onClick */}
                <MenuItem 
                  onClick={() => {
                    logout();
                    popupState.close();
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </PopupState>
      </Box>
    </Box>
  );
};

export default Topbar;
