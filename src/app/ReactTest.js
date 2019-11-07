import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {selectTodoList} from "./redux/selectors";
import {addTodo} from "./redux/actions";




const AnotherComponent = () => {
  const todos = useSelector(selectTodoList);
  return (<div className='container'>{todos.map(i => (<div>{i}</div>))}</div>);
};



export const ReactTest = (props) => {
  const todos = useSelector(selectTodoList);
  const dispatch = useDispatch();
  console.log(todos, props);
  const appendItem = () => {
    dispatch(addTodo('kirill'));
  };
  return (<>
    <div className='container' onClick={appendItem}>{todos.map(i => (<div>{i}</div>))}</div>
    <div style={{background: 'black'}}>
      <AnotherComponent/>
    </div>
  </>);
};
