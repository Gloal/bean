import React, { useState } from "react";
import coffeeImage from "./../assets/Images/coffee-jumbotron-img.jpg";
import "./Jumbotron.css";
import coffeeShopsData from "./../data/london_restaurants.json";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Jumbotron = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSearch = () => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      handleOpen();
      return;
    }

    const filteredShops = coffeeShopsData.filter((shop) => {
      const { BusinessName, PostCode } = shop;
      const searchTerm = searchQuery.toLowerCase();
      return (
        BusinessName.toLowerCase().includes(searchTerm) ||
        PostCode.toLowerCase().includes(searchTerm)
      );
    });
    setSearchResults(filteredShops);
    handleOpen();
  };

  return (
    <div>
      <div className="jumbotron" id="jumboid">
        <img src={coffeeImage} alt="Coffee Shop" className="jumbotron-image" />
        <div className="overlay-text">
          <h1 className="display-4">Your Guide to Coffee Culture!</h1>
          <p className="lead">Discover the best coffee shops in town.</p>
          <div className="search-bar">
            <input
              type="text"
              className="form-control"
              placeholder="Search coffee shops by name or postcode..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <br></br>
            <Button
              className="change-button"
              variant="contained"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="custom-box">
          <Typography variant="h6" component="h2"></Typography>
          <div>
            {searchResults.map((shop) => (
              <div key={shop._id}>
                <h2>{shop.BusinessName}</h2>
                <p>
                  {shop.AddressLine2}, {shop.PostCode}
                </p>
                <p>Rating: {shop.RatingValue}</p>
                {shop.imageUrl && (
                  <img
                    src={shop.imageUrl}
                    alt={shop.BusinessName}
                    className="modal-image"
                  />
                )}
                <h3>Reviews:</h3>
                {shop.Reviews.map((review, index) => (
                  <p key={index}>- {review.review}</p>
                ))}
              </div>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Jumbotron;
