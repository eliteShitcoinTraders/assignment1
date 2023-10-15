import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import NaviBar from './components/header.js';
import ImageSlider from './components/imgslider.js';
import SearchBar from './components/searchBar.jsx';
import SearchResultList from './components/searchResultList.jsx';
import NotableRow from './components/notableRow.jsx';
import FooterMain from './components/footer.jsx';
import './components/css/itemcard.css';
import axios from 'axios';


{/* 1. CSS Styles */}
const containerStyles = {
    width: "100%",
    height: "700px",
    margin: "0 auto"
};

const headerStyle = {
    fontSize: "25px",
    textAlign: "left",
    marginLeft: "40px",
    fontWeight: "700",
    marginTop: "10px",
};

{/*2. Axios Connections to DB */}
export default function BasicGrid() {
    // Notable Collection
    const [result, setResults] = React.useState([]);

    // Fetch Yoda data
    const [yodainfo, setYoda] = useState([]);
    useEffect(() => {
        const API_URL = 'http://127.0.0.1:8000/yoda/';
        axios.get(API_URL)
            .then(response => {
                setYoda(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching data:", error);
            });
    }, []);

    // Fetch Cars data
    const [carinfo, setCar] = useState([]);
    useEffect(() => {
        const API_URL = 'http://127.0.0.1:8000/cars/';
        axios.get(API_URL)
            .then(response => {
                setCar(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching data:", error);
            });
    }, []);

    // Fetch Animals data
    const [animalinfo, setAnimals] = useState([]);
    useEffect(() => {
        const API_URL = 'http://127.0.0.1:8000/animals/';
        axios.get(API_URL)
            .then(response => {
                setAnimals(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching data:", error);
            });
    }, []);

{/* Returning information from database onto webpage */}
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={12}>
                    {/* Navigation Bar */}
                    <NaviBar />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    <hr />
                    {/* Search functionalities */}
                    <SearchBar setResults={setResults} />
                    <SearchResultList result={result} />
                    <hr />
                </Grid>

                <Grid item xs={12} sm={12} md={12}>
                    {/* Image Slide show */}
                    <div style={containerStyles}>
                        {yodainfo && yodainfo.length > 0 && <ImageSlider slides={yodainfo} />}
                    </div>
                </Grid>
            </Grid>
            <hr></hr>
            {/* Horizontal Entry */}
            <Grid container spacing={2}>
                <div style={headerStyle}>
                    Notable Collection
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <NotableRow cardinfo={yodainfo} />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <div style={headerStyle}>
                    Top Collector Buys Today
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <NotableRow cardinfo={carinfo} />
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
                <div style={headerStyle}>
                    Trending in Art
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <NotableRow cardinfo={animalinfo} />
            </Grid>

            <Grid item xs={12} sm={12} md={12}>

            </Grid>

            <Grid container spacing={2}>
                <div style={headerStyle}>
                    Limited Edition
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={12}>
                <NotableRow cardinfo={yodainfo} />
            </Grid>
            <FooterMain />
        </Box>
    );
}
