import * as React from "react";
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

const wrapButton = (Component, action)  => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return function (props) {

        return (
            <React.Fragment>
                <Component action={handleClickOpen} {...props} />
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                >
                    <DialogTitle id="alert-dialog-title">{"Вы точно хотите это сделать?"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Нет
                        </Button>
                        <Button onClick={action} color="primary" autoFocus>
                            Да
                        </Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
            )

    }
};

export default wrapButton;