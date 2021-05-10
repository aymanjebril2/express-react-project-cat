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
  const [afterUpdate, setAfterUpdate] = useState(false);

  return (
    <div className="App">
      <Header />
      {updating ? (
        <EditCat
          cat={cat}
          setCat={setCat}
          setUpdating={setUpdating}
          setAfterUpdate={setAfterUpdate}
        />
      ) : (
        <CreateCat setCreateNewCat={setCreateNewCat} />
      )}

      <GetAllCat
        updating={updating}
        setCat={setCat}
        createNewCat={createNewCat}
        setDeletCat={setDeletCat}
        deletCat={deletCat}
        setUpdating={setUpdating}
        afterUpdate={afterUpdate}
      />
    </div>
  );
}

export default App;
