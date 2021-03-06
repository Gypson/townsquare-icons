import React from 'react';
  import withIcon from '../withIcon';

  function IconSortDescending(props) {
    return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"/></svg>;
  }

  export default withIcon('IconSortDescending')(IconSortDescending);