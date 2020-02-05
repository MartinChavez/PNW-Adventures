import React, {Component} from 'react';
import Dialog, {DialogTitle, DialogContent} from '@material/react-dialog';
import TextField, {HelperText, Input} from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

type ShareDialogProps = {
    isOpen: boolean;
    closeDialog: () => void;
}

class ShareDialog extends Component<ShareDialogProps> {

  getInputValue = () => {
    return window.location.href;
  }

    render() {
      return (
        <Dialog 
          open={this.props.isOpen} 
          onClose={this.props.closeDialog}>
          <DialogTitle>Share</DialogTitle>
          <DialogContent>
          <TextField
          onTrailingIconSelect={() => this.setState({value: ''})}
          trailingIcon={<MaterialIcon role="button" icon="delete"/>}
        ><Input
           value={this.getInputValue()} readOnly/>
        </TextField>
          </DialogContent>
        </Dialog>
      );
    }
  }

export default ShareDialog;