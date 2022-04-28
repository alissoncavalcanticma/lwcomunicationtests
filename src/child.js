import { LightningElement, api } from 'lwc';
export default class App extends LightningElement {
  @api eu;
  
  name = 'Electra X4';
  description = 'A sweet bike built for comfort.';
  category = 'Mountain';
  material = 'Steel';
  price = '$2,700';
  pictureUrl = 'https://s3-us-west-1.amazonaws.com/sfdc-demo/ebikes/electrax4.jpg';
  ready = false;
  connectedCallback(){
    setTimeout(()=>{
      this.ready = true;
    }, 3000);
  }

  buscaPrint(){
    const event = new CustomEvent('recebeprint', {
      detail: {nome:"Christian", idade: 0.5, time: "Corinthians"}
    });
    this.dispatchEvent(event);
  }
  
}