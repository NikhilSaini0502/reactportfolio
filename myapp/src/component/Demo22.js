import React from 'react'
let m = [{name:'nikhil',age:'21'},
         {name:'nikki',age:'20'},
         {name:'nikku',age:'18'}
];
export default function Demo22() {
  return (
    <div>
      {m.map((obj) => {
        return(
          <p>{obj.name},
          {obj.age}</p>
        )
      }
      )}
    </div>
  )
}
