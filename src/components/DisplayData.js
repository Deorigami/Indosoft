import React from "react";
import styled from "styled-components";

export default function DisplayData({ users, fullData, setUsers }) {
  const handleDelete = (e) => {
    let x = users;

    x.splice(
      e.target.value,
      1,
      fullData[Math.round(Math.random() * fullData.length)]
    );

    setUsers([...users], x);
  };

  const handleRefresh = (e) => {
    let x = [];
    for (let i = 0; i < 5; i++) {
      x.push(fullData[Math.round(Math.random() * fullData.length)]);
    }

    setUsers(x);
  };

  return (
    <Container>
      <div className="header">
        <h1>Who to Follow</h1>
        <button onClick={handleRefresh}>Refresh</button>
      </div>

      <div className="recom">
        {users &&
          users.map((user, i) => (
            <div className="user" key={i}>
              <img src={user.avatar_url} alt="" />
              <h1 className="userName">{user.login}</h1>
              <h1 className="userUrl">{user.url}</h1>
              <button value={i} onClick={handleDelete}>
                x
              </button>
            </div>
          ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  .header {
    display: flex;

    h1 {
      font-size: 26px;
      color: #606060;
      font-weight: 300;
    }

    button {
      margin-left: 10px;
      font-size: 18px;
      color: white;
      background: #1b477d;
      border: none;
      width: 100px;
      border-radius: 5px;
      outline: none;
    }
  }

  .recom {
    display: flex;
    flex-direction: column;

    .user {
      display: flex;
      margin-bottom: 15px;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        margin-right: 20px;
      }

      .userName {
        color: black;
        font-size: 16px;

        :hover {
          border-bottom: 1px solid;
        }
      }

      .userUrl {
        margin-left: 15px;
        font-size: 16px;
        color: #606060;
      }

      button {
        margin-left: 15px;
        height: 25px;
        width: 25px;
        border-radius: 100%;
        border: none;
        background-color: #1b477d;
        color: white;
        font-size: 18px;
        font-weight: bold;
        outline: none;

        :active {
          opacity: 0.9;
        }
      }
    }
  }
`;
