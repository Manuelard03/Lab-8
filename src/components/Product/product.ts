import Style from "./style.css"

    export enum Attributes {
    "img"="img",
    "price"="price",
    "name"="name",
    "quantity"="quantity"
    }

    class ProductCard extends HTMLElement{

    img?: string;
    price?:string;
    quantity?:string;
    name?:string;

     constructor(){
        super();
        this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
    const attrs: Record <Attributes, null> = {
        img:null,
        price:null,
        quantity:null,
        name:null,
    }
    return Object.keys(attrs);
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName: Attributes, oldValue:string |undefined, newValue:string |undefined){
    switch (propName) {
   
    default:
        this[propName]= newValue;
        break;
     }

     this.render();

    }

    render(){
        if(this.shadowRoot){  
            this.shadowRoot.innerHTML= 
            
            `<style>${Style}</style>

            <div class="product">
           
            <img class="product-image" src="${this.img}" alt="imagen del producto">
            <h1 class="productname">Name:${this.name}</h1>
            <h3 class="productprice">Price:${this.price}</h3>
            <p class="quantity">Quantity:${this.quantity}</p>
            </div>

            `

        }

    }
}

customElements.define("product-card", ProductCard);
export default ProductCard;
