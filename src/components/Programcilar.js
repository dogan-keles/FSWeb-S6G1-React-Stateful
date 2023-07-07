import React, { useState } from "react";

export const enIyilerListesi = [
  { id: "1", isim: "Ada Lovelace" },
  { id: "2", isim: "Grace Hopper" },
  { id: "3", isim: "Evelyn Boyd Granville" },
  { id: "4", isim: "Mary Kenneth Keller" },
  { id: "5", isim: "Frances Allen" },
  { id: "6", isim: "Carol Shaw" },
];

export default function Programcilar() {
  const [programcilarListesi, setProgramcilarListesi] =
    useState(enIyilerListesi);
  const [oneCikaninIdsi, setOneCikaninIdsi] = useState("");

  const oneCikaninIsmi = () => {
    const oneCikanProgramci = programcilarListesi.find(
      (dev) => dev.id === oneCikaninIdsi
    );
    return oneCikanProgramci ? oneCikanProgramci.isim : "";
  };

  const stil = {
    fontSize: "1.5em",
    marginTop: "0.5em",
    color: oneCikaninIdsi ? "gold" : "royalblue",
  };

  return (
    <div className="widget-programmers container">
      <h2>Programcılar</h2>
      <div className="programmers">
        {programcilarListesi.map((dev) => (
          <div className="programmer" key={dev.id}>
            {dev.isim}{" "}
            <button
              onClick={() => {
                setOneCikaninIdsi(dev.id);
              }}
            >
              Kutla
            </button>
          </div>
        ))}
      </div>
      <div id="featured" style={stil}>
        {oneCikaninIdsi ? (
          <span>🎉 Hadi {oneCikaninIsmi()} kutlayalım! 🥳</span>
        ) : (
          "Harika bir programcı seçin"
        )}
      </div>
    </div>
  );
}
