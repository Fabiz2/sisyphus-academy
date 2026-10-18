import Card from '../../components/Card'
import imgSisifo from "../../assets/images/sisifo-imagem-fundo-hero.png"
import './Sobre.css'

const valores = [
  { id: 1, titulo: 'Disciplina', texto: 'Treinar todos os dias, mesmo quando a pedra parece pesada demais.' },
  { id: 2, titulo: 'Superação', texto: 'Cada repetição é um passo a mais na subida. O limite de hoje é o ponto de partida de amanhã.' },
  { id: 3, titulo: 'Comunidade', texto: 'Ninguém empurra sozinho. Alunos e professores sobem a montanha juntos.' },
]

export default function Sobre() {
  return (
    <main className="sobre">
      <section className="sobre-historia">
        <div className="sobre-texto">
          <h1>A lenda de Sísifo</h1>
          <p>
            Na mitologia grega, Sísifo foi condenado pelos deuses a empurrar uma
            enorme pedra até o topo de uma montanha. Toda vez que chegava perto
            do cume, a pedra rolava de volta, e ele precisava recomeçar.
          </p>
          <p>
            Para os gregos, era o castigo supremo: um esforço eterno, sem fim e
            sem recompensa. Mas o filósofo Albert Camus propôs outro olhar: o
            valor está na própria subida, e é preciso imaginar Sísifo feliz.
          </p>
        </div>

        <img src={imgSisifo} alt="Sísifo empurrando a pedra montanha acima" className="sobre-img" />
      </section>

      <section className="sobre-filosofia">
        <h2>Nossa filosofia</h2>
        <p>
          Na Sisyphus Academy, o treino segue a mesma lógica: o resultado não
          vem de um dia perfeito, e sim da constância. Quem aparece todo dia
          empurra a própria pedra, e é isso que transforma o corpo e a mente.
        </p>
      </section>

      <section className="sobre-valores">
        <h2>Nossos valores</h2>
        <div className="sobre-cards">
          {valores.map((item) => (
            <Card key={item.id}>
              <h3>{item.titulo}</h3>
              <p>{item.texto}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="sobre-sistema">
        <h2>O sistema</h2>
        <p>
          Este painel foi criado para organizar a rotina da academia: cadastrar
          e acompanhar os alunos, registrar os equipamentos e manter tudo em um
          só lugar.
        </p>
      </section>
    </main>
  )
}