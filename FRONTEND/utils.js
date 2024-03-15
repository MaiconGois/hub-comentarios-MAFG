const formatDate = (data) =>{
    const currentDate = new Date(data);
    const options = { 
        day: '2-digit',
        month: 'short',
        hour: 'numeric',
        hour12: false
    };

    let formattedDate = currentDate.toLocaleDateString('pt-BR',options)
    return formattedDate.replace(',', ' às') + 'hs';
}


const gerarCorAleatorio = () => {
    return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)})`;
  };


export {gerarCorAleatorio, formatDate}