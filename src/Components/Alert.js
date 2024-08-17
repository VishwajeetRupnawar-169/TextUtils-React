import React from 'react'

export default function Alert(props) {

  const capitalize = (word) => {
    const lower = word.toLowerCase();                                       
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
      props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">       {/*props.alert &&  is used b'coz we got error*/}
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}                                        {/*and it is widely used which implies that*/}
                                                                                                      {/*we'll consider the remaining part of props */}
      </div>                                                                                          //only when 1st props.alert is true.
                                                                                                      //and nothing is returned when it is null as
  )                                                                                                   // defined in App.js
}
