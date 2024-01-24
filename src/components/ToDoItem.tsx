import TableCell from "@mui/material/TableCell/TableCell";
import { Tarefa } from "../type";
import TableRow from "@mui/material/TableRow/TableRow";
import Typography from "@mui/material/Typography/Typography";
import Button from "@mui/material/Button/Button";

function ToDoItem({tarefa, onClickHandle}: {tarefa: Tarefa; onClickHandle: (tarefaId: number) => void}){
    return (
        <TableRow key={tarefa.id}>

            <TableCell>
            <Typography>{tarefa.descricao}</Typography>
            </TableCell>

            <TableCell >
                <Button 
                    onClick={() => onClickHandle(tarefa.id)}
                    variant="outlined" 
                    size='small'>
                    <Typography>X</Typography>
                </Button>
            </TableCell>

        </TableRow>
    )
}

export default ToDoItem