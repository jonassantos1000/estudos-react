import { useState } from 'react'

import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography/Typography'
import TableContainer from '@mui/material/TableContainer/TableContainer'
import Table from '@mui/material/Table/Table'
import TableBody from '@mui/material/TableBody/TableBody'
import { Button, ButtonGroup, TextField } from '@mui/material'
import { Tarefa } from '../type'
import ToDoItem from './ToDoItem'


function ToDo() {

  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [countKey, setCountKey] = useState<number>(0)
  const [nomeTarefa, setNomeTarefa] = useState<string>('')

  const addTask = () => {

    if (nomeTarefa?.trim()){
      
      setCountKey(countKey + 1)

      const novaTarefa: Tarefa = {id: countKey, descricao: nomeTarefa}
      
      setTarefas([...tarefas, novaTarefa])

      setNomeTarefa('')
    }
  }

  const handleOnChangeNameTask = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNomeTarefa(event.target.value)
  }

  const handleRemoveTask =  (id: number) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id != id))
  }

  return (
    <Grid container gap={3} justifyContent="center" display='flex' flexDirection='column' alignContent='center'>

      <Grid item xs={12} md={5}>
        <Typography>To-do List</Typography>
      </Grid>

      <Grid item xs={12} md={5}>
        <TextField variant="standard" label="Task" onChange={handleOnChangeNameTask} value={nomeTarefa}/>
      </Grid>

      <Grid item xs={12} md={4}>
        {
          <TableContainer>
            <Table size='medium'>
              <TableBody>
                {
                  tarefas && tarefas.map(tarefa => (

                    <ToDoItem 
                      tarefa={tarefa}
                      onClickHandle={handleRemoveTask}
                    />
                    
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        }
      </Grid>

      <Grid item xs={12} md={4}>
        <ButtonGroup>
          <Button variant="text" onClick={addTask}>
            Adicionar
          </Button>
        </ButtonGroup>
      </Grid>


    </Grid>
  )
}

export default ToDo
