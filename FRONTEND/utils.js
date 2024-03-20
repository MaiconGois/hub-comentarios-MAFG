const formatDate = (data) => {
  const currentDate = new Date(data);
  const options = {
    day: "2-digit",
    month: "short",
    hour: "numeric",
    hour12: false,
  };

  let formattedDate = currentDate.toLocaleDateString("pt-BR", options);
  return formattedDate.replace(",", " às") + "hs";
};

const gerarCorAleatorioEscura = () => {
  let corEscura = [
    "#1a1a40",
    "#4c0027",
    "#1e5128",
    "#082032",
    "#000000",
    "#5b0045",
    "#950101",
  ];
  return corEscura[Math.floor(Math.random() * corEscura.length)];
};
const gerarCorAleatorioClara = () => {
  let corClara = [
    "#F0FFFF",
    "#FFE4B5",
    "#FFEBCD",
    "#DDA0DD",
    "#F5DEB3",
    "#ADFF2F",
    "#7FFFD4",
  ];
  return corClara[Math.floor(Math.random() * corClara.length)];
};


export { gerarCorAleatorioEscura, gerarCorAleatorioClara, formatDate };
