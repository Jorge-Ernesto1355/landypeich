import React, {useState} from 'react';
import {motion} from 'framer-motion'
import './container.css'
const App = () => {
  const [text, setText] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [array, setArray ]  = useState([{name:"jkrge"}])

  const jorgeguapo = (e)=>{
    e.preventDefault()
    setArray([...array, {name:text}])
    setText('')
  }



  const variants = {
  open: { opacity: 1  , x:500, y:100, width:500, height:400,
    transition:{
      duration: .5, 
      
  }},
  closed: { opacity: 0,y:400 , scale: 1,  transition:{
    duration: .2,
    type:'ease' 
  }  },

  
}
  return (
    <div>
      <button  onClick={() => setIsOpen(isOpen => !isOpen)}></button>
      <motion.div
      layout
      initial={{ x: 400, y: 20}}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      
       className="container">
         <h2 >hola bienvenido a tu pagina favortia</h2>
jorge
         <input type="text" value={text} onChange={e => setText(e.target.value)}  />
         <button onClick={(e) => jorgeguapo(e)}>jorgeguao</button>
        {
          array.map((e)=>(
            <div>{e.name}</div>
          ))
            
          
        }
       </motion.div>
    </div>
  )
}

export default App