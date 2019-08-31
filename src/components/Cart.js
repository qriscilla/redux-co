import React from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        items: state.addedItems
    }
}

class Cart extends React.Component {
    render() {
        // If there are items in cart, display those items
        let addedItems = this.props.items.length ?
        (
            this.props.items.map(item => {
                return (
                    <li className="item-in-cart">
                        <div className="item-img">
                            <img src={item.img} alt={item.title} />
                        </div>

                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>

                        <div className="add-remove">
                            <Link to="/cart"><i class="fa fa-plus-circle" onClick={ () => {this.handleAddQuantity(item.id)} }></i></Link>
                            <Link to="/cart"><i class="fa fa-minus-circle" onClick={ () => {this.handleMinusQuantity(item.id)} }></i></Link>
                        </div>
                        <button className="remove"><i class="fa fa-times-circle" onClick={ () => {this.handleRemoveItem(item.id)} }></i></button>
                    </li>
                )
            })
        ):
        // If there are no items in cart, display the following message
        (
            <p>Nothing. Get to shopping!</p>
        )

        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul classname="collection">
                        {addedItems}
                    </ul>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Cart);