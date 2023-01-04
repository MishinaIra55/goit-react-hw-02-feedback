import React from 'react';
import styles from './Section.module.css';

const Section = (props) => (

  <div>
    <title className={styles.title}>{props.title}</title>
    {props.children}
  </div>

);
 export default Section;
