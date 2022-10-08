import { Injectable } from '@angular/core';
import { Imovel } from './imovel.model';

@Injectable({
  providedIn: 'root',
})
export class ImovelStorageService {
  imovel: Imovel;

  constructor() {}

  setImovel(imovel: Imovel) {
    this.imovel = imovel;
  }

  getImovel() {
    return this.imovel;
  }
}
