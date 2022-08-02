"use strict"

//category arrays
const countries = [
  "AFGHANISTAN",
  "ALBANIA",
  "ALGERIA",
  "ANDORRA",
  "ANGOLA",
  "ANTIGUA",
  "ARGENTINA",
  "ARMENIA",
  "AUSTRALIA",
  "AUSTRIA",
  "AZERBAIJAN",
  "BAHAMAS",
  "BAHRAIN",
  "BANGLADESH",
  "BARBADOS",
  "BARBUDA",
  "BELARUS",
  "BELGIUM",
  "BELIZE",
  "BENIN",
  "BHUTAN",
  "BOLIVIA",
  "BOSNIA",
  "BOTSWANA",
  "BRAZIL",
  "BRUNEI",
  "BULGARIA",
  "BURKINA FASO",
  "BURUNDI",
  "CABO VERDE",
  "CAMBODIA",
  "CAMEROON",
  "CANADA",
  "CHAD",
  "CHILE",
  "CHINA",
  "COLOMBIA",
  "COMOROS",
  "CONGO",
  "CONGO",
  "COSTA RICA",
  "CÔTE D'IVOIRE",
  "CROATIA",
  "CUBA",
  "CYPRUS",
  "CZECHIA",
  "DENMARK",
  "DJIBOUTI",
  "DOMINICA",
  "DOMINICAN REPUBLIC",
  "ECUADOR",
  "EGYPT",
  "EL SALVADOR",
  "EQUATORIAL GUINEA",
  "ERITREA",
  "ESTONIA",
  "ESWATINI",
  "ETHIOPIA",
  "FIJI",
  "FINLAND",
  "FRANCE",
  "GABON",
  "GAMBIA",
  "GEORGIA",
  "GERMANY",
  "GHANA",
  "GREECE",
  "GRENADA",
  "GUATEMALA",
  "GUINEA",
  "GUINEA-BISSAU",
  "GUYANA",
  "HAITI",
  "HERZEGOVINA",
  "HONDURAS",
  "HUNGARY",
  "ICELAND",
  "INDIA",
  "INDONESIA",
  "IRAN",
  "IRAQ",
  "IRELAND",
  "ISRAEL",
  "ITALY",
  "JAMAICA",
  "JAPAN",
  "JORDAN",
  "KAZAKHSTAN",
  "KENYA",
  "KIRIBATI",
  "KUWAIT",
  "KYRGYZSTAN",
  "LAOS",
  "LATVIA",
  "LEBANON",
  "LESOTHO",
  "LIBERIA",
  "LIBYA",
  "LIECHTENSTEIN",
  "LITHUANIA",
  "LUXEMBOURG",
  "MADAGASCAR",
  "MALAWI",
  "MALAYSIA",
  "MALDIVES",
  "MALI",
  "MALTA",
  "MAURITANIA",
  "MAURITIUS",
  "MEXICO",
  "MICRONESIA",
  "MOLDOVA",
  "MONACO",
  "MONGOLIA",
  "MONTENEGRO",
  "MOROCCO",
  "MOZAMBIQUE",
  "MYANMAR",
  "NAMIBIA",
  "NAURU",
  "NEPAL",
  "NETHERLANDS",
  "NEW ZEALAND",
  "NICARAGUA",
  "NIGER",
  "NIGERIA",
  "NORTH KOREA",
  "NORTH MACEDONIA",
  "NORWAY",
  "OMAN",
  "PAKISTAN",
  "PALAU",
  "PALESTINE STATE",
  "PANAMA",
  "PAPUA NEW GUINEA",
  "PARAGUAY",
  "PERU",
  "PHILIPPINES",
  "POLAND",
  "PORTUGAL",
  "QATAR",
  "ROMANIA",
  "RUSSIA",
  "RWANDA",
  "SAINT LUCIA",
  "SAMOA",
  "SAN MARINO",
  "SAUDI ARABIA",
  "SENEGAL",
  "SERBIA",
  "SEYCHELLES",
  "SIERRA LEONE",
  "SINGAPORE",
  "SLOVAKIA",
  "SLOVENIA",
  "SOLOMON ISLANDS",
  "SOMALIA",
  "SOUTH AFRICA",
  "SOUTH KOREA",
  "SOUTH SUDAN",
  "SPAIN",
  "SRI LANKA",
  "SUDAN",
  "SURINAME",
  "SWEDEN",
  "SWITZERLAND",
  "SYRIA",
  "TAJIKISTAN",
  "TANZANIA",
  "THAILAND",
  "TIMOR-LESTE",
  "TOGO",
  "TONGA",
  "TRINIDAD AND TOBAGO",
  "TUNISIA",
  "TURKEY",
  "TURKMENISTAN",
  "TUVALU",
  "UGANDA",
  "UKRAINE",
  "UNITED ARAB EMIRATES",
  "UNITED KINGDOM",
  "UNITED STATES OF AMERICA",
  "URUGUAY",
  "UZBEKISTAN",
  "VANUATU",
  "VENEZUELA",
  "VIETNAM",
  "YEMEN",
  "ZAMBIA",
  "ZIMBABWE"
];
const animals = [
  "DOG",
  "CAT",
  "RABBIT",
  "BIRD",
  "FISH"
];
const leonsboys = [
  "MEMPHIS",
  "NOLAN",
  "CARTER",
  "MATT",
  "BYRON",
  "JACK",
  "CHANCE",
  "LEVI",
  "ROMARIO",
  "DYLAN",
  "TANNER",
  "TY",
  "EVAN",
  "CHAD",
  "CONNOR"
];
const allwords = ["HI",
  "MY",
  "IS",
  "CARTER",
  "THIS ",
  "IS",
  "NOT",
  "ALL",
  "WORDS"
];
const usstates = [
  'ALABAMA',
  'ALASKA',
  'ARIZONA',
  'ARKANSAS',
  'CALIFORNIA',
  'COLORADO',
  'CONNECTICUT',
  'DELAWARE',
  'FLORIDA',
  'GEORGIA',
  'HAWAII',
  'IDAHO',
  'ILLINOIS',
  'INDIANA',
  'IOWA',
  'KANSAS',
  'KENTUCKY',
  'LOUISIANA',
  'MAINE',
  'MARYLAND',
  'MASSACHUSETTS',
  'MICHIGAN',
  'MINNESOTA',
  'MISSISSIPPI',
  'MISSOURI',
  'MONTANA',
  'NEBRASKA',
  'NEVADA',
  'NEW HAMPSHIRE',
  'NEW JERSEY',
  'NEW MEXICO',
  'NEW YORK',
  'NORTH CAROLINA',
  'NORTH DAKOTA',
  'OHIO',
  'OKLAHOMA',
  'OREGON',
  'PENNSYLVANIA',
  'RHODE ISLAND',
  'SOUTH CAROLINA',
  'SOUTH DAKOTA',
  'TENNESSEE',
  'TEXAS',
  'UTAH',
  'VERMONT',
  'VIRGINIA',
  'WASHINGTON',
  'WEST VIRGINIA',
  'WISCONSIN',
  'WYOMING'
];
const provinces = [
  'ALBERTA',
  'BRITISH COLUMBIA',
  'MANITOBA',
  'NEW BRUNSWICK',
  'NEWFOUNDLAND AND LABRADOR',
  'NORTHWEST TERRITORIES',
  'NOVA SCOTIA',
  'NUNAVUT',
  'ONTARIO',
  'PRINCE EDWARD ISLAND',
  'QUEBEC',
  'SASKATCHEWAN',
  'YUKON'
];

