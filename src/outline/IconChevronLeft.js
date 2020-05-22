import React from 'react';
  import withIcon from '../withIcon';

  function IconChevronLeft(props) {
    return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/></svg>;
  }

  export default withIcon('IconChevronLeft')(IconChevronLeft);