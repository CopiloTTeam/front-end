
import "./style.css";

type UserData = {
  nome: string,
  cpf: string,
  email: string,
  nomeProduto: string,
  valorTotal: string,
  numeroParcelas: string,
  dataVencimento: string,
}
type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}


export function BilingInformation({ nome, cpf, email, nomeProduto, valorTotal, numeroParcelas, dataVencimento, updateFields }: UserFormProps) {

  return (
    <div className="cont">
        <div className="row">
        
        <div className="full-box">
          <h1>Nome do Produto</h1>
          <input
            required
            type="text"
            placeholder="Nome do Produto"
            value={nomeProduto} onChange={e => updateFields({ nomeProduto: e.target.value })}
          />
        </div>
      </div>
      <div className="row">
        <div className="third-box">
          <h1>Valor Total</h1>
          <div className="tel-plus">
            <input
              required
              type="number"
              placeholder="Valor Total"
              value={valorTotal} onChange={e => updateFields({ valorTotal: e.target.value })}
            />
          </div>
        </div>
        <div className="third-box">
          <h1>Numero de Parcelas</h1>
          <div className="tel-plus">
            <input
              required
              type="number"
              placeholder="Numero de Parcelas"
              value={numeroParcelas} onChange={e => updateFields({ numeroParcelas: e.target.value })}
            />
          </div>
        </div>
        <div className="third-box">
          <h1>Data de Vencimento</h1>
          <input
            required
            type="date"
            placeholder="Data de Vencimento"
            value={dataVencimento} onChange={e => updateFields({ dataVencimento: e.target.value })}
          />
        </div>
      </div>
    </div>
  )
}