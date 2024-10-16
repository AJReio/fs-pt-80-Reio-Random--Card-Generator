/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["♦", "♥", "♠", "♣"];
const numVal = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
const numericValue = document.querySelector("#mid");
const upperSuit = document.querySelector("#up");
const bottomSuit = document.querySelector("#bot");

function generateRndmNum() {
  numericValue.innerHTML = numVal[Math.floor(Math.random() * numVal.length)];
}

function generateRndmSuit() {
  return suits[Math.floor(Math.random() * suits.length)];
}

function suitColor(color) {
  if (color === "♦" || color === "♥") {
    upperSuit.style.color = "red";
    bottomSuit.style.color = "red";
    numericValue.style.color = "red";
  }
}

function generateRndmCard() {
  generateRndmNum();
  const suit = generateRndmSuit();
  upperSuit.innerHTML = suit;
  bottomSuit.innerHTML = suit;
  suitColor(suit);
}

window.onload = () => {
  generateRndmCard();
};