//current word
let curword = "";

//error counter
let errCount = 0;

//keyboard layout
let kbr1 = 'QWERTYUIOP';
let kbr2 = 'ASDFGHJKL';
let kbr3 = 'ZXCVBNM';
let kbra = [kbr1, kbr2, kbr3]

function sentencing() {
  
  
  let keybrowstr = "";
  for (let i = 0; i < 3; i++) {
    keybrowstr += `<div class='keyboardrow'></div>`;
  }
  $("#keyboard").html(keybrowstr);
  let kbr = document.getElementsByClassName("keyboardrow");
  // for each keyboard row, add a div with class: 'keyboardBtn' for each letter of the current position
  // of charater at the index of i of keyboard row array
  for (let i = 0; i < 3; i++) {
    let newkbrstr = "";
    let goob = kbra[i];
    console.log(goob);
    for (let j = 0; j < kbra[i].length; j++) {
      let letter = kbra[i].charAt(j);
      console.log(letter);
      newkbrstr += `<input type="button" class='keyboardBtn' value='${letter}' />`
    }
    kbr[i].innerHTML = newkbrstr;
  }

  //disabling buttons until play is clicked
  $(".keyboardBtn").attr("disabled", true);
  
  //hiding resetbtn, hangman
  $('#resetgame').hide();
  $('.hm-bp').css('opacity', '0');


  $('#startgame').on("click", function playgame() {
    let cats = document.getElementsByClassName("catbtn");
    let chk = false;
    for (let i = 0; i < cats.length; i++) {
      if (cats[i].checked) {
        chk = true;
      }
    }
    if (chk === false) {
      alert("Please select a category");
    } else {
      let cat = '';
      curword = "";
      errCount = 0;
      gameStart();
      
      $('#startgame').hide();
      $('#resetgame').show();
    }
  });
  //wtf
  
  
  $('#resetgame').on("click", function () {
    $("#currentWord").html("");
    // $("#currentWord").css("background", "crimson");
    $(".keyboardBtn").attr("disabled", false);
    $(".keyboardBtn").css("background", "revert");
    $('.hm-bp').css('opacity', '0');
    let cat = '';
    curword = "";
    errCount = 0;
    gameStart();
  });
  
  $(".keyboardBtn").on("click", function () {
      let cwls = document.getElementsByClassName("cwlSlot");
      let letter = $(this).val();
      let err = true;
      
      //comparing the clicked letter to each letter in the current word
      //if correct, place letter in correct slot
      for (let i = 0; i < curword.length; i++) {
        if (curword.charAt(i) === letter) {
          cwls[i].innerText = letter;
          err = false;
          
        }
      }
      
      //if correct, change background color of button to green
      //if incorrect, disable button and add to error count
      if (err === true) {
        $(this).attr("disabled", true);
        errCount++;
        punishment(errCount);
      } else {
        $(this).css("background", "lime");
      }
      
      //checking to see if there are any unguessed letters left
      let flag = false;
      for (let i = 0; i < curword.length; i++) {
        if (cwls[i].innerText !== "") {
        } else {
          flag = true;
        }
      }
      
      //if there are no unguessed letters & errcount < 6, call gameover(true)
      //else if there's unguessed letters & errcount >= 6, call gameover(false)
      if (flag === false && errCount < 6) {
        // gameover(true);
        gamewin();
      } else if (flag === true && errCount === 6) {
        // gameover(false);
        gamelose();
      }
  
  });
}

