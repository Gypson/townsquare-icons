import React from 'react';
  import withIcon from '../withIcon';

  function IconPlus(props) {
    return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>;
  }

  export default withIcon('IconPlus')(IconPlus);