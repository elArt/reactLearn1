import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './cart';
import Inventory from './inventory';
import './index.css';

class Store extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            appleStock: 12,
            melonStock: 5,
            orangeStock: 20,
            appleSelected: 0,
            melonSelected: 0,
            orangeSelected: 0,
            backs: 0
        }
    }
    render(){
        return(
        <div>
            <Cart  fruitCard={this.state} checkClick={this.checkClick} melonBuy={this.melonBuy} melonBack={this.melonBack} />
            <Inventory fruit={this.state} appleBuy={this.appleBuy} melonBuy={this.melonBuy} orangeBuy={this.orangeBuy}/>
        </div>
        )
    }
    checkClick = ()=>{
        this.setState({
            appleSelected: 0,
            melonSelected: 0,
            orangeSelected: 0,
            backs: 0
        })
    }

    melonBuy = ()=>{
        if(this.state.melonStock > 0){
            this.setState({
                melonStock: this.state.melonStock - 1,
                melonSelected: this.state.melonSelected + 1,
                backs: this.state.backs + 20
            })};
    }

    appleBuy = ()=>{
        if(this.state.appleStock > 0){
            this.setState({
                appleStock: this.state.appleStock - 1,
                appleSelected: this.state.appleSelected + 1,
                backs: this.state.backs + 10
            })};
    }
    
    orangeBuy = ()=>{
        if(this.state.orangeStock > 0){
            this.setState({
                orangeStock: this.state.orangeStock - 1,
                orangeSelected: this.state.orangeSelected + 1,
                backs: this.state.backs + 8
            })};
    }
    melonBack = ()=>{
        if(this.state.melonSelected > 0){
        this.setState({
            melonStock: this.state.melonStock + 1 ,
            melonSelected: this.state.melonSelected - 1,
            backs: this.state.backs - 20
        })}
    };
}


ReactDOM.render(<Store />, document.getElementById('root'));
  