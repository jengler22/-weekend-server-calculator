const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Global variables to store results.
let results = [];
let resultsHistory = [];

