import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./listing.scss";
export default function Listing() {
  const [MagazinesList, setMagazines] = useState();
  const [Waiting, setWaiting] = useState(true);

  const classes = useStyles();
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((result) => {
        setMagazines(result);
        setWaiting(false);
      });
  }, []);
  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.grid}
      >
        {Waiting ? (
          "Loading"
        ) : (
          <Magazines classes={classes} MagazinesList={MagazinesList} />
        )}
      </Grid>
    </div>
  );
}

const Magazines = ({ classes, MagazinesList }) => {
  return (
    <>
      {MagazinesList.map((item) => (
        <Grid item md={item.prem === true ? 12 : 4} xs={12}>
          <Card classes={classes} item={item}></Card>
        </Grid>
      ))}
    </>
  );
};

const Card = ({ key, item, classes }) => {
  return (
    <div class="container page-wrapper">
      <div class="page-inner">
        <div class="row">
          <div class="el-wrapper">
            <div class="box-up">
              <img class="img" src={item.image} alt="" />
              <div class="img-info">
                <div class="info-inner">
                  <span class="p-name">{item.title}</span>
                  {/* <span class="p-company">Yeezy</span> */}
                </div>
                <div class="a-size">
                  Category : <span class="size">{item.category}</span>
                </div>
              </div>
            </div>

            <div class="box-down">
              <div class="h-bg">
                <div class="h-bg-inner"></div>
              </div>

              <a class="cart" href="#">
                <span class="price">Click For </span>
                <span class="add-to-cart">
                  <span class=" price">See Shop</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    margin: "0px",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
