import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import LayersIcon from '@material-ui/icons/Layers';
import Divider from '@material-ui/core/Divider';
import AssignmentIcon from '@material-ui/icons/Assignment';
import {connect} from "react-redux"
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export const MainListItems =({setpage})=> (
  <div>
    <ListItem button onClick={()=>setpage("myaccounts")}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Account Details" />
    </ListItem>
    <ListItem button onClick={()=>setpage("tr")}>
      <ListItemIcon>
        <SwapHorizIcon />
      </ListItemIcon>
      <ListItemText primary="Transfer" />
    </ListItem>
    <ListItem button  onClick={()=>setpage("settings")}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Account Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Supports" />
    </ListItem>

    <Divider />
    <ListItem button style={{marginTop:20}}>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Log Out" />
    </ListItem>
  </div>
);