function punishment(ec) {
  switch (ec) {
    case 1:$('#hm-head').css('opacity', '1');break;
    case 2:$('#hm-body').css('opacity', '1');break;
    case 3:$('#hm-arm-L').css('opacity', '1');break;
    case 4:$('#hm-arm-R').css('opacity', '1');break;
    case 5:$('#hm-leg-L').css('opacity', '1');break;
    case 6:$('#hm-leg-R').css('opacity', '1');break;
  }
}

function gameStart() {
  let cats = document.getElementsByClassName("catbtn");
  let cat = '';
  $('.keyboardBtn').attr("disabled", false);
  
  //checking which category was selected
  for (let i = 0; i < cats.length; i++) {
    if (cats[i].checked) {
      cat = cats[i].value;
    }
  }
  
  //choosing random word from chosen category
  curword = getRandomWord(cat);
  
  //setting the letter slots for the current word
  let str = "";
  for (let i = 0; i < curword.length; i++) {
    str += `<div class='cwlSlot'></div>`;
  }
  $("#currentWord").html(str);
  let cwls = document.getElementsByClassName("cwlSlot");
  // $('.cwlSlot').css('border-bottom', '5px solid black');
  
  //checking if the current word has spaces, pushing T/F to flagarr
  let flagArr = [];
  for (let i = 0; i < curword.length; i++) {
    if (curword[i] === " ") {
      flagArr.push(true);
    } else {
      flagArr.push(false);
    }
  }
  //looping through flagarr and setting a space in each slot that has a space
  for (let i = 0; i < flagArr.length; i++) {
    if (flagArr[i] === true) {
      cwls[i].innerHTML = "&nbsp;";
    } else {
      cwls[i].innerHTML = "";
    }
  }
  //looping through flagarr, setting transparent bottomborder for spaces
  for (let i = 0; i < cwls.length; i++) {
    if (flagArr[i] === true) {
      cwls[i].style.borderBottom = "7px solid transparent";
    } else {
      cwls[i].style.borderBottom = "7px solid black";
    }
  }
  
}

function gamewin() {
  console.log("You win!");
  let cwls = document.getElementsByClassName("cwlSlot");
  for (let i = 0; i < cwls.length; i++) {
    if (cwls[i].innerHTML !== "&nbsp;") {
      // cwls[i].style.color = 'lime';
      cwls[i].style.borderBottom = "7px solid lime";
    }
  }
  
}
function gamelose() {
  let cwls = document.getElementsByClassName("cwlSlot");
  for (let i = 0; i < curword.length; i++) {
    if (cwls[i].innerHTML === '') {
      cwls[i].style.borderBottom = "7px solid crimson";
      cwls[i].style.color = 'crimson';
    }
    cwls[i].innerText = curword.charAt(i);
  }
  console.log("You lose!");
}


function gameover(ws) {

  
  switch (ws) {
    case true:
 
      
      break;
    case false:

      break;
    case undefined:
      console.log("You are sentenced to death");
      break;
  }
}




function getRandomWord(category) {
  let catArr = [];
  
  //checking which category was selected, choosing which array of words to use
  switch (category) {
    case "countries":  catArr = countries; break;
    case "animals"  :  catArr = animals;   break;
    case "leonsboys":  catArr = leonsboys; break;
    case "allwords" :  catArr = allwords;  break;
    case "provinces":  catArr = provinces; break;
    case "usstates" :  catArr = usstates;  break;
  
  }
  //choosing random word from chosen category
  //number will be between 0 and the length of the array
  let min = Math.ceil(0);
  let max = Math.floor(catArr.length);
  let randNum = Math.floor(Math.random() * (max - min) + min);
  curword = catArr[randNum];
  
  if (catArr.length > 0) {
    let removed = catArr.splice(randNum, 1);
    console.log(removed);
    console.log(curword);
  } else if (catArr.length === 0) {
    alert("You've used all the words in this category! Try another category.");
  }
  return curword;
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // const getSpaces = () => {
    //
    // }
    // // curword = randomWords[randNum];
    // // curword = allWords[randNum];

  // });
  
  //
  
