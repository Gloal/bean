import React, { useState, useEffect } from "react";
import { Card, CardContent, Typography } from "@mui/material";

const RenderReviewCard = () => {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const storedCafes = localStorage.getItem("cafes");
    if (storedCafes) {
      setCafes(JSON.parse(storedCafes));
    }
  }, []);

  return (
    <div>
      {cafes.map((cafe) =>
        cafe.Reviews.map((review, index) => (
          <div key={index} className="coffee-card" id="trending" style={{ margin: "10px" }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div">
                  Cafe Name: {cafe.BusinessName}
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
        ))
      )}
    </div>
  );
};

export default RenderReviewCard;
