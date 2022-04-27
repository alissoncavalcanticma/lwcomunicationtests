import { LightningElement } from 'lwc';

export default class App extends LightningElement {
  
  eu = {name:"Alisson Cavalcanti", age: 32, childName: "Christian Tayllor"};
  print = "";
  
  mandaPrint(){
    alert("foi 2");
    
  }
}