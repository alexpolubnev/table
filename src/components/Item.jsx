import React from 'react';

function Content({elem}) {
  let {name, sites, type, status} = elem;

  if ( sites === 1 ){
    sites += ' site'
  }else if ( sites > 1 ){
    sites += ' sites'
  }

  if ( type === "dmp_crm"){
    type = 'DMP / CRM'
  }else {
    type = type.split('')
    type[0] = type[0].toUpperCase()
    type = type.join('').split('_').join(' ')
  }



  return (
    <>
      <hr className="item__hr"/>
      <div className="item">
        <div className="item__title">{name}</div>
        <div className="item__sites">{sites}</div>
        <div className="item__type">{type}</div>
        { status === "blocked" 
            ? <div className="item__status"><img src="./lock.png"/></div>
            : status === "enable"
            ?  <div className="item__status enable"><span>ON</span></div>
            :  <div className="item__status disable"><span>OFF</span></div>
        }
      </div>
    </>
  );
}

export default Content;
