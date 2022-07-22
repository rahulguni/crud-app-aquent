import {Dialog, DialogTitle, DialogContent} from '@mui/material';

export default function Popup(props) {
    const {title, children, openPopup} = props;

    return(
        <Dialog open={openPopup}>
            <DialogTitle alignContent="center"> {title} </DialogTitle>
            <DialogContent>
                <div>
                    {children}
                </div>
            </DialogContent>
        </Dialog>
    )
}