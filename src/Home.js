import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import ReactCardFlip from "react-card-flip";

export function Home() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));

  const [data, setData] = useState([
    {
      icon: "",
      title: "Wikidata Todo",
      description: "Shows you little things you can do on Wikidata",
      isFlipped: false
    },
    {
      icon: "",
      title: "Find duplicate items",
      description: "Find duplicate items on Wikidata, via labels/aliases",
      isFlipped: false
    },
    {
      icon: "",
      title: "Copyvios",
      description: "Detects copyright violations in pages",
      isFlipped: false
    }
  ]);

  function handleClick(e, index) {
    e.preventDefault();
    let modified_data = [...data];
    modified_data[index]["isFlipped"] = !modified_data[index]["isFlipped"];
    setData(modified_data);
  }

  return (
    <div style={{ marginTop: "5em" }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {data.map((tool, index) => (
            <Grid item xs={4} key={index}>
              <ReactCardFlip
                isFlipped={data[index]["isFlipped"]}
                flipDirection="vertical"
              >
                <Item onClick={(e) => handleClick(e, index)}>
                  This is the front of the card
                </Item>
                <Item onClick={(e) => handleClick(e, index)}>
                  This is the back of the card.
                </Item>
              </ReactCardFlip>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
