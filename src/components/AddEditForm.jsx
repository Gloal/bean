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
} from "@mui/material";
import { useForm } from "react-hook-form";
import { generateUniqueId } from "../utils/formHelper";
import data from "../data/london_restaurants.json";
import { styled } from "@mui/material/styles";

import { cafeSharp } from "ionicons/icons";
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
    Review:"",
    Website: "https://www.facebook.com/p/Copper-Coffee-100066731401217/",
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

    const existingCafeIndex = cafes.findIndex((cafe) => cafe.BusinessName === BusinessName);
    console.log("Received review form");

    if (existingCafeIndex !== -1) {
      //update existing cafe
      const updatedCafes = [...cafes];
      updatedCafes[existingCafeIndex].Reviews.push({                  
                rating: Rating,
                review: Review,
                reviewer: YourName,});
      updatedCafes[existingCafeIndex].NumOfReviews  = 1;         

  
      setCafes(updatedCafes);
      localStorage.setItem("cafes", JSON.stringify(updatedCafes));
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
        numberOfreviews: 1,
      };
      setCafes([...cafes, newCafe]);
      localStorage.setItem("cafes", JSON.stringify([...cafes, cafes]));
      handleClose();
    }
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

  return (
    <React.Fragment>
      <AddReviewButton
        id="addreview"
        variant="contained"
        onClick={handleReviewOpen}
      >
        Add Review <RateReviewIcon className="navbar-icon" />
      </AddReviewButton>

      <Dialog
        open={open}
        onclose={handleClose}
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
                }))}
              InputProps={{
                autocomplete: "new-password",
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
            <RadioGroup
              autoFocus
              row
              required
              margin-top="9rem"
              id="rating"
              label="Rating"
              type="string"
              fullWidth
              variant="standard"
              {...register("Rating")}
              value={cafeToReview.Rating}
              onChange={(e) => 
                setCafeToReview((prevState) => ({
                  ...prevState,
                  Rating: e.target.value,
                }))}            >
              {" "}
              Rating
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
              onChange={(e) => 
                setCafeToReview((prevState) => ({
                  ...prevState,
                  Review: e.target.value,
                }))}
            />
            <TextField
              {...register("YourName")}
              label="Your Name"
              fullWidth
              margin="dense"
              value={cafeToReview.YourName}
              onChange={(e) => 
                setCafeToReview((prevState) => ({
                  ...prevState,
                  YourName: e.target.value,
                }))}            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit Review
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
};

export default AddEditReviewForm;
