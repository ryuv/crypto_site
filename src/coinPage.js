import React from 'react';
import axios from "axios";

function coinPage({ match }) {

  const address = `https://api.coincap.io/v2/assets/${match.params.coin}`

  axios.get("https://api.coincap.io/v2/assets").then((res) => {
    const coins = res.data.data
  })


  const ok = "a";
  axios.get(address).then((res) => {
    console.log(res.data.data)
  })



  return (
    <div>
      {ok}
    </div>
  );
}

export default coinPage;