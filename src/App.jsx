import React, { useState } from "react";
import Chirp from "./components/chirp";
import { AiOutlineUser } from "react-icons/ai";
import { FiMessageCircle } from "react-icons/fi";

const App = () => {
  const [username, setUsername] = useState(" ");
  const [chirp, setChirp] = useState(" ");
  const handleUsernameInput = (e) => {
    setUsername(e.target.value);
  };
  const handleChirpInput = (e) => {
    setChirp(e.target.value);
  };

  const [chirpArray, addToChirps] = useState([
    <Chirp
      newUsername="hAnNaH"
      newChirp="I would really like a banana but the monkey stole all of them to make banana splits. #nosundaeonmysunday"
    />,
    <Chirp newUsername="spaghettiO's" newChirp="uh-oh." />,
    <Chirp
      newUsername="KellyKapoor"
      newChirp="I TALK A LOT SO I'VE LEARNED TO JUST TUNE MYSELF OUT"
    />,
  ]);

  const handleNewChirp = () => {
    const newestChrip = <Chirp newUsername={username} newChirp={chirp} />;
    addToChirps(chirpArray.concat(newestChrip));
  };

  return (
    <div className="container">
      <div className="mt-5 mb-5 text-info">
        <h1>Chirper</h1>
      </div>
      <div className="row justify-content-between">
        <div className="col-4 p-5 bg-light h-25">
          <div className="mb-3">
            <div className="input-group">
              <div class="input-group-prepend">
                <span className="input-group-text h-100" id="basic-addon1">
                  <AiOutlineUser />
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="usernameFormInput"
                placeholder="Username"
                onChange={handleUsernameInput}
              />
            </div>
          </div>
          <div className="mb-3">
          <div className="input-group">
              <div class="input-group-prepend">
                <span className="input-group-text h-100" id="basic-addon1">
                  <FiMessageCircle />
                </span>
              </div>
              <textarea
                className="form-control"
                id="chirp"
                cols="30"
                rows="5"
                placeholder="What's on your mind..."
                onChange={handleChirpInput}
              ></textarea>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-info"
            onClick={handleNewChirp}
          >
            Chirp It!
          </button>
        </div>
        <div className="col-7 p-3 bg-info">
          <div>{chirpArray}</div>
        </div>
      </div>
    </div>
  );
};

export default App;
