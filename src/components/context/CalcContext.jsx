import { useState, createContext } from "react"
import { evaluate } from "mathjs"

export const CalcContext = createContext()

export const CalcContextComponent = ({ children }) => {

  const [display, setDisplay] = useState('')

  const buttonClick = (num) => {
    setDisplay(`${display}${num}`)
  }

  const equalClick = () => {
    setDisplay(evaluate(display).toString())
  }

  const clearClick = () => {
    setDisplay('')
  }

  return (
    <CalcContext.Provider value={{ display, buttonClick, equalClick, clearClick }}>
      {children}
    </CalcContext.Provider>
  )

}