import React, { useState, useEffect } from "react";
import { Dialog, DialogTitle, DialogContent, RadioGroup, Radio, FormControlLabel, DialogActions, Button, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { generateUniqueId } from "../utils/formHelper";



const AddEditReviewForm = ({cafes}) => {

    const { register, handleSubmit } = useForm();
    const [open, setOpen] = React.useState(false);
    

    const submitHandler = (data) => {
      const {BusinessName, Rating, Review, YourName } = data;

      const existingCafe = cafes.find((cafe) => cafe.name === BusinessName);
        
      if(existingCafe){
        //update old cafe
        const updatedCafes = cafes.map((cafe)=> cafe.name === BusinessName? {
          ...cafe, reviews: [...cafe.reviews, {rating: Rating, review: Review, numberOfreviews: numberOfreviews+1, reviewer: YourName }]
        }: cafe
      );
      setCafes(updatedCafes);
      }else {
        //save new cafe
        //get cafe data from mapbox
        
        const newCafe = {
          _id:generateUniqueId(),
          BusinessName: BusinessName,
          AddressLine2: "test place",
          PostCode: "SE20 7HW",
          RatingValue: Rating,
          Geocode_Longitude: -0.056771,
          Geocode_Latitude: 51.417127,
          AddressLine3: "London",
          Reviews:[{review: Review,
                    reviewer: YourName
                    }],
          Rating: Rating,
          numberOfreviews: 1
        }
      }
    };
    
    //close the form modal
    const handleClose =()=>{
      setOpen(false)
    }


    return (
        
        <Dialog open onclose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Review</DialogTitle>
        <form onSubmit={handleSubmit(submitHandler)}>
          <DialogContent>
            <TextField {...register('BusinessName')} label="Cafe Name" fullWidth />
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
          {...register('Rating')}
        > Rating
          <FormControlLabel value="1" control={<Radio />} label="1" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="4" control={<Radio />} label="4" />
          <FormControlLabel value="5" control={<Radio />} label="5" />
        </RadioGroup>
        <TextField {...register('Review')} variant="standard" label="Review" multiline rows={4} fullWidth margin="dense" />

        <TextField {...register('YourName')} label="Your Name" fullWidth margin="dense" />

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
    )
}


export default AddEditReviewForm;