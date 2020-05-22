import React from 'react';
  import withIcon from '../withIcon';

  function IconLightningBolt(props) {
    return <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>;
  }

  export default withIcon('IconLightningBolt')(IconLightningBolt);