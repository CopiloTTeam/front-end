
import "./style.css";

type UserData = {
  nome: string,
  cpf: string,
  email: string,
  data: string,
}

type UserFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void
}


export function LocalInformation({ nome, cpf, email, data, updateFields }: UserFormProps) {

  return (
    <div className="cont">
      <div className="row">
        <div className="first-box">
          <h1>Nome Completo</h1>
          <input
            required
            type="text"
            placeholder="Nome Completo"
            value={nome}
            onChange={e => updateFields({ nome: e.target.value })}
          />
        </div>
        <div className="second-box">
          <h1>CPF</h1>
          <input
            required
            type="text"
            placeholder="CPF"
            value={cpf} 
            onChange={e => updateFields({ cpf: e.target.value })}
          />
        </div>
      </div>

      <div className="row">
        <div className="first-box">
          <h1>Email</h1>
          <input
            required
            type="text"
            placeholder="Email"
            value={email} 
            onChange={e => updateFields({ email: e.target.value })}
          />
        </div>
        <div className="second-box">
          <h1>Data de Nascimento</h1>
          <input
            required
            type="date"
            placeholder="Data de Nascimento"
            value={data} 
            onChange={e => updateFields({ data: e.target.value })}
          />
        </div>
      </div>
      
    </div>
  )
}