import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  
  eu = {name:"Alisson Cavalcanti", age: 32, childName: "Christian Tayllor"};
  print = "";
  
  mandaPrint(){
    this.print =  "Meu filho se chama " + event.detail.nome + 
                  ", e seu time é " + event.detail.time +
                  ", apesar de ter apenas " + event.detail.idade +
                  " meses de vida.";
    
  }
}