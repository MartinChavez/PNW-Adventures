import React, {Component} from 'react';
import Dialog, {DialogTitle, DialogContent} from '@material/react-dialog';


type ShareDialogProps = {
    isOpen: boolean;
    closeDialog: () => void;
}

class ShareDialog extends Component<ShareDialogProps> {
    
    render() {
      return (
        <Dialog 
          open={this.props.isOpen} 
          onClose={this.props.closeDialog}>
          <DialogTitle>Select User</DialogTitle>
          <DialogContent>
              {/* <List avatarList>
                {choices.map((choice, i) => (
                  <ListItem key={i} data-mdc-dialog-action={choice}>
                    <ListItemGraphic graphic={
                      <MaterialIcon icon={choice.match(/@/) ? 'person' : 'add'}/>
                    }/>
                    <ListItemText primaryText={choice}/>
                  </ListItem>
                ))
                }
              </List> */}
          </DialogContent>
        </Dialog>
      );
    }
  }

export default ShareDialog;