import logo from './logo.svg';
import './App.css';
import React ,{useState} from 'react';


function App() {
  const [arr, changeArr] = useState([
    {id:1, title: 'text1'},
    {id:2, title: 'text2'},
    {id:3, title: 'text3'},
    {id:4, title: 'text4'},
  ]);

  const [itemToHide, setItemToHide] = useState([]);
  const filteredArr = arr.filter(el => !itemToHide.includes(el.id));

  //itemToRemove is 'last' or 'first'
  const smthChanges = (itemToRemove)=>{
    if(!itemToRemove) return ; // проверяем,если приходящее значение не соответствует, сразу выходим(лучше так всегда делать если несколько значений)
    const clone = [...itemToHide];
    clone.push(itemToRemove.id)
    setItemToHide(clone);
  }

  const onReveret =()=>setItemToHide([]);

  return (
    <div className="App">
      <button onClick={onReveret}>reveret</button>
      <ul>
        {filteredArr.map(el=> (
            <li
                key ={el.id}
            >
              {el.title} - <button onClick={()=> smthChanges(el)}>remove</button>
            </li> ))
        }
      </ul>
    </div>
  );
}

export default App;

// ДЗ:
//
// 1 відмалювати список карточок базуючись на якомусь створеному вами масиві
// створити окрему кнопку, яка буде видаляти поточний перший елемент (або останній)
// якщо у нас масив з 3 елементів і ми клікнули на кнопку 3 рази, то на екрані жодна карточка не має відмалюватись  (кнопки повернення до початкового стану не треба)
//
// 2 те саме, тільки з кнопкою реверт (повернутись до стану, де у нас видно 3 елемнети, як на початку)
//
// 3   задача з зірочкою) кожна карточка з завдання вище має мати кнопку, по кліку на яку, ми видаляємо зі списку саме її + реверт кнопка, щоб вернути все назад (ця кнопка одна дня всіх карточок, клікнули по ній і всі каркти вернулись назазд) (згадування функції фільтр в лекції було не просто так)
