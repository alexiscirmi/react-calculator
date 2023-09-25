import { useState, createContext, useEffect } from "react"
import { evaluate } from "mathjs"

export const CalcContext = createContext()

export const CalcContextComponent = ({ children }) => {

  const [display, setDisplay] = useState('')

  const updateDisplay = (e) => {
    setDisplay(e)
  }

  const allowedKeys = ['Backspace', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '+', '-', '*', '/', '%', '=', 'Enter']

  const [focusDisplay, setFocusDisplay] = useState(false)

  const onFocusDisplay = () => {
    setFocusDisplay(true)
  }

  const onBlurDisplay = () => {
    setFocusDisplay(false)
  }

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
    if (allowedKeys.includes(e.key)) {
      switch (e.key) {
        case 'Backspace':
          !focusDisplay && backspace()
          break
        case '0':
          !focusDisplay && opKey('0')
          break
        case '1':
          !focusDisplay && opKey('1')
          break
        case '2':
          !focusDisplay && opKey('2')
          break
        case '3':
          !focusDisplay && opKey('3')
          break
        case '4':
          !focusDisplay && opKey('4')
          break
        case '5':
          !focusDisplay && opKey('5')
          break
        case '6':
          !focusDisplay && opKey('6')
          break
        case '7':
          !focusDisplay && opKey('7')
          break
        case '8':
          !focusDisplay && opKey('8')
          break
        case '9':
          !focusDisplay && opKey('9')
          break
        case '+':
          !focusDisplay && opKey('+')
          break
        case '-':
          !focusDisplay && opKey('-')
          break
        case '*':
          !focusDisplay && opKey('*')
          break
        case '/':
          !focusDisplay && opKey('/')
          break
        case '%':
          !focusDisplay && opKey('%')
          break
        case '.':
          !focusDisplay && opKey('.')
          break
        case '=':
          !focusDisplay && equalClick()
          break
        case 'Enter':
          !focusDisplay && equalClick()
          break
        default:
          break
      }
    } else {
      e.preventDefault()
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
    <CalcContext.Provider value={{ display, updateDisplay, onFocusDisplay, onBlurDisplay, buttonClick, equalClick, clearClick }}>
      {children}
    </CalcContext.Provider>
  )
}