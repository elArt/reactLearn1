import React from 'react';

class Inventory extends React.Component {
    constructor (props){
        super(props)
        
    }
    render(){
        
        return(
            <div>
                <h3> Inventory</h3>
                    <div>Apple - $10 
                        <button  disabled = { this.props.fruit.appleStock ? false : true} onClick = {this.props.appleBuy}>Buy</button> 
                        ({this.props.fruit.appleSelected} selected, {this.props.fruit.appleStock} in stock)
                    </div>
                    <div>Melon  - $20
                        <button disabled = {this.props.fruit.melonStock ? false : true} onClick = {this.props.melonBuy}>Buy</button>
                        ({this.props.fruit.melonSelected} selected, {this.props.fruit.melonStock} in stock)
                    </div>
                    <div>Orange - $8 
                        <button disabled = {this.props.fruit.orangeStock ? false : true} onClick = {this.props.orangeBuy}>Buy</button>
                         ({this.props.fruit.orangeSelected} selected, {this.props.fruit.orangeStock} in stock)
                    </div>
                <br/>
            </div>
        )
    }
}

export default Inventory;