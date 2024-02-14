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
import data from "../data/london_restaurants.json";
import { styled } from "@mui/material/styles";
import RateReviewIcon from "@mui/icons-material/RateReview";

const AddEditReviewForm = () => {
  const [cafes, setCafes] = useState([]);
  const [open, setOpen] = useState(false);
  const [cafeSelection, setCafeSelection] = useState("");

  const [cafeToReview, setCafeToReview] = useState({
    _id: "",
    BusinessName: "",
    Reviews: [],
    AddressLine2: "London",
    PostCode: "E1 8AX",
    RatingValue: "3",
    Geocode_Longitude: -0.07253400236368,
    Geocode_Latitude: 51.5112075805664,
    AddressLine3: "",
    imageUrl: "src/assets/Images/copper-coffee-e1.jpg",
    Review: "",
    Website: "https://www.facebook.com/p/Copper-Coffee-100066731401217/",
    YourName: "", // add this line
    Rating: "", // add this line
  });

  const { register, handleSubmit } = useForm();

  //get cafes from local storage
  useEffect(() => {
    const storedCafes = localStorage.getItem("cafes");
    if (storedCafes) {
      setCafes(JSON.parse(storedCafes));
    } else {
      setCafes(data);
      localStorage.setItem("cafes", JSON.stringify(data));
    }
  }, []);

  //populate businessNames for sugestions
  const cafeSuggestions = cafes.map((cafe) => cafe.BusinessName);

  //open review form
  const handleReviewOpen = () => {
    setOpen(true);
  };

  //close the form modal
  const handleClose = () => {
    console.log("review closed");
    setOpen(false);
  };

  //save new review
  const submitHandler = (data) => {
    const { BusinessName, Rating, Review, YourName } = data;
    console.log(BusinessName, Rating, Review);
  
    const existingCafeIndex = cafes.findIndex(
      (cafe) => cafe.BusinessName === BusinessName
    );
    console.log("Received review form");

    if (existingCafeIndex !== -1) {
      console.log(existingCafeIndex);
      //update existing cafe
      const updatedCafes = [...cafes];
      updatedCafes[existingCafeIndex].Reviews.push({
        rating: Rating,
        review: Review,
        reviewer: YourName,
      });
      updatedCafes[existingCafeIndex].NumOfReviews += 1;

      setCafes(updatedCafes);
    localStorage.setItem("cafes", JSON.stringify(updatedCafes)); // Update local storage
  } else {
    //save new cafe
    //get cafe data from mapbox
    const newCafe = {
      _id: generateUniqueId(),
      BusinessName: BusinessName,
      AddressLine2: "test place",
      PostCode: "SE20 7HW",
      RatingValue: Rating,
      Geocode_Longitude: -0.056771,
      Geocode_Latitude: 51.417127,
      AddressLine3: "London",
      Reviews: [{ rating: Rating, review: Review, reviewer: YourName }],
      Rating: Rating,
      NumOfReviews: 1,
    };

    const updatedCafes = [...cafes, newCafe];
    setCafes(updatedCafes);
    localStorage.setItem("cafes", JSON.stringify(updatedCafes)); // Update local storage
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

  const CenteredButton = styled("div")({
    display: "flex",
    justifyContent: "center",
    marginTop: "1rem",
    marginBottom: "4rem",
  });

  //trying to set the button color to something different but it changes the whole page brown
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: brown[500],
    "&:hover": {
      backgroundColor: brown[700],
    },
  }));

  const ReviewCard = ({ review }) => {
    return (
      <Card
        sx={{
          backgroundColor: "#FFF3E0",
          color: "#4E342E",
          marginBottom: "1rem",
        }}
      >
        <CardContent>
          <Typography variant="h5" component="div">
            {review.BusinessName}
          </Typography>
          <Typography variant="body2">Rating: {review.rating}</Typography>
          <Typography variant="body2">Review: {review.review}</Typography>
        </CardContent>
      </Card>
    );
  };

  return (
    <React.Fragment>
      <AddReviewButton
        id="addreview"
        variant="contained"
        onClick={handleReviewOpen}
      >
        <RateReviewIcon className="navbar-icon" />
        Add Review
      </AddReviewButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        sx={{
          "& .MuiPaper-root": {
            color: "#170801",
            background: "#FFECB3",
          },
        }}
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
              style={{ marginBottom: "1rem" }}
              onChange={(e) =>
                setCafeToReview((prevState) => ({
                  ...prevState,
                  BusinessName: e.target.value,
                }))
              }
              InputProps={{
                autoComplete: "new-password",
                list: "cafeSuggestions",
              }}
            />
            <datalist id="cafe-suggestions">
              {cafeSuggestions.map((cafe) => (
                <option
                  key={cafe}
                  value={cafe}
                  onClick={() => cafeSelection(cafe)}
                />
              ))}
            </datalist>
            <TextField
              {...register("YourName")}
              label="Your Name"
              fullWidth
              style={{ marginBottom: "2rem" }}
              value={cafeToReview.YourName || ""}
              onChange={(e) =>
                setCafeToReview((prevState) => ({
                  ...prevState,
                  YourName: e.target.value,
                }))
              }
            />
            <RadioGroup
              autoFocus
              row
              required
              id="rating"
              label="Rating"
              fullWidth
              variant="standard"
              {...register("Rating")}
              value={cafeToReview.Rating || ""}
              style={{ marginLeft: "10px" }}
              onChange={(e) => {
                console.log("Selected rating:", e.target.value);
                setCafeToReview((prevState) => ({
                  ...prevState,
                  Rating: e.target.value,
                }));
              }}
            >
              <Typography style={{ marginRight: "2rem" }}> Rating</Typography>
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
              margin="dense"
              value={cafeToReview.Review}
              style={{ marginLeft: "10px" }}
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

      {cafes
        .slice(-1)
        .map((cafe) =>
          cafe.Reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))
        )}
    </React.Fragment>
  );
};

export default AddEditReviewForm;
