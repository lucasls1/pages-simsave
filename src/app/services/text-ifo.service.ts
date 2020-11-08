import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TextIfoService {
  inforurl='https://api.mocki.io/v1/431c7f82'

  constructor(private httpClient: HttpClient) { }

listar(){
  console.log(this.inforurl)
  return this.httpClient.get<any[]>(`${this.inforurl}`)
}
}

