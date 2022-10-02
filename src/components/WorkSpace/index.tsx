import React from 'react'
import { useForm } from 'react-hook-form'
import { TodoProps } from '../../types'
import { TodoContext } from '../../context'
import { Form } from '../../helpers'
import './WorkSpace.scss'

const Workspace: React.FC = () => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TodoProps>()

  const { addNewTodo } = React.useContext(TodoContext)

  const onSubmit = (data: TodoProps) => {
    addNewTodo(data)
    reset({
      title: '',
      desc: '',
    })
  }
  
  return (
    <div
      className='workSpace_root'
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className='h1_1'></span>
        <input
          id='standard-basic' 
          placeholder='Загаловок' 
          {...register('title', Form.Options.title)}
          // error={!!errors.title}
          // helperText={errors.title && errors.title.message}
        />
        <span className='h1_2'></span>
        <span style={{
          margin: '20px 0'
        }}>
          <span className='p_1'></span>
          <textarea
            id='standard-basic' 
            placeholder='Начните ввод'  
            {...register('desc', Form.Options.desc)}
            // errors={!!errors.desc}
            // helperText={errors.desc && errors.desc.message}
          />
          <span className='p_2'></span>
        </span>
        <span className='button1'></span>
        <button 
          type='submit'
          className='btn'
        > 
          Добавить
        </button>
        <span className='button2'></span>
      </form>

    </div>
  )
}

export default Workspace
