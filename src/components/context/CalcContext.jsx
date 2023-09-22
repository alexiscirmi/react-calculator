import { useState, createContext, useEffect } from "react"
import { evaluate } from "mathjs"

export const CalcContext = createContext()

export const CalcContextComponent = ({ children }) => {

  const [display, setDisplay] = useState('')

  const buttonClick = (num) => {
    setDisplay(`${display}${num}`)
  }

  const equalClick = () => {
    try {
      if (display.length > 0) {
        setDisplay(evaluate(display.replaceAll(',', '')).toLocaleString('en-US', {
          minimumFractionDigits: 2, maximumFractionDigits: 8
        }))
      }
    } catch (error) {
      setDisplay('SYNTAX ERROR')
      setTimeout(() => {
        setDisplay('')
      }, 1500)
    }
  }


  const clearClick = () => {
    setDisplay('')
  }

  //
  // The next functions & useEffect allow users to manipulate the calculator using the keyboard
  //

  const backspace = () => {
    setDisplay(display.slice(0, -1))
  }

  const opKey = (op) => {
    setDisplay(display + op)
  }

  const handleKeyDown = (e) => {
    e.preventDefault()
    switch (e.key) {
      case 'Backspace':
        backspace()
        break
      case '0':
        opKey('0')
        break
      case '1':
        opKey('1')
        break
      case '2':
        opKey('2')
        break
      case '3':
        opKey('3')
        break
      case '4':
        opKey('4')
        break
      case '5':
        opKey('5')
        break
      case '6':
        opKey('6')
        break
      case '7':
        opKey('7')
        break
      case '8':
        opKey('8')
        break
      case '9':
        opKey('9')
        break
      case '+':
        opKey('+')
        break
      case '-':
        opKey('-')
        break
      case '*':
        opKey('*')
        break
      case '/':
        opKey('/')
        break
      case '%':
        opKey('%')
        break
      case '.':
        opKey('.')
        break
      case '=':
        equalClick()
        break
      case 'Enter':
        equalClick()
        break
      default:
        break
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  })

  //
  //
  //

  return (
    <CalcContext.Provider value={{ display, buttonClick, equalClick, clearClick, handleKeyDown }}>
      {children}
    </CalcContext.Provider>
  )
}