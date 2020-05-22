import React from 'react';
  import withIcon from '../withIcon';

  function IconChevronRight(props) {
    return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>;
  }

  export default withIcon('IconChevronRight')(IconChevronRight);