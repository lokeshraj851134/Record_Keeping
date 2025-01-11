import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

function App() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [data, setData] = useState([]);

  function addData() {
    setData([...data, { name, email }]);
    setname("");
    setemail("");

  };

  function removeItem(index) {
    let arr=data;
    arr.splice(index,1)
    setData([...arr]);
  };

  return (
    <div className="App">
      <Header />

      {/*...........form...............*/}
      <div className="form">
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={(event) => setname(event.target.value)}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setemail(event.target.value)}
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <Button variant="contained" color="success" onClick={addData}>
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/*...........Data...............*/}
      <div className="data">
        <div className="val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => {
          return (
            <div key={index} className="val">
              <h4>{element.name}</h4>
              <h4>{element.email}</h4>
              <Stack>
                <Button onClick={()=>removeItem(index)} variant="contained" color="error">
                  <DeleteIcon />
                </Button>
              </Stack>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

//4:42:12 stop

