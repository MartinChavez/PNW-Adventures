import React, { Component } from 'react';
import Dialog, { DialogTitle, DialogContent } from '@material/react-dialog';
import TextField, { Input } from '@material/react-text-field';
import Button from '@material/react-button';
import copyTextToClipboard from './copyTextToClipboard'

type ShareDialogProps = {
  isOpen: boolean;
  closeDialog: () => void;
}

class ShareDialog extends Component<ShareDialogProps> {

  getInputValue = () => {
    return window.location.href;
  }
  
  copyClick = () => {
    copyTextToClipboard(window.location.href);
  }

  render() {
    return (
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
    );
  }
}

export default ShareDialog;