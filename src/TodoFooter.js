import React, { useMemo } from 'react'
import cn from 'classnames'
import Button from './Button'

function TodoFooter({ chooseAllTodos, clearAllDone, todo, countTodos, setStatusButton, statusButton }) {
  const changeButtonStatus = (e) => {
    setStatusButton(e.target.innerText.trim());
  }

  const buttons = useMemo(() => {
    return [{
      text: 'All',
      onClick: changeButtonStatus,
      active: statusButton === 'All',
      id: 1
    }, {
      text: 'Todo',
      onClick: changeButtonStatus,
      active: statusButton === 'Todo',
      id: 2
    }, {
      text: 'Completed',
      onClick: changeButtonStatus,
      active: statusButton === 'Completed',
      id: 3
    }];
  }, [changeButtonStatus, statusButton])

  return (
    <div className='todoFooterWrapper'>
      {todo ?
        <div className='todoFooter'>
          <div className='markAllTodos' onClick={chooseAllTodos} > {countTodos} tasks left </div>
          <div className='buttonGroup'>
            {
              buttons.map(({text, onClick, active, id}) => (
                <Button key={id} className={cn('btnsInFooter', {active})} onClick={onClick} text={text} />
              ))
            }
          </div>
          <Button className='btnsInFooter__clear' onClick={clearAllDone} text="Clear Completed" />
        </div>
        :
        null
      }
    </div>
  )
}

class DivOne extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {

  }

  componentWillUnmount() {
    
  }

  render() {
    return null
  }
}

class DivOneSpecial extends React.PureComponent {}

class DivTwo extends DivOne {}



export default TodoFooter




// class toggle для конкретного объекта




// class DivOne extends React.Component{
//   constructor(props){
//     super(props)

//      this.state = {
//        visability: false
//        }
//   this.handleClick = this.handleClick.bind(this)
//     }

//   handleClick () {
//     this.setState( state=> ({
//       visability: !state.visability
//         }));
//     }

// render(){
//   if(this.state.visability){
//     return(
//         <div className='back'>
//             <h1>You see me</h1>
//             <button onClick={this.handleClick}>Click</button>
//         </div>
//     )
//   }else{
//     return(
//         <div className='back chosen'>
//             <h1>You see another</h1>
//             <button onClick={this.handleClick}>Click</button>
//         </div>
//     )
//    }
//   }
// }
// export default DivOne