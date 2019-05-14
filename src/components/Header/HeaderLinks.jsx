/*eslint-disable*/
import React from 'react';
// react components for routing our app without refresh
import { Link } from '@reach/router';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Tooltip from '@material-ui/core/Tooltip';

// @material-ui/icons
import { Apps, CloudDownload } from '@material-ui/icons';

// core components
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx';
import Button from 'components/CustomButtons/Button.jsx';

import headerLinksStyle from 'assets/jss/material-kit-react/components/headerLinksStyle.jsx';

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/#features"
          color="transparent"
          className={classes.navLink}
        >
          FEATURES
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button href="/#plan" color="transparent" className={classes.navLink}>
          PLAN
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/#download"
          color="transparent"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Download
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Others"
          buttonProps={{
            className: classes.navLink,
            color: 'transparent'
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/terms" className={classes.dropdownLink}>
              Terms of Use
            </Link>,
            <Link to="/privacy" className={classes.dropdownLink}>
              Privacy Policy
            </Link>,
            <Link to="/#contact" className={classes.dropdownLink}>
              Contact
            </Link>
          ]}
        />
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
