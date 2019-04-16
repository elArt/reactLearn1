import React from 'react';

class Cart extends React.Component {
    constructor (props){
        super(props)
    }
    render(){
        return(
            <div>
                <h3>Cart</h3>

                {this.props.fruitCard.appleSelected || this.props.fruitCard.melonSelected || this.props.fruitCard.orangeSelected  ?
                 <div>
                    <div>{this.props.fruitCard.appleSelected ? 
                        <div>{'Apple – $10 ×' + this.props.fruitCard.appleSelected} 
                        <button>-1</button>
                        <button >+1</button>
                        ({this.props.fruitCard.appleStock}  in stock) 
                        </div>
                        :''}
                    </div>
                    <div>{this.props.fruitCard.melonSelected ? 
                        <div>{'Melon – $20 ×' + this.props.fruitCard.melonSelected}
                        <button onClick={this.props.melonBack}>-1</button>
                        <button onClick={this.props.melonBuy} disabled = {this.props.fruitCard.melonStock ? false : true}>+1</button>
                         ({this.props.fruitCard.melonStock}  in stock) </div>
                        :''}
                    </div>
                    <div>{this.props.fruitCard.orangeSelected ?
                         <div>{'Orange – $8 ×' + this.props.fruitCard.orangeSelected}
                          <button>-1</button>
                          <button>+1</button>
                          ({this.props.fruitCard.orangeStock}  in stock)</div>
                         :''}
                    </div>
                 </div>
                  : <div>Your cart is empty</div>}
                <br/>
                <div>Total: ${this.props.fruitCard.backs ? this.props.fruitCard.backs : 0}
                <button  disabled={this.props.fruitCard ? false : true } onClick={this.props.checkClick} > Checkout </button>
                </div>
                <hr/>
            </div>
        )
    }
  
}

export default Cart;
// 