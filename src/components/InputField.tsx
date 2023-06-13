import { useRef } from 'react'
import './styles.css'

interface Props {
  todo: string
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleApp: (e: React.FormEvent) => void
}

const InputField = ({ todo, setTodo, handleApp }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form
      action=''
      className='input'
      onSubmit={e => {
        handleApp(e)
        inputRef.current?.blur()
      }}
    >
      <input
        type='input'
        placeholder='Enter a task'
        className='input__box'
        value={todo}
        onChange={e => setTodo(e.target.value)}
        ref={inputRef}
      />
      <button className='input_submit' type='submit'>
        Go
      </button>
    </form>
  )
}
export default InputField
