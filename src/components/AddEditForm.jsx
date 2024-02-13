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
import { cafeSharp } from "ionicons/icons";

const AddEditReviewForm = () => {
  const { cafes, setCafes } = useState(data);
  const { register, handleSubmit } = useForm();
  const [open, setOpen] = useState(false);


//get cafes from local storage
  useEffect(() => {
    const storedCafes = localStorage.getItem("cafes");
    if (storedCafes) {
      setRestaurantData(JSON.parse(storedCafes));
    } else {
      setRestaurantData(londonRestaurantData);
      localStorage.setItem("cafes", JSON.stringify(londonRestaurantData));
    }
  }, []);

  //close review from
  const handleReviewOpen = () => {
    setOpen(true);
  };


  //save new review
  const submitHandler = (data) => {
    const { BusinessName, Rating, Review, YourName } = data;

    const existingCafe = cafes.find((cafe) => cafe.name === BusinessName);
    console.log("Received review form");

    if (existingCafe) {
      //update old cafe
      const updatedCafes = cafes.map((cafe) =>
        cafe.BusinessName === BusinessName
          ? {
              ...cafe,
              Reviews: [
                ...cafe.Reviews,
                {
                  rating: Rating,
                  review: Review,
                  numberOfreviews: numberOfreviews + 1,
                  reviewer: YourName,
                },
              ],
            }
          : cafe
      );
      setCafes(updatedCafes);
      localStorage.setItem("cafes", JSON.stringify(londonRestaurantData));

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
        Reviews: [{ review: Review, reviewer: YourName }],
        Rating: Rating,
        numberOfreviews: 1,
      };
      setCafes(...cafes, newCafe);
      localStorage.setItem("cafes", JSON.stringify(cafes));

    }
  };

  //close the form modal
  const handleClose = () => {
    console.log("review closed");
    setOpen(false);
  };

  const AddReviewButton = styled(Button)(({ theme }) => ({
    color: "brown",
    fontWeight: "bold",
    backgroundColor: "#FFECB3",
    padding: "10px 50px",
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
      <CenteredButton>
        <AddReviewButton
          id="addreview"
          variant="contained"
          onClick={handleReviewOpen}
        >
          Add Review
        </AddReviewButton>
      </CenteredButton>

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
              onChange={(e) => setSelectedCafe(e.target.value)}
            />
            <RadioGroup
              autoFocus
              row
              required
              margin-top="9rem"
              id="rating"
              name="rating"
              type="string"
              fullWidth
              variant="standard"
              onChange={(e) => setSelectedCafe(e.target.value)}
              {...register("Rating")}
            >
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
              rows={4}
              fullWidth
              onChange={(e) => setSelectedCafe(e.target.value)}
              margin="dense"
            />

            <TextField
              {...register("YourName")}
              label="Your Name"
              fullWidth
              margin="dense"
              onChange={(e) => setSelectedCafe(e.target.value)}
            />
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
