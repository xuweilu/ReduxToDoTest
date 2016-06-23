import React, {Component} from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import {render} from 'react-dom';

export default class App extends Component {
    render() {
        return (
            <div>
                <AddTodo onAddClick={text => console.log('add todo', text)}></AddTodo>
                <TodoList
                    todos={[{ text: 'Use Redux', completed: true },{ text: 'Learn to connect it to React', completed: false }]}
                    onTodoClick={todo => console.log('todo clicked', todo)}></TodoList>
                <Footer filter='SHOW_ALL' onFilterChange={ filter => console.log('fliter change', filter) }></Footer>
            </div>
        );
    }
}
