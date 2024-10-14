import React from "react";
import Card from "./components/Card";


//basically conditional rendering means that getting some data verified and then according to some if else condition we an use the props in the component file to get the desired data  

const conditional_rendering = () => {
  const userdata = [
    {   "id":1,
      "user": "vishal pillaii",
      "enrollment id":93,
      "isloggedin":true
    },
   
  ];

  return (
    <div>
      {userdata.map((elem) => {
        console.log(elem["enrollment id"])
        return <Card idx= {elem["enrollment id"]} username={elem.user} key= {elem.id}/>;
      })}
    </div>
  );
};

export default conditional_rendering;
