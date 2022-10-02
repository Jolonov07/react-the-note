import React, { useContext } from 'react'
import { TodoProps } from '../../types'
import { useForm } from 'react-hook-form'
import { Form } from '../../helpers'
import { TodoContext } from '../../context'
import { BiEditAlt as Edit } from 'react-icons/bi'
import { MdOutlineDeleteSweep as Delete } from 'react-icons/md'
import { BsFillBookmarkCheckFill as Checkout, BsCheckAll as Ready } from 'react-icons/bs'
import Tilt from 'react-parallax-tilt'
import './TodoItem.scss'

import {
  Button,
  TextField,
} from '@mui/material'

const TodoItem: React.FC<TodoProps> = ({ id, title, desc, completed }) => {
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<TodoProps>()

  const { toggleCompleted, editTodo, deleteTodo } = useContext(TodoContext)

  const [isShow, setIsShow] = React.useState<boolean>(false)

  const handleChange = () => {
    setIsShow(prev => !prev)
  }

  const onSubmit = (data: TodoProps) => {
    if (!id) return
    editTodo({
      ...data,
      id,
    })
    reset({
      title: '',
      desc: '',
    })
    handleChange()
  }

  return (
    <Tilt className='cardItem'
    >
      <div className='componentEdit'>
        {
          !completed && (
            <Button 
              className='btnEdit'
            >
              {
                isShow ? (
                  <Ready
                    onClick={handleSubmit(onSubmit)}
                    className='icons'
                  />
                ) 
                : 
                (
                  <Edit
                    onClick={handleChange}
                    className='icons'
                  />
                )
              }
            </Button>
          )
        }
      </div>
      <div
        className='card'
        style={{ 
          backgroundColor: `${ completed ? '#90ee90' : '#fff' }`
        }}
      >
        <div className='cardContent'>
            {
              isShow ? (
                <TextField
                  className='textFleld'
                  size="small"
                  label={title}
                  {...register('title', Form.Options.title)}
                  error={!!errors.title}
                  helperText={errors.title && errors.title.message}
                />
              ) 
              : 
              (
                <div className='box'>
                  <p className='h1_1'></p>
                    <span className='title'>{ title }</span>
                  <p className='h1_2'></p>
                </div>
              )
            }
            {
              isShow ? (
                <TextField
                  className='textFleld'
                  size="small"
                  label={desc}
                  {...register('desc', Form.Options.desc)}
                  error={!!errors.desc}
                  helperText={errors.desc && errors.desc.message}
                />
              ) 
              : 
              (
                <span 
                  style={{
                    color: `${completed ? '#fff' : '#333'}`,
                    fontWeight: '300'
                  }}
                >
                  <p className='p_1'></p>
                    <div className='description'>
                      <span>{ desc }</span>
                    </div>
                  <p className='p_2'></p>
                </span>
              )
            }
        </div>
      </div>
      <div 
        className='components'
        style={{ 
          backgroundColor: `${ completed ? '#90ee90' : '#fff' }`
        }}
      >
          <Button 
            className='buttonCheck'
            onClick={() => deleteTodo(id)}
          >
            <Delete
              style={{
                color: `${completed ? '#fff' : '#1976d2'}`,
              }}
              className='deleteIcon'
            />
          </Button>
          <Button 
            className='buttonCheck'
            onClick={() => toggleCompleted(id)}
          >
            <Checkout
              style={{
                color: `${completed ? '#fff' : '#1976d2'}`,
              }}
              className='checkIcon'
            />
          </Button>
        </div>
    </Tilt>
  )
}

export default TodoItem
