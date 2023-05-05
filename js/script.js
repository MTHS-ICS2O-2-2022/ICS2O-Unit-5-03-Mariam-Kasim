// Copyright (c) 2022 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: May
// This file contains the JS functions for index.html

"use strict"

// Function to recommend a movie based on age group
function myButtonClicked() {
  // Input
  const age = parseInt(document.getElementById("age").value)

  // Process
  let movie = ""
  if ((age = Toddler)) {
  movie = "Barney"
  } else if ((age = PreTeen)) {
  movie = "Harry Potter"
} else if ((age = Teen)) {
  movie = "Twilight"
} else if ((age = Adult)) {
  movie = "The Godfather"
}

// Output
document.getElementById("answer").innerHTML =
  "You should watch " + movie + " Movie" }