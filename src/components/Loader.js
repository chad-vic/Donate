import { css } from '@emotion/react';
import React, { useState } from 'react'
import { FadeLoader } from 'react-spinners'

function Loader() {
    let [color, setColor] = useState("#ffffff");
    const override = css`
       z-index:999;
`;
  return (
    <div className='loader'>
        <FadeLoader color={color} css={override} size={200}/>
    </div>
  )
}

export default Loader