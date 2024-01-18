import { useState } from 'react'

import './App.css'
import Grid from '@mui/material/Grid/Grid'
import Typography from '@mui/material/Typography/Typography'
import TableContainer from '@mui/material/TableContainer/TableContainer'
import TableRow from '@mui/material/TableRow/TableRow'
import Table from '@mui/material/Table/Table'
import TableCell from '@mui/material/TableCell/TableCell'
import TableBody from '@mui/material/TableBody/TableBody'
import { Button, ButtonGroup, TextField } from '@mui/material'

interface Tarefa{
  id: number,
  descricao: string
}

function App() {

  const [tarefas, setTarefas] = useState<Tarefa[]>([])
  const [countKey, setCountKey] = useState<number>(0)
  const [nomeTarefa, setNomeTarefa] = useState<string>('')

  const adicionarTarefa = () => {
    
    setCountKey(countKey + 1)

    const novaTarefa: Tarefa = {id: countKey, descricao: nomeTarefa}
    
    setTarefas([...tarefas, novaTarefa])
  }

  const handleNomeTarefa = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setNomeTarefa(event.target.value)
  }

  return (
    <Grid container gap={3} justifyContent="center" display='flex' flexDirection='column' alignContent='center'>

      <Grid item xs={12} md={5}>
        <Typography>To-do List</Typography>
      </Grid>

      <Grid item xs={12} md={5}>
        <TextField variant="standard" label="Task" onChange={handleNomeTarefa}/>
      </Grid>

      <Grid item xs={12} md={4}>
        {
          <TableContainer>
            <Table size='medium'>
              <TableBody>
                {
                  tarefas && tarefas.map(tarefa => (
                    <TableRow key={tarefa.id}>
                      <TableCell>
                        {tarefa.descricao}
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </TableContainer>
        }
      </Grid>

      <Grid item xs={12} md={4}>
        <ButtonGroup>
          <Button variant="text" onClick={adicionarTarefa}>
            Adicionar
          </Button>
        </ButtonGroup>
      </Grid>


    </Grid>
  )
}

export default App
