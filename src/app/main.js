import React from 'react';

import {observer} from 'mobx-react';

const Main = observer(({twitterStore}) => {
  return (
    <div>
      <h1>Currently streaming TWITTER :</h1>
      <br/>
      <h2>" #missoulian #mtpol #ITMFA " :</h2>
      <p>« {twitterStore.getTweet.text} »</p>
      <h2>supposed to stream twitter " #trump " :</h2>
      <p>« {twitterStore.getTweet.text} »</p>
    </div>
  )
});

export default Main;
