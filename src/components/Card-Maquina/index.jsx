import Card from '../Card'
import './Card-Maquina.css'

export default function CardMaquina({ id, nome, grupo, quantidade, imagem, descricao, onDelete }) {
    return (
        <Card>
            <img
                src={imagem}
                alt={nome}
                className="card-maquina-img"
                onError={(e) => { e.target.src = "/img/maquinas/padrao.png" }}
            />
            <h3>{nome}</h3>
            <span className="card-maquina-grupo">{grupo} · {quantidade} un.</span>
            <p>{descricao}</p>

            {onDelete && (
                <button className="btn-excluir" onClick={() => onDelete(id)}>
                    Excluir
                </button>
            )}
        </Card>
    )
}