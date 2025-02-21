import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Drawer } from "@mui/material";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Paid,
  Assessment,
  Inventory,
  Email,
  Grading,
  ChatBubble,
  ManageAccounts,
  Analytics,
  Report
} from "@mui/icons-material";

// Sidebar Data
const menuItems = [
  {
    title: "Dashboard",
    items: [
      { text: "Home", icon: <LineStyle />, link: "/" },
      { text: "Analytics", icon: <Timeline />, link: "/analytics" },
      { text: "Sales", icon: <TrendingUp />, link: "/sales" }
    ]
  },
  {
    title: "Admin Menu",
    items: [
      { text: "Users", icon: <Person />, link: "/userlist" },
      { text: "Products", icon: <Paid />, link: "/products" },
      { text: "Reports", icon: <Assessment />, link: "/reports" },
      { text: "Transactions", icon: <Inventory />, link: "/transactions" }
    ]
  },
  {
    title: "Notifications",
    items: [
      { text: "Email", icon: <Email />, link: "/email" },
      { text: "Messages", icon: <ChatBubble />, link: "/messages" },
      { text: "Manage", icon: <Grading />, link: "/manage" }
    ]
  },
  {
    title: "Staffs",
    items: [
      { text: "Manage", icon: <ManageAccounts />, link: "/staff-manage" },
      { text: "Analytics", icon: <Analytics />, link: "/staff-analytics" },
      { text: "Reports", icon: <Report />, link: "/staff-reports" }
    ]
  }
];

const drawerWidth = 240; // Sidebar width

const SideNav: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "aliceblue",
          color: "#555"
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        {menuItems.map((section, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 1 }}>
              {section.title}
            </Typography>
            <List>
              {section.items.map((item, i) => (
                <ListItem key={i} disablePadding>
                  <ListItemButton component={Link} to={item.link} sx={{ borderRadius: "5px", "&:hover": { backgroundColor: "rgba(0, 0, 255, 0.1)" } }}>
                    <ListItemIcon sx={{ color: "dodgerblue" }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default SideNav;
