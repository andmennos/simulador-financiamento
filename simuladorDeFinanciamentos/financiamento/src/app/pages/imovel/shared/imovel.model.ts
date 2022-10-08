export class Imovel {
  constructor(
    public tipo?: string,
    public renda?: string,
    public valorImovel?: string,
    public valorEntrada?: string,
    public parcelas?: string,
    public valorTotalAprovado?:number,
    public parcelaInicial?:number
  ){
    this.tipo = tipo;
    this.renda = renda;
    this.valorImovel = valorImovel;
    this.valorEntrada = valorEntrada;
    this.parcelas = parcelas;
    this.valorTotalAprovado = valorTotalAprovado;
    this.parcelaInicial = parcelaInicial;
    }
}
