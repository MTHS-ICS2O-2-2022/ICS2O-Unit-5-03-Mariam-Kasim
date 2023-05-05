// Copyright (c) 2022 Mariam Kasim All rights reserved
//
// Created by: Mariam Kasim
// Created on: May
// This file contains the JS functions for index.html

"use strict"

  // Function to recommend a movie based on age group
  function myButtonClicked() {
  // input
  const age = parseInt(document.getElementById("age").value);
  
  // process
  if (age >= 17){
    // output
    document.getElementById("answer").innerHTML = "You can see an R movie alone."
  } else if (age >= 13) {
    // output
    document.getElementById("answer").innerHTML = "You can see a PG-13 movie alone."
  } else if (age >= 5) {
    //output
    document.getElementById("answer").innerHTML = "You can see a G or PG movie alone."
  } else {
    // output
    document.getElementById("answer").innerHTML = "You are too young for most things."
  }
}
