import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function AddReviewButton(addReview) {
  const [open, setOpen] = React.useState(false); 
  
  //open dialog when button is clicked
  const handleReviewOpen = () => {
    setOpen(true);
  }; 
  //close the form modal
  const handleClose = () => {
    console.log("buttonClicked");
    setOpen(false);
  };

  const onSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const formJson = Object.fromEntries(formData.entries());
      const name = formJson.name;
      const rating = formJson.rating;
      console.log("Rating: "+rating )
      const review = formJson.review;                                                                                                                                                                                  const existingReviews = JSON.parse(localStorage.getItem('reviews')) || [];
      const newReview = { name, rating, review };
      const updatedReviews = [...existingReviews, newReview];
      console.log("UpdatedReviews")
      console.log(updatedReviews)
      localStorage.setItem('reviews', JSON.stringify(updatedReviews));  
      handleClose();
    };
    
  const AddReviewButton = styled(Button)(({ theme }) => ({
    position:"fixed", top: 0, right: 0, zIndex: 2000 ,
    color: "#FFECB3",
    fontWeight: "bold",
    border: "2px solid",
    backgroundColor: "#210c02",
    fontFamily:'cursive',
    padding: "10px",
    "&:hover": {
      backgroundColor: "#170801",
    },
  }));
/*
  const CenteredButton = styled("div")({
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "4rem",
  });
*/
  return (
    <React.Fragment>
        <AddReviewButton
          id="addreview"
          variant="contained"
          onClick={handleReviewOpen}
        >
          Add Review
        </AddReviewButton>

      <Dialog open={open} component="form">
        <DialogTitle>Review</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To submit a review, start by searching for your cafe.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="cafe-name"
            name="cafe-name"
            label="Cafe Name"
            type="string"
            fullWidth
            variant="standard"
          />{" "}
          <RadioGroup
            row
            autoFocus
            required
            margin="1rem"
            id="rating"
            name="rating"
            type="string"
            fullWidth
            variant="standard"
          >
            {" "}
            Rating
            <FormControlLabel value="1" control={<Radio />} label="1" />
            <FormControlLabel value="2" control={<Radio />} label="2" />
            <FormControlLabel value="3" control={<Radio />} label="3" />
            <FormControlLabel value="4" control={<Radio />} label="4" />
            <FormControlLabel value="5" control={<Radio />} label="5" />
          </RadioGroup>{" "}
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
            id="reviewer-name"
            name="reviewer-name"
            label="Your Name"
            type="string"
            fullWidth
            required
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" onSubmit={onSubmit}>
            Submit Review
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
