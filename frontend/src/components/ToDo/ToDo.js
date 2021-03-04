import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getToDoRequest, postToDoRequest } from '../../redux';

import './ToDo.scss';


class ToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            textareaVal: '',
            todos_in_state: [],
        }
        this.todos = [];
        this.deleteToDo = this.deleteToDo.bind(this);
        this.removeElement = this.removeElement.bind(this);
        this.addToDo = this.addToDo.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(getToDoRequest());
        setTimeout(() => {
            this.setState({
                loaded: this.props.loaded
            })
          }, 500);
        this.setState({
            todos_in_state: this.props.ToDo
        })
    }

    deleteToDo(e) {
        let id = e.target.id;
        this.removeElement(this.props.ToDo.todos, id);
        this.setState({todos_in_state: this.props.ToDo.todos})
    }

    addToDo() {
        this.props.ToDo.push({id: 4, name: "todo new", text: this.state.textareaVal});
        this.setState({todos_in_state: this.props.ToDo});
    }

    removeElement(array, elem) {
        var index = array.indexOf(elem);
        if (index > -1) {
            array.splice(index, 1);
        }
    }

    getToDosRaw(rawToDos) {
        this.todos = rawToDos.map(element =>
            <div className="todo" key={element.id + Math.random()}>
                <span className="post-id" key={element.id + Math.random()}>
                    {element.id}.{element.name}
                </span>
                <button id={element.id} onClick={this.deleteToDo}>X</button>
                <br/>
                <span>{element.text}</span>
            </div> 
        );

        return this.todos;
    }

    render() {
        if (this.state.loaded === false) {
            return (
                <div>Loading...</div>
            )
        }
        return (
            <div>
               ToDo page
               <br/>
               <Link to='/'>TO HOME PAGE</Link>
               {this.getToDosRaw(this.state.todos_in_state)}
               <textarea
                    className='html-editor'  
                    ref='myTextarea' 
                    value = {this.state.textareaVal}
                    onChange={(event)=>{
                        this.setState({
                            textareaVal:event.target.value
                        });
                    }}
                >
                </textarea>
               <button onClick={this.addToDo}>Add</button>
            </div>
        );
    };
}

const mapStateToProps = state => {
    return {
        ToDo: state.ToDoReducer.ToDo.todos,
        loaded: state.ToDoReducer.ToDo.loaded,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getToDoDispatch: () => dispatch(getToDoRequest()),
        postToDispatch: () => dispatch(postToDoRequest()),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);