import React, { useEffect, useState } from "react";
import DisplayData from "./DisplayData";

function GetData() {
  const [users, setUsers] = useState([]);
  const [fullUsers, setFullUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch(`https://api.github.com/users`)
        .then((res) => {
          if (res.ok) {
            return res.json();
          } else throw Error(res.statusText);
        })
        .then((data) => {
          let dummy = [];
          for (let i = 0; i < 5; i++) {
            let random = Math.round(Math.random() * data.length);

            dummy.push(data[random]);

            if (dummy.some((val, i) => dummy.indexOf(val) !== i)) {
              data.splice(random, 1);

              dummy.pop();

              dummy.push(data[Math.round(Math.random() * data.length)]);
              console.log("filtered");
            }
          }
          setUsers(dummy);
          setFullUsers((prev) => (prev = data));
        })
        .catch((err) => console.log(err));
    }

    fetchData();
  }, [setUsers]);

  return (
    <div>
      <DisplayData users={users} fullData={fullUsers} setUsers={setUsers} />
    </div>
  );
}

export default GetData;
