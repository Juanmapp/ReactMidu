// creamos las casillas
export const Square = ({children, isSelected, updateBoard, index}) => {
    // hacemos el condicional para indicar de quien es el turno
      const className=`square ${isSelected ? 'is-selected': ''}`
    
      const handleClick = () => {
        updateBoard(index)
      }
    
      return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
      )
    }
