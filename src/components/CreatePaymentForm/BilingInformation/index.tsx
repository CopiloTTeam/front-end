
import "./style.css";

type UserData = {
    id_titulo: string;
    id_cliente: string,
    id_funcionario: string
    data_geracao: string,
    valor:string,
}
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}


export function BilingInformation({ id_titulo, id_cliente, id_funcionario, data_geracao, valor, updateFields }: UserFormProps) {

  return (
    <div className="cont">
        <div className="row">
        
        <div className="full-box">
          <h1>ID do titulo</h1>
          <input
            required
            type="text"
            placeholder="id do titulo"
            value={id_titulo} onChange={e => updateFields({ id_titulo: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        <div className="third-box">
          <h1>ID do cliente</h1>
          <div className="tel-plus">
            <input
              required
              type="number"
              placeholder="ID do cliente"
              value={id_cliente} onChange={e => updateFields({ id_cliente: e.target.value })}
            />
          </div>
        </div>
        <div className="third-box">
          <h1>ID do funcionario</h1>
          <div className="tel-plus">
            <input
              required
              type="number"
              placeholder="ID do funcionario"
              value={id_funcionario} onChange={e => updateFields({ id_funcionario: e.target.value })}
            />
          </div>
        </div>
        <div className="third-box">
          <h1>Data de Geração</h1>
          <input
            required
            type="date"
            placeholder="Data de Geração"
            value={data_geracao} onChange={e => updateFields({ data_geracao: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        <div className="full-box">
          <h1>valor</h1>
          <input
            required
            type="number"
            placeholder="valor"
            value={valor} onChange={e => updateFields({ valor: e.target.value })}
          />
        </div>
      </div>
    </div>
  )
}