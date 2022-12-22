import axios from 'axios';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState([]);
  const btn = () => {
    axios
      .post('http://localhost/php/api.php', {
        name,
        email,
        password,
      })
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    axios
      .get('http://localhost/php/api.php')
      .then(function (response) {
        console.log(response.data);
        setData(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div className="App">
      <form action="" method="post">
        <table>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                value={name}
                onChange={e => {
                  setName(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input
                type="text"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input
                type="text"
                value={password}
                onChange={e => {
                  setPassword(e.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="button" value="submit" onClick={btn} />
            </td>
          </tr>
        </table>
      </form>
      <table border="">
        {data.map(i => {
          return (
            <>
              <tr>
                <td>{i.id}</td>
                <td>{i.name}</td>
                <td>{i.email}</td>
                <td>{i.password}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default App;
