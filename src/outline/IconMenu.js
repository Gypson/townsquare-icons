import React from 'react';
  import withIcon from '../withIcon';

  function IconMenu(props) {
    return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>;
  }

  export default withIcon('IconMenu')(IconMenu);