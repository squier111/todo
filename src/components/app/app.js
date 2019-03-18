import React , {Component} from 'react'
import AppHeader from '../app-header'
import TodoList from '../todo-list'
import SearchPanel from '../search-panel'
import AddItem from '../add-item'
import './app.css'


export default class App extends Component {

    maxId =100;

    constructor() {
        super();
        this.state={
            todData: [
                this.createTodoItem('Drink coffee'),
                this.createTodoItem('Make Awesome App'),
                this.createTodoItem('Have lunch'),
            ],
            term:'',
            filter: 'all'
        }
    }

    createTodoItem(label) {
        return {
            label,
            important: false,
            done:false,
            id: this.maxId++
        }

    }
    deleteItem =(id)=> {
        this.setState((state) => {
            const inx = this.state.todData.findIndex((el)=> el.id === id);
            const newArray = [
                ...this.state.todData.slice(0, inx),
                ...this.state.todData.slice(inx + 1)
                ];

            return{
                todData: newArray
            }
        })
    };

    addItem = (text) => {
        const Item = this.createTodoItem(text);
        
        
        // add new el in Array
        
        this.setState((state)=>{
            const newArray = [
                ...this.state.todData, Item
            ];
            return {
                todData: newArray
            }
        });
        
    };
    onSearchChange = (term) => {
        this.setState({
            term
        });
    }

    onFilterChange = (filter) => {
        this.setState({
            filter
        });
    }
    
    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    };

    filter(items, filter) {
        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item)=> !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        }
    };


    toggleProperty(arr, id, propName) {
        const inx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[inx];
        // 1. Update object
        const newItem = { ...oldItem,
            [propName]: !oldItem[propName] };

        // 2.construct new array
        return  [
            ...arr.slice(0, inx),
            newItem,
            ...arr.slice(inx + 1)
        ];

    }



    onToggleImportant =(id) => {
        this.setState((state) => {
            return {
                todData: this.toggleProperty(this.state.todData, id, 'important')
            }
        });

    };

    onToggleDone = (id) => {
        this.setState((state)=>{
            return {
                todData: this.toggleProperty(this.state.todData, id , 'done')
            }
           
        });
    };

    render(){
        const {todData, term, filter} = this.state;
        const visibleItems = this.filter(
            this.search(todData, term) , filter
        );
        const doneCount = todData.filter((el) => el.done).length;
        const todoCount = todData.length - doneCount;
        const isLoggedIn = true;
        const loginBox = <span>Log in plz</span>
        const welcomeBox = <span>Welcome Back</span>
        return (
            <div className="wrapper">
                {/* {isLoggedIn ? welcomeBox : loginBox} */}
                <AppHeader toDo={todoCount} done={doneCount}/>
                <SearchPanel
                    onSearchChang={(this.onSearchChange)}
                    filter = {filter}
                    onFilterChange={this.onFilterChange}
                />
                <TodoList 
                    todos={visibleItems}
                    onDeleted={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleDone={this.onToggleDone}
                    />
                <AddItem
                    AddItem={(this.addItem)}
                />
            </div>
        )
    };
}


