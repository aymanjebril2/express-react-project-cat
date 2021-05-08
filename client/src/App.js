import React, { useState } from "react";
import "./App.css";
import GetAllCat from "./components/GetAllCat";
import Header from "./components/Header";
import CreateCat from "./components/CreateCat";
import EditCat from "./components/EditCat";

function App() {
  const [cat, setCat] = useState({
    name: "",
    chonkyness: "",
    imagelink: "",
    biography: "",
  });
  const [updating, setUpdating] = useState(false);

  const [createNewCat, setCreateNewCat] = useState(false);
  const [deletCat, setDeletCat] = useState(false);

  return (
    <div className="App">
      <Header />
      {cat && (
          <EditCat cat={cat} setCat={setCat} setUpdating={setUpdating} />
        ) && <CreateCat setCreateNewCat={setCreateNewCat} />}

      <GetAllCat
        updating={updating}
        setCat={setCat}
        createNewCat={createNewCat}
        setDeletCat={setDeletCat}
        deletCat={deletCat}
      />
    </div>
  );
}

export default App;
