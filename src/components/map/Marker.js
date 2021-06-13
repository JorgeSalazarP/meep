import React from 'react';
import T from 'prop-types';

const Marker = ({children}) =><div> {children} </div> ;


Marker.propTypes = {
    children: T.node,
   
};
  
Marker.defaultProps = {
    children: null,

};
  
export default Marker;