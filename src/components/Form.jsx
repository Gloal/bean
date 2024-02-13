import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function AddReviewButton(addReview) {
  const sample_reviews = [
      {
        "_id": "1",
        "business_name": "Beanie Coffee",
        "address_line1": "23 Kensington Square",
        "address_line2": "",
        "city": "London",
        "postcode": "W8 5HN",
        "review_count": 0,
        "rating": 0.0,
        "wifi": true,
        "art": false,
        "seating": "Cozy",
        "vegan": false,
        "outdoor_seating": false,
        "power_outlets": true,
        "is_favorite": false,
        "image_url": "https://example.com/images/beanie-coffee.jpg"
      },
      {
        "_id": "2",
        "business_name": "Espresso Haven",
        "address_line1": "227 Portobello Road",
        "address_line2": "",
        "city": "London",
        "postcode": "W11 1LT",
        "review_count": 18,
        "rating": 3.0,
        "wifi": true,
        "art": true,
        "seating": "Outdoor",
        "vegan": false,
        "outdoor_seating": true,
        "power_outlets": true,
        "is_favorite": true,
        "image_url": "https://example.com/images/espresso-haven.jpg"
      },
      {
        "_id": "3",
        "business_name": "Café Latte",
        "address_line1": "201 Wood Lane",
        "address_line2": "",
        "city": "London",
        "postcode": "W12 7TU",
        "review_count": 45,
        "rating": 3.3,
        "wifi": true,
        "art": false,
        "seating": "Spacious",
        "vegan": false,
        "outdoor_seating": false,
        "power_outlets": true,
        "is_favorite": false,
        "image_url": "https://example.com/images/cafe-latte.jpg"
      }   
    ]


  //const [review, setReview] = useState(localStorage.getItem("reviews")||[])

  const [open, setOpen] = React.useState(false);

  //Gget reviews from localStorage
  const [reviews, setReviews] = useState(localStorage.getItem("reviews") || [])

useEffect(()=>{
  localStorage.setItem("reviews", sample_reviews)
},)

  //open dialg when button is clicked
  const handleReviewOpen = () => {
    setOpen(true);
    console.log(localStorage.getItem("reviews"))
  };

  //close the form modal 
  const handleClose = () => {
    console.log("buttonClicked")
    setOpen(false);
  };

  //handle input
  const handleChange = (event) =>{
    console.log(event.target)
    setReviews(event.target.value)
  }

  const onSubmit = ()=>(event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries(formData.entries());
    const name = formJson.name;
    const rating = formJson.rating;
    const review = formJson.review;
    const newReview = [name, rating, review];
    const old_reviews = JSON.parse(localStorage.getItem("reviews"))
    old_reviews.push(newReview);
    localStorage.setItem("reviews", Json.stringify(old_reviews))
    console.log(email);
    console.log(reviews)
    handleClose();
  }


const AddReviewButton = styled(Button)(({ theme }) => ({
  color: 'brown',
  fontWeight: 'bold',
  backgroundColor:'#FFECB3',
  padding: '10px 50px',
  '&:hover': {
    backgroundColor: '#170801',
  },
}));

const CenteredButton = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
  marginBottom: '4rem',
});


return (
  <React.Fragment>
  <CenteredButton>
    <AddReviewButton variant="contained" onClick={handleReviewOpen}></AddReviewButton>
    <AddReviewButton id="addreview" variant="contained" onClick={handleReviewOpen}>
      Add Review
    </AddReviewButton>
    </CenteredButton>




    <Dialog open={open} component="form"> 
      <DialogTitle>Review</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To submit a review, start by searching for your cafe.
          Current reviews are {localStorage.getItem("reviews")? localStorage.getItem("reviews").length : "not here"}
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
          autoComplete="street-address"
        />
        <RadioGroup
          row
          autoFocus
          required
          margin-top="9rem"
          id="rating"
          name="rating"
          type="string"
          fullWidth
          variant="standard"
        > Rating
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
          <FormControlLabel value="5" control={<Radio />} label="5" />
        </RadioGroup>


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
          onChange={handleChange}
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
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit"  onSubmit={onSubmit()}>Submit Review</Button>
      </DialogActions>
    </Dialog>

  </React.Fragment>
);
}
