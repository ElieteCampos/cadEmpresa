import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CepDTO } from 'src/model/cepmodels';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cadEmpresa';
  razaoSocial: string = "";
  nomeFantasia: string =  "";
  cnpj: string = "";
  cep: string = "";
  dadosEndereco?: CepDTO


  constructor (private client: HttpClient) { }

  buscar = () => {
    console.log('CEP:', this.cep)

    if (this.cep == ''){
      console.log ('cep vazio, digite o cep')
      return
    }
    if(isNaN(parseInt(this.cep)) || this.cep.length !=8) {
      console.log('cep invalido')
      return
    }

    this.client.get<CepDTO>(`https://viacep.com.br/ws/${this.cep}/json/`). subscribe ((result: CepDTO) => {
      this.dadosEndereco = result
      console.log('retorno via cep:', this.dadosEndereco)
    })
  }

}

