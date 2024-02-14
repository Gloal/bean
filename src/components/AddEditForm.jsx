import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  RadioGroup,
  Radio,
  FormControlLabel,
  DialogActions,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "../utils/formHelper";
import { styled } from "@mui/material/styles";
import RateReviewIcon from "@mui/icons-material/RateReview";

const AddEditReviewForm = () => {
  const [cafes, setCafes] = useState([]);
  const [open, setOpen] = useState(false);
  const [cafeToReview, setCafeToReview] = useState({
    BusinessName: "",
    YourName: "",
    Rating: "",
    Review: "",
  });

  const { register, handleSubmit } = useForm();

  //get cafes from local storage
  useEffect(() => {
    fetch("/path/to/london_restaurants.json")
      .then((response) => response.json())
      .then((data) => {
        setCafes(data);
        localStorage.setItem("cafes", JSON.stringify(data));
      })
      .catch((error) => {
        console.error("Error fetching cafes:", error);
      });
  }, []);

  //open review form 
  const handleReviewOpen = () => {
    setOpen(true);
  };

  //populate businessNames for sugestions
  const cafeSuggestions = cafes.map((cafe) => cafe.BusinessName);

  // close the form modal
  const handleClose = () => {
    setOpen(false);
  };

  // save new review 
  const submitHandler = (data) => {
    const { BusinessName, Rating, Review, YourName } = data;
    const existingCafeIndex = cafes.findIndex(
      (cafe) => cafe.BusinessName === BusinessName
    );

    if (existingCafeIndex !== -1) {
      const updatedCafes = [...cafes];
      updatedCafes[existingCafeIndex].Reviews.push({
        RatingValue: parseInt(Rating),
        Review: Review,
        YourName: YourName,
      });
      updatedCafes[existingCafeIndex].NumOfReviews += 1;
      setCafes(updatedCafes);
      localStorage.setItem("cafes", JSON.stringify(updatedCafes));
    } else {
      // save new cafe
      // get cafe data from mapbox
      const newCafe = {
        _id: generateUniqueId(),
        BusinessName: BusinessName,
        Reviews: [
          {
            RatingValue: parseInt(Rating),
            Review: Review,
            YourName: YourName,
          },
        ],
        NumOfReviews: 1,
      };
      const updatedCafes = [...cafes, newCafe];
      setCafes(updatedCafes);
      localStorage.setItem("cafes", JSON.stringify(updatedCafes));
    }
    handleClose();
  };

  const AddReviewButton = styled(Button)(({ theme }) => ({
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 2000,
    color: "#FFECB3",
    fontWeight: "bold",
    border: "2px solid",
    backgroundColor: "#210c02",
    fontFamily: "cursive",
    padding: "10px",
    "&:hover": {
      backgroundColor: "#170801",
    },
  }));

  const ReviewCard = ({ cafeName, review }) => {
    return (
      <div className="coffee-card" id="trending" style={{ margin: "10px" }}>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent className="card-content">
            <Typography gutterBottom variant="h5" component="div">
              Cafe Name: {cafeName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span style={{ fontWeight: "bold" }}>Review:</span> {review.Review}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <span style={{ fontWeight: "bold" }}>Reviewer:</span>{" "}
              {review.YourName}
            </Typography>
          </CardContent>
        </Card>
      </div>
    );
  };  

  return (
    <React.Fragment>
      <AddReviewButton variant="contained" onClick={handleReviewOpen}>
        <RateReviewIcon className="navbar-icon" />
        Add Review
      </AddReviewButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Review</DialogTitle>
        <form onSubmit={handleSubmit(submitHandler)}>
          <DialogContent>
            <TextField
              {...register("BusinessName")}
              label="Cafe Name"
              fullWidth
              name="BusinessName"
              value={cafeToReview.BusinessName}
              onChange={(e) =>
                setCafeToReview((prevState) => ({
                  ...prevState,
                  BusinessName: e.target.value,
                }))
              }
            />
            <TextField
              {...register("YourName")}
              label="Your Name"
              fullWidth
              value={cafeToReview.YourName}
              onChange={(e) =>
                setCafeToReview((prevState) => ({
                  ...prevState,
                  YourName: e.target.value,
                }))
              }
            />
            <RadioGroup
              row
              required
              id="rating"
              name="Rating"
              label="Rating"
              fullWidth
              {...register("Rating")}
              value={cafeToReview.Rating}
              onChange={(e) =>
                setCafeToReview((prevState) => ({
                  ...prevState,
                  Rating: e.target.value,
                }))
              }
            >
              <FormControlLabel value="1" control={<Radio />} label="1" />
              <FormControlLabel value="2" control={<Radio />} label="2" />
              <FormControlLabel value="3" control={<Radio />} label="3" />
              <FormControlLabel value="4" control={<Radio />} label="4" />
              <FormControlLabel value="5" control={<Radio />} label="5" />
            </RadioGroup>
            <TextField
              {...register("Review")}
              variant="standard"
              label="Review"
              multiline
              rows={2}
              fullWidth
              value={cafeToReview.Review}
              onChange={(e) =>
                setCafeToReview((prevState) => ({
                  ...prevState,
                  Review: e.target.value,
                }))
              }
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button type="submit" color="secondary">
              Submit Review
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {cafes.map((cafe) =>
        cafe.Reviews.map((review, index) => (
          <ReviewCard key={index} cafeName={cafe.BusinessName} review={review} />
        ))
      )}
    </React.Fragment>
  );
};

export default AddEditReviewForm;
