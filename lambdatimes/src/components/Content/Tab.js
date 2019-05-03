import React from 'react';
import PropTypes from 'prop-types';

const Tab = props => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop, 
      if they match, the className should be: 'tab active-tab', 
      if it is not it should just be 'tab'*/
      console.log('Tab props');
      console.log(props);
      // console.log(props.tab);
      let tab = props.tab;
  if (props.tab === props.selectedTab) {
    return (
        <div
        className={'tab active-tab'}
        name={props.tab}
        onClick={tab => {
          props.selectTabHandler(props.tab);
        }}
      >
        {props.tab.toUpperCase()}
      </div>
      );
    }
  else {
    return (
      <div
        className={'tab'}
        name={props.tab}
        onClick={tab => {
          props.selectTabHandler(props.tab);
        }}
      >
        {props.tab.toUpperCase()}
      </div>
    );
  }
}

Tab.propTypes = {
  tab: PropTypes.string,
  selectTabHandler: PropTypes.func,
  selectedTab: PropTypes.string
  };

// Make sure you include PropTypes on your props.

export default Tab;
