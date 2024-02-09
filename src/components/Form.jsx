import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Avatar from "@mui/joy/Avatar";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  //open dialg when button is clicked
  const handleReviewOpen = () => {
    setOpen(true);
  };

  //close the form modal 
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleReviewOpen}>
        Open form dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email);
            handleClose();
          },
        }}
      >
        <DialogTitle>Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To submit a review, start by searching for your cafe.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label=""
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Cafe Name"
            type="string"
            fullWidth
            variant="standard"
          />
          <Select
            defaultValue="1"
            componentsProps={{
              listbox: {
                sx: {
                  "--List-decorator-size": "45px",
                },
              },
            }}
            sx={{
              "--List-decorator-size": "45px",
              minWidth: 240,
            }}
          >
            <Option value="1">
              <ListItemDecorator>
                <Avatar size="sm" />
              </ListItemDecorator>
              Chevrolet
            </Option>
            <ListDivider role="none" inset="startContent" />
            <Option value="2">
              <ListItemDecorator>
                <Avatar size="sm" />
              </ListItemDecorator>
              Honda
            </Option>
            <ListDivider role="none" inset="startContent" />
            <Option value="3">
              <ListItemDecorator>
                <Avatar size="sm" />
              </ListItemDecorator>
              Nissan
            </Option>
            <ListDivider role="none" inset="startContent" />
            <Option value="4">
              <ListItemDecorator>
                <Avatar size="sm" />
              </ListItemDecorator>
              Ford
            </Option>
            <ListDivider role="none" inset="startContent" />
            <Option value="5">
              <ListItemDecorator>
                <Avatar size="sm" />
              </ListItemDecorator>
              Fiat
            </Option>
          </Select>

          <TextField
            autoFocus
            required
            margin="dense"
            id="review"
            name="review"
            label="Review"
            type="string"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            name="name"
            label="Your Name"
            type="string"
            fullWidth
            requires
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Submit Review</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
