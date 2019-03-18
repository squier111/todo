import React, {Component} from 'react'
import './todo-list-item.css'


export default class TodoListItem extends Component {

  constructor() {
    super();

  } 



  render() {
    const { label, onDeleted, onToggleImportant, onToggleDone, done, important }= this.props;

    let ClassNames = 'todo-list-item';
    if(done) {
      ClassNames += ' done';
    }

    if (important) {
      ClassNames += ' important';
    }


    return (
      <div className={ClassNames}>
        <span 
              className="todo-list-item-label"
              onClick={onToggleDone}
              >
              {label}
        </span>
        <button type="button"
          className="btn btn-outline-danger  btn-sm"
          onClick={onDeleted}
          >
          <i className="fa fa-trash-o"></i>
        </button>
        <button type="button"
                className="btn btn-outline-success btn-sm"
              onClick={onToggleImportant}>
              <i className ="fa fa-exclamation"></i>
              
        </button>
    
      </div>
    )
  }

}

