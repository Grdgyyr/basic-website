import React, { useState } from "react";
import { styled, useTheme, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import {
  Box,CssBaseline,AppBar as MuiAppBar,Toolbar,Typography,IconButton,Drawer as MuiDrawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  LineStyle,Timeline,TrendingUp,Person,Paid,Assessment,Inventory,Email,Grading,
  ChatBubble,
  ManageAccounts,
  Analytics,
  Report
} from "@mui/icons-material";

// Menu Item Types
interface MenuItem {
  text: string;
  icon: React.ReactNode;
  link: string;
  isExternalLink?: boolean;
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

// Sidebar Data
const menuItems: MenuSection[] = [
  {
    title: "Dashboard",
    items: [
      { text: "Home", icon: <LineStyle />, link: "/hr"},
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

const drawerWidth: number = 240;

// Drawer Styling Functions
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

interface AppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

interface DrawerProps {
  open: boolean;
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })<DrawerProps>(
  ({ theme, open }): CSSObject => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open
      ? {
          ...openedMixin(theme),
          "& .MuiDrawer-paper": openedMixin(theme)
        }
      : {
          ...closedMixin(theme),
          "& .MuiDrawer-paper": closedMixin(theme)
        })
  })
);

const SideNav: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const handleNavigation = (item: MenuItem) => {
    if (item.isExternalLink) {
      // For external links, use window.location
      window.location.href = item.link;
    } else {
      // For internal links, use React Router
      navigate(item.link);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* Top Navbar */}
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 5, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* Menu List */}
        <List>
          {menuItems.map((section, index) => (
            <Box key={index}>
              {open && (
                <Typography variant="subtitle2" sx={{ px: 2, pt: 1, color: "gray", fontWeight: 600 }}>
                  {section.title}
                </Typography>
              )}
              {section.items.map((item, i) => (
                <ListItem key={i} disablePadding sx={{ display: "block" }}>
                  <ListItemButton 
                    onClick={() => handleNavigation(item)}
                    sx={{ minHeight: 48, justifyContent: open ? "initial" : "center", px: 2.5 }}
                  >
                    <ListItemIcon sx={{ minWidth: 0, justifyContent: "center", color: "dodgerblue", ...(open && { mr: 3 }) }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};

export default SideNav;