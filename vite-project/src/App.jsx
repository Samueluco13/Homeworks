import React, { useState } from "react";
import { Son } from "./Son";

export const App = () => {
const [search, setSearch] = useState("");
const [allImgs, setAllImgs] = useState([{ titulo: "Imagen 1", url: "https://picsum.photos/600/500?random=1" },]);
const [imagenes, setImagenes] = useState(allImgs);

const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value !== "") {
        const newImgs = allImgs.filter((imagen) =>
                imagen.titulo.toLowerCase().includes(value.toLowerCase())
                );
setImagenes(newImgs);
    } else {
setImagenes(allImgs);
    }
};

const handleAddImg = () => {
    const newImg = {
        titulo: `imagen ${allImgs.length + 1}`,
url: `https://picsum.photos/200/300?random=${allImgs.length + 1}`,
    };
    const imagenesActualizadas = [...allImgs, newImg];
    setAllImgs(imagenesActualizadas);
    setImagenes(imagenesActualizadas);
};

return (
    <>
<div>
<input
            type="text"
            placeholder="Buscar imagen"
            value={search}
            onChange={handleSearch}
/>

<button onClick={handleAddImg}> Agregar </button>
</div>
<div>
        {imagenes.map((imagen, key) => (
<div key={key} className="">
            <Son url={imagen.url} title={imagen.titulo} />
</div>
        ))}
</div>
    </>
);
};