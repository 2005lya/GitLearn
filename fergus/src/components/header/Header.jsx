import React, { Component} from "react";
import './header.css'

export default class Header extends Component {

    render (){
        return (
            <div className="header">
                <p>Status Border</p>
                <p>
                    <select value={this.state.status} onChange={e => this.setState({status: e.target.value})}>
                        <option value=""></option>
                        <option value="isScheduled">scheduled</option>
                        <option value="isActive">active</option>
                        <option value="isInvoicing">invoicing</option>
                        <option value="isPriced">priced</option>
                    </select>
                </p>
            </div>
        )
    }
}