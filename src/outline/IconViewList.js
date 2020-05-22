import React from 'react';
  import withIcon from '../withIcon';

  function IconViewList(props) {
    return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"/></svg>;
  }

  export default withIcon('IconViewList')(IconViewList);