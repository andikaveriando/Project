import { useState } from "react";
import "./App.css";

function App() {
  const [menyala, setMenyala] = useState(false);
  const [kesetrum, setKesetrum] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [pesan, setPesan] = useState("");

  // Ketika tali ditekan
  const tekanTali = () => {
    if (menyala || kesetrum) return;

    // Mulai efek kesetrum
    setKesetrum(true);

    // Setelah efek listrik selesai, lampu menyala
    setTimeout(() => {
      setKesetrum(false);
      setMenyala(true);
    }, 1200);
  };

  // Fungsi login
  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      setPesan("⚠️ Username dan password harus diisi!");
      return;
    }

    setPesan(`🎉 Selamat datang, ${username}!`);
  };

  // Mematikan lampu dan kembali ke awal
  const resetProject = () => {
    setMenyala(false);
    setKesetrum(false);
    setUsername("");
    setPassword("");
    setPesan("");
  };

  return (
    <div
      className={`app ${
        menyala ? "lampu-nyala" : "lampu-mati"
      } ${kesetrum ? "mode-kesetrum" : ""}`}
    >

      {/* =========================
          EFEK LISTRIK
      ========================= */}

      {kesetrum && (
        <div className="efek-listrik">

          <span className="kilat kilat-1">⚡</span>
          <span className="kilat kilat-2">⚡</span>
          <span className="kilat kilat-3">⚡</span>
          <span className="kilat kilat-4">⚡</span>
          <span className="kilat kilat-5">⚡</span>

        </div>
      )}

      {/* =========================
          LAMPU
      ========================= */}

      <div className="lampu">

        <div className="cahaya-lampu"></div>

        <div className="bohlam">
          💡
        </div>

      </div>


      {/* =========================
          TAMPILAN AWAL
      ========================= */}

      {!menyala && (
        <>

          <div className="judul">

            <h1>SMART ROOM</h1>

            <p>
              Tekan tali untuk menyalakan lampu
            </p>

          </div>


          {/* =========================
              TALI
          ========================= */}

          <div
            className={`tali-wrapper ${
              kesetrum ? "tali-kesetrum" : ""
            }`}
            onClick={tekanTali}
          >

            <div className="tali-atas"></div>

            <div className="pegangan-tali">
              🪢
            </div>

            {!kesetrum && (
              <div className="petunjuk">
                TEKAN
              </div>
            )}

            {kesetrum && (
              <div className="peringatan">
                ⚡ AWWW! ⚡
              </div>
            )}

          </div>

        </>
      )}


      {/* =========================
          FORM LOGIN
      ========================= */}

      {menyala && (

        <div className="login-wrapper">

          <div className="login-card">

            <div className="login-logo">
              🔐
            </div>

            <h2>
              Welcome Back!
            </h2>

            <p className="subtitle">
              Lampu sudah menyala.
              <br />
              Silakan login untuk masuk.
            </p>


            <form onSubmit={handleLogin}>

              <div className="input-box">

                <label>
                  Username
                </label>

                <input
                  type="text"
                  placeholder="Masukkan username"
                  value={username}
                  onChange={(e) =>
                    setUsername(e.target.value)
                  }
                />

              </div>


              <div className="input-box">

                <label>
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)
                  }
                />

              </div>


              <button
                type="submit"
                className="login-button"
              >
                LOGIN
              </button>

            </form>


            {/* Pesan login */}

            {pesan && (

              <div className="pesan">
                {pesan}
              </div>

            )}


            {/* Tombol reset */}

            <button
              className="reset-button"
              onClick={resetProject}
            >
              💡 Matikan Lampu
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default App;
