import React, { Component } from 'react'
import './add-item.css'


export default class AddItem extends Component {
    constructor() {
        super();
        this.state= {
            label:'',
        }
    }

    onLabelChange =(e) => {
        this.setState({
            label: e.target.value.toUpperCase(),
        })
    }
    onSubmit =(e) => {
        e.preventDefault();
        this.props.AddItem(this.state.label);
        this.setState({
            label: ''
        })
    }

    render() {
        return (
            <form className="btn-add-holder d-flex"
                onSubmit={this.onSubmit}
            >
                <input type="text"
                    className="form-control"
                    onChange={this.onLabelChange}
                    placeholder="what needs to be done"
                    value={this.state.label} />
                <button
                    type="submit"
                    className="btn btn-outline-secondary btn-add-item">
                    Add item
                </button>
            </form>
        )

    }
}