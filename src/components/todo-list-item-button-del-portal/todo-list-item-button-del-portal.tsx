import * as React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import {Portal} from "@material-ui/core";

const TodoListItemButtonDelPortal = ({action}) => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <span>
            <button type="button" className="button button-del"
                    onClick={handleClickOpen}>
                <i className="fa fa-trash-alt" />
            </button>

            <Portal container={document.querySelector("#modal")}>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
            >
                <DialogTitle id="alert-dialog-title">{"Вы действительно хотите удалить"}</DialogTitle>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Нет
                    </Button>
                    <Button onClick={action} color="primary" autoFocus>
                        Да
                    </Button>
                </DialogActions>
            </Dialog>

            </Portal>
        </span>
    )
};

export default TodoListItemButtonDelPortal;

