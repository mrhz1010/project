import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InsertChartOutlinedOutlinedIcon from "@mui/icons-material/InsertChartOutlinedOutlined";
import ReceiptIcon from "@mui/icons-material/Receipt";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TextsmsIcon from "@mui/icons-material/Textsms";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import SettingsIcon from "@mui/icons-material/Settings";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "boxicons";
import "../Navigation/style.css";

export default function Navigation() {
  const [width, setWidth] = useState(false);
  const handleHoverEnter = () => {
    setWidth(true);
  };

  const handleHoverLeave = () => {
    setWidth(false);
  };
  return (
    <>
      <Box
        className="container"
        onMouseEnter={handleHoverEnter}
        onMouseLeave={handleHoverLeave}
        paddingTop={2}
        overflow={"hidden"}
        borderRadius={2}
        width={width ? 250 : 80}
        height={width ? 740 : 670}
        m={width ? 0 : 4}
        bgcolor="#ffff"
      >
        <Box
          gap={1}
          flexDirection={"column"}
          display={"flex"}
          textAlign={"center"}
          width={"100%"}
          height={80}
        >
          <Box width={"100%"} display={"flex"} justifyContent={"center"}>
            <box-icon
              color="#605bff"
              size="lg"
              type="solid"
              name="pie-chart-alt-2"
            ></box-icon>
          </Box>
          <Typography fontSize={"18px"} variant="h1">
            Base
          </Typography>
        </Box>
        <List>
          {/* Dashboard-------------- */}
          <ListItem className="Dashboard-hover">
            <ListItemIcon>
              <DashboardIcon className="Dashboard" />
            </ListItemIcon>
            <Link to={"/"}>
            <ListItemText className="Dashboard" primary="Dashboard" />
            </Link>
          </ListItem>
          {/* Dashboard-------------- */}

          {/* Analytics-------------- */}
          <ListItem className="Analytics-hover">
            
            <ListItemIcon>
              <InsertChartOutlinedOutlinedIcon className="Analytics" />
            </ListItemIcon>
            <Link to={"/products"}>
            <ListItemText sx={{marginLeft:"2px"}} className="Analytics" primary="Analytics" />
            </Link>
          </ListItem>
          {/* Analytics-------------- */}

          {/* Invoice-------------- */}
          <ListItem className="Invoice-hover">
            <ListItemIcon>
              <ReceiptIcon className="Invoice" />
            </ListItemIcon>
            <ListItemText className="Invoice" primary="Invoice" />
          </ListItem>
          {/* Invoice-------------- */}

          {/* Schedule-------------- */}
          <ListItem className="Schedule-hover">
            <ListItemIcon>
              <TextSnippetIcon className="Schedule" />
            </ListItemIcon>
            <ListItemText className="Schedule" primary="Schedule" />
          </ListItem>
          {/* Schedule-------------- */}

          {/* Calendar-------------- */}
          <ListItem className="Calendar-hover">
            <ListItemIcon>
              <CalendarMonthIcon className="Calendar" />
            </ListItemIcon>
            <ListItemText className="Calendar" primary="Calendar" />
          </ListItem>
          {/* Calendar-------------- */}

          {/* Messages-------------- */}
          <ListItem className="Messages-hover">
            <ListItemIcon>
              <TextsmsIcon className="Messages" />
            </ListItemIcon>
            <ListItemText className="Messages" primary="Messages" />
          </ListItem>
          {/* Messages-------------- */}

          {/* Notification-------------- */}
          <ListItem className="Notification-hover">
            <ListItemIcon>
              <NotificationsActiveIcon className="Notification" />
            </ListItemIcon>
            <ListItemText className="Notification" primary="Notification" />
          </ListItem>
          {/* Notification-------------- */}

          {/* Settings-------------- */}
          <ListItem className="Settings-hover">
            <ListItemIcon>
              <SettingsIcon className="Settings" />
            </ListItemIcon>
            <ListItemText className="Settings" primary="Settings" />
          </ListItem>
          {/* Settings-------------- */}
        </List>
        <Stack alignItems={"start"} marginTop={5} display={"flex"}>
          <List className="ul-list">
            <ListItem className="li-list">
              <Avatar src="assets/4128183.png" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </Stack>
      </Box>
    </>
  );
}
