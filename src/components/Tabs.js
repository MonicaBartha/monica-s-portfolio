import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
  },
  tabs: {
    width: '40%',
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const pStyle = {
    fontSize: '12px'
  }
  return (
    <div className="mainDiv">
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Front-end dev" {...a11yProps(0)} />
          <Tab label="Freelancer dev" {...a11yProps(1)} />
          <Tab label="Web dev" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <strong><h3>Front-end dev</h3></strong>
          <p className="customP" style={pStyle}>Oct 2019 - Present</p>
          <p>Developing the projects from Laboratoria's Bootcamp using React.JS, Vanilla Javascript, HTML5, CSS3, Firebase, 
            Git&GitHub and testing tools. </p>
          <p>Using agile methodology, modern tools like React, writing maintainable code</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
        <strong><h3>Freelancer web developer</h3></strong>
          <p className="customP" style={pStyle}>Feb 2018 - Oct 2019 (Chile)</p>
          <p>Design and develop WordPress websites using Avada Theme and third-party plugins by layout design previously 
            created in Photoshop. </p>
          <p>Check out some works on <a href="https://www.behance.net/monica_bartha"><span className="customP">Behance </span></a></p>
        </TabPanel>
        <TabPanel value={value} index={2}>
        <strong><h3>Web developer at Visual Edge digital agency</h3></strong>
          <p className="customP" style={pStyle}>June 2016 - Feb 2018 (Romania)</p>
          <p>Develop WordPress websites by layout design, e-commerce websites, implement of Search Engine Optimization, 
            maintenance, updates, backups and fresh content.</p>
        </TabPanel>
      </div>
    </div>
  );
}