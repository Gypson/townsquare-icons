import React from 'react';
  import withIcon from '../withIcon';

  function IconFlag(props) {
    return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"/></svg>;
  }

  export default withIcon('IconFlag')(IconFlag);