import React, { Component } from 'react';
import Dialog, { DialogTitle, DialogContent } from '@material/react-dialog';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';
import copyTextToClipboard from './copyTextToClipboard'
import { Snackbar } from '@material/react-snackbar';

type ShareDialogProps = {
  isOpen: boolean;
  closeDialog: () => void;
}

type ShareDialogState = {
  snackBarIsOpen: boolean
}

class ShareDialog extends Component<ShareDialogProps, ShareDialogState> {

  constructor(props: ShareDialogProps) {
    super(props);
    this.state = {
      snackBarIsOpen: false
    }
  }

  getInputValue = () => {
    return window.location.href;
  }

  copyClick = () => {
    this.setState({
      snackBarIsOpen: true
    });
    copyTextToClipboard(window.location.href);
  }

  onSnackBarClose = () => {
    this.setState({
      snackBarIsOpen: false
    });
  }

  render() {
    return (
      <>
        <Dialog
          open={this.props.isOpen}
          onClose={this.props.closeDialog}>
          <DialogTitle>Share</DialogTitle>
          <DialogContent>
            <TextField
            ><Input
                value={this.getInputValue()} readOnly />
            </TextField>
            <Button onClick={this.copyClick}>
              Copy
             </Button>
          </DialogContent>
        </Dialog>
        {this.state.snackBarIsOpen && <Snackbar message="URL copied to clipboard" onClose={this.onSnackBarClose} />}
      </>
    );
  }
}

export default ShareDialog;