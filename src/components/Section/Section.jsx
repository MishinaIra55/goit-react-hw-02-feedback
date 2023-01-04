import React from 'react';


const Section = (props) => (

  <div>
    <title>{props.title}</title>
    {props.children}
  </div>

);
 export default Section;
