// Função que define o componente Tarefa, que recebe várias props como parâmetros
function Tarefa({ nome, concluida, onConcluir, onRemover, importante, onImportante, editar, onEditar, descricao }) {
    return (
        // O componente retorna um item de lista <li> com estilo dinâmico
        <li 
            style={{
                textDecoration: concluida ? 'line-through' : 'none', // Se a tarefa estiver concluída, aplica risco no texto
                color: importante ? 'green' : 'black' // Se a tarefa for marcada como importante, muda a cor para verde, caso contrário, preta
            }}
        >
            <span> {nome} </span> {/* Exibe o nome da tarefa */}
            <span> {descricao} </span> {/* Exibe a descrição da tarefa */}
        </li>
    )
}

// Exporta o componente Tarefa para ser utilizado em outros arquivos
export default Tarefa;
