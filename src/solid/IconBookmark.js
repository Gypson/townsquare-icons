import React from 'react';
  import withIcon from '../withIcon';

  function IconBookmark(props) {
    return <svg viewBox="0 0 20 20" fill="currentColor" {...props}><path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"/></svg>;
  }

  export default withIcon('IconBookmark')(IconBookmark);