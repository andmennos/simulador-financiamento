export class Proponente {
  constructor(
    public name?: string,
    public profissao?: string,
    public cpf?: string,
    public email?: string,
    public data?: string,
    public cep?: string,
    public cel?: string,
  ){
    this.name = name;
    this.profissao = profissao;
    this.cpf = cpf;
    this.email = email;
    this.data = data;
    this.cep = cep;
    this.cel = cel;
    }

}
