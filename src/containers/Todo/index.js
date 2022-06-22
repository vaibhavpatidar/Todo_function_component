import React, { useEffect } from 'react';
import InputTodo from './Todolist/input'
import DisplayList from './Todolist/display'
import EmptyTodo from './Todolist/footer'
import '../../index.js';
import './index.css';
import { ref, update, arrayUnion, push, child, get, getDatabase } from 'firebase/database';
import db from '../../config'
import { type } from '@testing-library/user-event/dist/type';

const Todo = () => {
   const [todo, setTodo] = React.useState([])

   var name = ""
   useEffect(() => {
      const search = window.location.search
      name = new URLSearchParams(search).get('name');
      console.log(name)

      const dbRef = ref(getDatabase());
      get(child(dbRef, `/users/` + name)).then((snapshot) => {
            let pass=snapshot.val().list

            var items=[]
            for(let i=0;i<Object.keys(pass).length;i++){
               
               let a=Object.keys(pass)[i]
               items.push(snapshot.val().list[a])
               
            }
            console.log("Fetch - ",items)
      setTodo(items)
   })
   })

   const addTodo = (text, category) => {
      // console.log(text)
      // console.log(category)
      // setName(text)
      // setCategory(category)

      let data = { item: text, category: category, done: 0 }

      setTodo(todo => [...todo, data])
      push(ref(db, '/users/' + name + '/list'), {
         ...data,
      });
      console.log('DATA SAVED');


      // const dbRef = ref(getDatabase());
      // get(child(dbRef, `/users/` + name)).then((snapshot) => {
      //       let pass=snapshot.val().list.key
      //        console.log("list - ",pass)
      //        console.log("list length - ",pass.length)
      //    });

      //    pass.map((items,index) => {
      //        console.log(items," - ",index, " - ", items.item, " - ", items.category)

      //  })

   }

   function itemDone(index) {
      let temp_state = [...todo];
      let temp_element = { ...temp_state[index] };

      if (temp_element.done == 1) {
         temp_element.done = 0;
         temp_state[index] = temp_element;
         setTodo(temp_state);
      }
      else {
         temp_element.done = 1;
         temp_state[index] = temp_element;
         setTodo(temp_state);
      }
   }

   function deleteItem(index){
      let temp_state = [...todo];
      temp_state.splice(index, 1);
         setTodo(temp_state);
   }

   function clearTodo(){
      setTodo([])

      update(ref(db, '/users/' + name + '/list'), {
         todo
      });
   }

   function reset(){
      const dbRef = ref(getDatabase());
      get(child(dbRef, `/users/` + name)).then((snapshot) => {
            let pass=snapshot.val().list

            var items=[]
            for(let i=0;i<Object.keys(pass).length;i++){
               
               let a=Object.keys(pass)[i]
               items.push(snapshot.val().list[a])
               
            }
            console.log("reset - ",items)
      setTodo(items)
   })
}

   console.log("todolist -", todo)
   return (
      <div className="App">
         <header className="App-header">
            <div className="todoblock">
               <label className="header">Todo App</label>

               <InputTodo
                  inputtext={(text, category) => { addTodo(text, category) }}
               />

               <DisplayList
                  list={todo}
                  selectdone={(index) => { itemDone(index) }}
                  itemdel={(index) => { deleteItem(index) }}
               />

                <EmptyTodo
                  deletetodo={() => {clearTodo() }}
                  reset={() => {reset() }}
                  list={todo}
               />

            </div>
         </header>
      </div>
   );
}


export default Todo;