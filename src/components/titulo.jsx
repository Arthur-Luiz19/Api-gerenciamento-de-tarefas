// Função que define o componente Titulo
function Titulo({ texto }) {
    // O componente retorna um elemento <h2> que exibe o texto passado como prop
    return (
        <h2>{texto}</h2>  // O valor de 'texto' será mostrado dentro da tag <h2>
    );
}

// Exporta o componente Titulo para ser utilizado em outros arquivos
export default Titulo;
