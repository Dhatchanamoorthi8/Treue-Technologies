let input = document.getElementById("user_input");
let output = document.getElementById("output");
let selectProps = document.getElementById("select_props");
let selectProps1 = document.getElementById("select_props_1");
let selectProps2 = document.getElementById("select_props_2");

input.addEventListener('input', () => {
  updateOutput();
});

selectProps.addEventListener('change', (event) => {
  tagChanged(event);
  updateOutput();
});

selectProps1.addEventListener('change', () => {
  updateOutput();
});

selectProps2.addEventListener('change', () => {
  updateOutput();
});

function updateOutput() {
  let inputValue = parseFloat(input.value);
  let selectedUnit1 = selectProps1.value;
  let selectedUnit2 = selectProps2.value;

  if (!isNaN(inputValue)) {
    // Check the selected units and set the appropriate multiplier
    if (selectedUnit1 === "Meter" && selectedUnit2 === "Meter") {
      let result = "Invalid";
      alert("Meter to Meter Can't Convert")
      output.value = result;
    } else if(selectedUnit1 === "Meter" && selectedUnit2 === "Centimeter"){
      let result = inputValue * 100;
      output.value = result;
    }else if(selectedUnit1 === "Meter" && selectedUnit2 === "Kilometer"){
      let result = inputValue / 1000;
      output.value = result;
    }else if(selectedUnit1 === "Meter" && selectedUnit2 === "Milimeter"){
      let result = inputValue * 1000;
      output.value = result;
    }else if(selectedUnit1 === "Meter" && selectedUnit2 === "Micrometers"){
      let result = inputValue * 1e+6;
      output.value = result;
    }else if(selectedUnit1 === "Meter" && selectedUnit2 === "Nanometer"){
      let result = inputValue * 1e+9;
      output.value = result;
    }else if(selectedUnit1 === "Meter" && selectedUnit2 === "Yard"){
      let result = inputValue * 1.094;
      output.value = result;
    }else if(selectedUnit1 === "Meter" && selectedUnit2 === "Foot"){
      let result = inputValue * 3.281;
      output.value = result;
    }else if(selectedUnit1 === "Meter" && selectedUnit2 === "Inches"){
      let result = inputValue *  39.37;
      output.value = result;
    }else if(selectedUnit1 === "Meter" && selectedUnit2 === "Mile"){
      let result = inputValue / 1609;
      output.value = result;
    }
     
  } else {
    output.value = '';
  }
  if (!isNaN(inputValue)){
    if (selectedUnit1 === "Centimeter" && selectedUnit2 === "Meter") {
      let result = inputValue / 100;
      output.value = result;
    } else if(selectedUnit1 === "Centimeter" && selectedUnit2 === "Centimeter"){
      let result = "Invalid";
      alert("Centimeter to Centimeter Can't Convert")
      output.value = result;
    }else if(selectedUnit1 === "Centimeter" && selectedUnit2 === "Kilometer"){
      let result = inputValue / 100000;
      output.value = result;
    }else if(selectedUnit1 === "Centimeter" && selectedUnit2 === "Milimeter"){
      let result = inputValue * 10;
      output.value = result;
    }else if(selectedUnit1 === "Centimeter" && selectedUnit2 === "Micrometers"){
      let result = inputValue * 10000;
      output.value = result;
    }else if(selectedUnit1 === "Centimeter" && selectedUnit2 === "Nanometer"){
      let result = inputValue * 1e+7;
      output.value = result;
    }else if(selectedUnit1 === "Centimeter" && selectedUnit2 === "Yard"){
      let result = inputValue / 91.44;
      output.value = result;
    }else if(selectedUnit1 === "Centimeter" && selectedUnit2 === "Foot"){
      let result = inputValue / 30.48;
      output.value = result;
    }else if(selectedUnit1 === "Centimeter" && selectedUnit2 === "Inches"){
      let result = inputValue / 2.54;
      output.value = result;
    }else if(selectedUnit1 === "Centimeter" && selectedUnit2 === "Mile"){
      let result = inputValue / 160900;
      output.value = result;
    }
     
  } else {
    output.value = '';
  }
  if (!isNaN(inputValue)){
    if (selectedUnit1 === "Kilometer" && selectedUnit2 === "Meter") {
      let result = inputValue * 1000;
      output.value = result;
    } else if(selectedUnit1 === "Kilometer" && selectedUnit2 === "Centimeter"){
      let result = inputValue * 100000;
      output.value = result;
    }else if(selectedUnit1 === "Kilometer" && selectedUnit2 === "Kilometer"){
      let result = "Invalid";
      alert("Kilometer to kilometer Can't Convert")
      output.value = result;
    }else if(selectedUnit1 === "Kilometer" && selectedUnit2 === "Milimeter"){
      let result = inputValue * 1e+6;
      output.value = result;
    }else if(selectedUnit1 === "Kilometer" && selectedUnit2 === "Micrometers"){
      let result = inputValue * 1000000000;
      output.value = result;
    }else if(selectedUnit1 === "Kilometer" && selectedUnit2 === "Nanometer"){
      let result = inputValue * 1e+12;
      output.value = result;
    }else if(selectedUnit1 === "Kilometer" && selectedUnit2 === "Yard"){
      let result = inputValue * 1094;
      output.value = result;
    }else if(selectedUnit1 === "Kilometer" && selectedUnit2 === "Foot"){
      let result = inputValue * 3281;
      output.value = result;
    }else if(selectedUnit1 === "Kilometer" && selectedUnit2 === "Inches"){
      let result = inputValue * 39370;
      output.value = result;
    }else if(selectedUnit1 === "Kilometer" && selectedUnit2 === "Mile"){
      let result = inputValue / 1.609;
      output.value = result;
    }
     
  } else {
    output.value = '';
  }
  if (!isNaN(inputValue)){
    if(selectedUnit1 === "Milimeter" && selectedUnit2 === "Kilometer"){
      let result = inputValue / 1e+6;
      output.value = result;
    }else if (selectedUnit1 === "Milimeter" && selectedUnit2 === "Meter") {
      let result = inputValue / 1000;
      output.value = result;
    } else if(selectedUnit1 === "Milimeter" && selectedUnit2 === "centimeter"){
      let result = inputValue / 10;
      output.value = result;
    }else if(selectedUnit1 === "Milimeter" && selectedUnit2 === "Milimeter"){
      let result = "Invalid";
      alert("Milimeter to Milimeter Can't Convert")
      output.value = result;
    }else if(selectedUnit1 === "Milimeter" && selectedUnit2 === "Micrometers"){
      let result = inputValue * 1000;
      output.value = result;
    }else if(selectedUnit1 === "Milimeter" && selectedUnit2 === "Nanometer"){
      let result = inputValue * 1e+6;
      output.value = result;
    }else if(selectedUnit1 === "Milimeter" && selectedUnit2 === "Mile"){
      let result = inputValue / 1.609e+6;
      output.value = result;
    }else if(selectedUnit1 === "Milimeter" && selectedUnit2 === "Yard"){
      let result = inputValue / 914.4;
      output.value = result;
    }else if(selectedUnit1 === "Milimeter" && selectedUnit2 === "Foot"){
      let result = inputValue / 304.8;
      output.value = result;
    }else if(selectedUnit1 === "Milimeter" && selectedUnit2 === "Inches"){
      let result = inputValue / 25.4;
      output.value = result;
    }
     
  } else {
    output.value = '';
  }
  if (!isNaN(inputValue)){
    if(selectedUnit1 === "Micrometers" && selectedUnit2 === "Kilometer"){
      let result = inputValue / 1e+9;
      output.value = result;
    }else if (selectedUnit1 === "Micrometers" && selectedUnit2 === "Meter") {
      let result = inputValue / 1e+6;
      output.value = result;
    } else if(selectedUnit1 === "Micrometers" && selectedUnit2 === "centimeter"){
      let result = inputValue / 10000;
      output.value = result;
    }else if(selectedUnit1 === "Micrometers" && selectedUnit2 === "Milimeter"){
      let result = inputValue / 1000;
      output.value = result;
    }else if(selectedUnit1 === "Micrometers" && selectedUnit2 === "Micrometers"){
      let result = "Invalid";
      alert("Micrometers to Micrometers Can't Convert")
      output.value = result;
    }else if(selectedUnit1 === "Micrometers" && selectedUnit2 === "Nanometer"){
      let result = inputValue * 1000;
      output.value = result;
    }else if(selectedUnit1 === "Micrometers" && selectedUnit2 === "Mile"){
      let result = inputValue /  1.609e+9;
      output.value = result;
    }else if(selectedUnit1 === "Micrometers" && selectedUnit2 === "Yard"){
      let result = inputValue / 914400;
      output.value = result;
    }else if(selectedUnit1 === "Micrometers" && selectedUnit2 === "Foot"){
      let result = inputValue / 304800;
      output.value = result;
    }else if(selectedUnit1 === "Micrometers" && selectedUnit2 === "Inches"){
      let result = inputValue / 25400;
      output.value = result;
    }
     
  } else {
    output.value = '';
  }
  if (!isNaN(inputValue)){
    if(selectedUnit1 === "Mile" && selectedUnit2 === "Kilometer"){
      let result = inputValue * 1.609;
      output.value = result;
    }else if (selectedUnit1 === "Mile" && selectedUnit2 === "Meter") {
      let result = inputValue * 1609;
      output.value = result;
    } else if(selectedUnit1 === "Mile" && selectedUnit2 === "centimeter"){
      let result = inputValue *  160900;
      output.value = result;
    }else if(selectedUnit1 === "Mile" && selectedUnit2 === "Milimeter"){
      let result = inputValue *   1.609e+6;
      output.value = result;
    }else if(selectedUnit1 === "Mile" && selectedUnit2 === "Micrometers"){
      let result = inputValue *  1.609e+9;
      output.value = result;
    }else if(selectedUnit1 === "Mile" && selectedUnit2 === "Nanometer"){
      let result = inputValue *  1.609e+12;
      output.value = result;
    }else if(selectedUnit1 === "Mile" && selectedUnit2 === "Mile"){
      let result = "Invalid";
      alert("Mile to Mile Can't Convert")
      output.value = result;
    }else if(selectedUnit1 === "Mile" && selectedUnit2 === "Yard"){
      let result = inputValue * 1760;
      output.value = result;
    }else if(selectedUnit1 === "Mile" && selectedUnit2 === "Foot"){
      let result = inputValue * 5280;
      output.value = result;
    }else if(selectedUnit1 === "Mile" && selectedUnit2 === "Inches"){
      let result = inputValue * 63360;
      output.value = result;
    }
     
  } else {
    output.value = '';
  }
  if (!isNaN(inputValue)){
    if(selectedUnit1 === "Foot" && selectedUnit2 === "Kilometer"){
      let result = inputValue / 3281;
      output.value = result;
    }else if (selectedUnit1 === "Foot" && selectedUnit2 === "Meter") {
      let result = inputValue / 3.281;
      output.value = result;
    } else if(selectedUnit1 === "Foot" && selectedUnit2 === "centimeter"){
      let result = inputValue * 30.48;
      output.value = result;
    }else if(selectedUnit1 === "Foot" && selectedUnit2 === "Milimeter"){
      let result = inputValue *   304.8;
      output.value = result;
    }else if(selectedUnit1 === "Foot" && selectedUnit2 === "Micrometers"){
      let result = inputValue *  304800;
      output.value = result;
    }else if(selectedUnit1 === "Foot" && selectedUnit2 === "Nanometer"){
      let result = inputValue *  3.048e+8;
      output.value = result;
    }else if(selectedUnit1 === "Foot" && selectedUnit2 === "Mile"){
      let result = inputValue /  5280;
      output.value = result;
    }else if(selectedUnit1 === "Foot" && selectedUnit2 === "Yard"){
      let result = inputValue / 3;
      output.value = result;
    }else if(selectedUnit1 === "Foot" && selectedUnit2 === "Foot"){
      let result = "Invalid";
      alert("Foot to Foot Can't Convert")
      output.value = result;
    }else if(selectedUnit1 === "Foot" && selectedUnit2 === "Inches"){
      let result = inputValue * 12;
      output.value = result;
    }
     
  } else {
    output.value = '';
  }
  if (!isNaN(inputValue)){
    if(selectedUnit1 === "Inches" && selectedUnit2 === "Kilometer"){
      let result = inputValue / 39370;
      output.value = result;
    }else if (selectedUnit1 === "Inches" && selectedUnit2 === "Meter") {
      let result = inputValue / 39.37;
      output.value = result;
    } else if(selectedUnit1 === "Inches" && selectedUnit2 === "centimeter"){
      let result = inputValue * 2.54;
      output.value = result;
    }else if(selectedUnit1 === "Inches" && selectedUnit2 === "Milimeter"){
      let result = inputValue *  25.4;
      output.value = result;
    }else if(selectedUnit1 === "Inches" && selectedUnit2 === "Micrometers"){
      let result = inputValue *  25400;
      output.value = result;
    }else if(selectedUnit1 === "Inches" && selectedUnit2 === "Nanometer"){
      let result = inputValue *  2.54e+7;
      output.value = result;
    }else if(selectedUnit1 === "Inches" && selectedUnit2 === "Mile"){
      let result = inputValue /  63360;
      output.value = result;
    }else if(selectedUnit1 === "Inches" && selectedUnit2 === "Yard"){
      let result = inputValue / 36;
      output.value = result;
    }else if(selectedUnit1 === "Inches" && selectedUnit2 === "Foot"){
      let result = inputValue / 12;
      output.value = result;
    }else if(selectedUnit1 === "Inches" && selectedUnit2 === "Inches"){
      let result = "Invalid";
      alert("Inches to Inches Can't Convert")
      output.value = result;
    }
     
  } else {
    output.value = '';
  }
// Length end

if (!isNaN(inputValue)){
  if(selectedUnit1 === "Mile per Hour" && selectedUnit2 === "Mile per Hour"){
    let result = "Invalid";
    alert("Mile per Hour to Mile per Hour Can't Convert")
    output.value = result;
  }else if (selectedUnit1 === "Mile per Hour" && selectedUnit2 === "Foot per second") {
    let result = inputValue * 1.467;
    output.value = result;
  } else if(selectedUnit1 === "Mile per Hour" && selectedUnit2 === "Meter per second"){
    let result = inputValue /  2.237;
    output.value = result;
  }else if(selectedUnit1 === "Mile per Hour" && selectedUnit2 === "Kilometer per second"){
    let result = inputValue *  1.609;
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)){
  if(selectedUnit1 === "Foot per second" && selectedUnit2 === "Mile per Hour"){
    let result = inputValue / 1.467;
    output.value = result;
  }else if (selectedUnit1 === "Foot per second" && selectedUnit2 === "Foot per second") {
    let result = "Invalid";
    alert("Foot per second to Foot per second Can't Convert")
    output.value = result;
  } else if(selectedUnit1 === "Foot per second" && selectedUnit2 === "Meter per second"){
    let result = inputValue /  3.281;
    output.value = result;
  }else if(selectedUnit1 === "Foot per second" && selectedUnit2 === "Kilometer per second"){
    let result = inputValue *  1.097;
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)){
  if(selectedUnit1 === "Meter per second" && selectedUnit2 === "Mile per Hour"){
    let result = inputValue * 2.237;
    output.value = result;
  }else if (selectedUnit1 === "Meter per second" && selectedUnit2 === "Foot per second") {
    let result = inputValue *  3.281;
    output.value = result;
  } else if(selectedUnit1 === "Meter per second" && selectedUnit2 === "Meter per second"){
    let result = "Invalid";
    alert("Meter per second to Meter per second Can't Convert")
    output.value = result;
  }else if(selectedUnit1 === "Meter per second" && selectedUnit2 === "Kilometer per second"){
    let result = inputValue *  3.6;
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)){
  if(selectedUnit1 === "Kilometer per second" && selectedUnit2 === "Mile per Hour"){
    let result = inputValue / 1.609;
    output.value = result;
  }else if (selectedUnit1 === "Kilometer per second" && selectedUnit2 === "Foot per second") {
    let result = inputValue /  1.097;
    output.value = result;
  } else if(selectedUnit1 === "Kilometer per second" && selectedUnit2 === "Meter per second"){
    let result = inputValue /  3.6;
    output.value = result;
  }else if(selectedUnit1 === "Kilometer per second" && selectedUnit2 === "Kilometer per second"){
    let result = "Invalid";
    alert("Kilometer per second to Kilometer per second Can't Convert")
    output.value = result;
  }
   
} else {
  output.value = '';
}
// speed end
if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Milisecond" && selectedUnit2 === "Milisecond") {
    let result = "Invalid";
    alert("Milisecond to Milisecond Can't Convert")
    output.value = result;
  } else if(selectedUnit1 === "Milisecond" && selectedUnit2 === "Second"){
    let result = inputValue * 200;
    output.value = result;
  }else if(selectedUnit1 === "Milisecond" && selectedUnit2 === "Minute"){
    let result = inputValue / 1000;
    output.value = result;
  }else if(selectedUnit1 === "Milisecond" && selectedUnit2 === "Hour"){
    let result = inputValue * 1000;
    output.value = result;
  }else if(selectedUnit1 === "Milisecond" && selectedUnit2 === "Day"){
    let result = inputValue * 1e+6;
    output.value = result;
  }else if(selectedUnit1 === "Milisecond" && selectedUnit2 === "Week"){
    let result = inputValue * 1e+9;
    output.value = result;
  }else if(selectedUnit1 === "Milisecond" && selectedUnit2 === "Month"){
    let result = inputValue * 1.094;
    output.value = result;
  }else if(selectedUnit1 === "Milisecond" && selectedUnit2 === "Calender Year"){
    let result = inputValue * 3.281;
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Second" && selectedUnit2 === "Milisecond") {
    let result = inputValue * 1000;
    output.value = result;
  } else if(selectedUnit1 === "Second" && selectedUnit2 === "Second"){
    let result = "Invalid";
    alert("Second to Second Can't Convert")
    output.value = result;
  }else if(selectedUnit1 === "Second" && selectedUnit2 === "Minute"){
    let result = inputValue / 60;
    output.value = result;
  }else if(selectedUnit1 === "Second" && selectedUnit2 === "Hour"){
    let result = inputValue /  3600;
    output.value = result;
  }else if(selectedUnit1 === "Second" && selectedUnit2 === "Day"){
    let result = inputValue / 86400;
    output.value = result;
  }else if(selectedUnit1 === "Second" && selectedUnit2 === "Week"){
    let result = inputValue / 604800;
    output.value = result;
  }else if(selectedUnit1 === "Second" && selectedUnit2 === "Month"){
    let result = inputValue / 2.628e+6;
    output.value = result;
  }else if(selectedUnit1 === "Second" && selectedUnit2 === "Calender Year"){
    let result = inputValue / 3.154e+7;
    output.value = result;
  }
   
} else {
  output.value = '';
}

if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Minute" && selectedUnit2 === "Milisecond") {
    let result = inputValue / 60000;
    output.value = result;
  } else if(selectedUnit1 === "Minute" && selectedUnit2 === "Second"){
    let result = inputValue / 60;
    output.value = result;
  }else if(selectedUnit1 === "Minute" && selectedUnit2 === "Minute"){
    let result = "Invalid";
    alert("Minute to Minute Can't Convert")
    output.value = result;
  }else if(selectedUnit1 === "Minute" && selectedUnit2 === "Hour"){
    let result = inputValue /  60;
    output.value = result;
  }else if(selectedUnit1 === "Minute" && selectedUnit2 === "Day"){
    let result = inputValue / 1440;
    output.value = result;
  }else if(selectedUnit1 === "Minute" && selectedUnit2 === "Week"){
    let result = inputValue / 10080;
    output.value = result;
  }else if(selectedUnit1 === "Minute" && selectedUnit2 === "Month"){
    let result = inputValue / 43800;
    output.value = result;
  }else if(selectedUnit1 === "Minute" && selectedUnit2 === "Calender Year"){
    let result = inputValue / 525600;
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Hour" && selectedUnit2 === "Milisecond") {
    let result = inputValue * 3.6e+6;
    output.value = result;
  } else if(selectedUnit1 === "Hour" && selectedUnit2 === "Second"){
    let result = inputValue * 3600;
    output.value = result;
  }else if(selectedUnit1 === "Hour" && selectedUnit2 === "Minute"){
    let result = inputValue *  60;
    output.value = result;
  }else if(selectedUnit1 === "Hour" && selectedUnit2 === "Hour"){
    let result = "Invalid";
    alert("Hour to Hour Can't Convert")
    output.value = result;
  }else if(selectedUnit1 === "Hour" && selectedUnit2 === "Day"){
    let result = inputValue / 24;
    output.value = result;
  }else if(selectedUnit1 === "Hour" && selectedUnit2 === "Week"){
    let result = inputValue /  168;
    output.value = result;
  }else if(selectedUnit1 === "Hour" && selectedUnit2 === "Month"){
    let result = inputValue /  730;
    output.value = result;
  }else if(selectedUnit1 === "Hour" && selectedUnit2 === "Calender Year"){
    let result = inputValue / 8760;
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Day" && selectedUnit2 === "Milisecond") {
    let result = inputValue * 8.64e+7;
    output.value = result;
  } else if(selectedUnit1 === "Day" && selectedUnit2 === "Second"){
    let result = inputValue * 86400;
    output.value = result;
  }else if(selectedUnit1 === "Day" && selectedUnit2 === "Minute"){
    let result = inputValue *  1440;
    output.value = result;
  }else if(selectedUnit1 === "Day" && selectedUnit2 === "Hour"){
    let result = inputValue * 24;
    output.value = result;
  }else if(selectedUnit1 === "Day" && selectedUnit2 === "Day"){
    let result = "Invalid";
    alert("DAY to DAY Can't Convert")
    output.value = result;
  }else if(selectedUnit1 === "Day" && selectedUnit2 === "Week"){
    let result = inputValue /  7;
    output.value = result;
  }else if(selectedUnit1 === "Day" && selectedUnit2 === "Month"){
    let result = inputValue /  30.417;
    output.value = result;
  }else if(selectedUnit1 === "Day" && selectedUnit2 === "Calender Year"){
    let result = inputValue /  365;
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Week" && selectedUnit2 === "Milisecond") {
    let result = inputValue * 6.048e+8;
    output.value = result;
  } else if(selectedUnit1 === "Week" && selectedUnit2 === "Second"){
    let result = inputValue * 604800;
    output.value = result;
  }else if(selectedUnit1 === "Week" && selectedUnit2 === "Minute"){
    let result = inputValue * 10080;
    output.value = result;
  }else if(selectedUnit1 === "Week" && selectedUnit2 === "Hour"){
    let result = inputValue * 168;
    output.value = result;
  }else if(selectedUnit1 === "Week" && selectedUnit2 === "Day"){
    let result = inputValue / 7;
    output.value = result;
  }else if(selectedUnit1 === "Week" && selectedUnit2 === "Week"){
    let result = "Invalid";
    alert("Week to Week Can't Convert")
    output.value = result;
  }else if(selectedUnit1 === "Week" && selectedUnit2 === "Month"){
    let result = inputValue /  4.345;
    output.value = result;
  }else if(selectedUnit1 === "Week" && selectedUnit2 === "Calender Year"){
    let result = inputValue / 52.143;
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Month" && selectedUnit2 === "Milisecond") {
    let result = inputValue *  2.628e+9;
    output.value = result;
  } else if(selectedUnit1 === "Month" && selectedUnit2 === "Second"){
    let result = inputValue *  2.628e+6;
    output.value = result;
  }else if(selectedUnit1 === "Month" && selectedUnit2 === "Minute"){
    let result = inputValue * 43800;
    output.value = result;
  }else if(selectedUnit1 === "Month" && selectedUnit2 === "Hour"){
    let result = inputValue * 730;
    output.value = result;
  }else if(selectedUnit1 === "Month" && selectedUnit2 === "Day"){
    let result = inputValue * 30.417;
    output.value = result;
  }else if(selectedUnit1 === "Month" && selectedUnit2 === "Week"){
    let result = inputValue * 4.345;
    output.value = result;
  }else if(selectedUnit1 === "Month" && selectedUnit2 === "Month"){
    let result = "Invalid";
    alert("Month to Month Can't Convert")
    output.value = result;
  }else if(selectedUnit1 === "Month" && selectedUnit2 === "Calender Year"){
    let result = inputValue / 12;
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Calender Year" && selectedUnit2 === "Milisecond") {
    let result = inputValue *   3.154e+10;
    output.value = result;
  } else if(selectedUnit1 === "Calender Year" && selectedUnit2 === "Second"){
    let result = inputValue *  3.154e+7;
    output.value = result;
  }else if(selectedUnit1 === "Calender Year" && selectedUnit2 === "Minute"){
    let result = inputValue * 525600;
    output.value = result;
  }else if(selectedUnit1 === "Calender Year" && selectedUnit2 === "Hour"){
    let result = inputValue *  8760;
    output.value = result;
  }else if(selectedUnit1 === "Calender Year" && selectedUnit2 === "Day"){
    let result = inputValue * 365;
    output.value = result;
  }else if(selectedUnit1 === "Calender Year" && selectedUnit2 === "Week"){
    let result = inputValue * 52.143;
    output.value = result;
  }else if(selectedUnit1 === "Calender Year" && selectedUnit2 === "Month"){
    let result = inputValue * 12;
    output.value = result;
  }else if(selectedUnit1 === "Calender Year" && selectedUnit2 === "Calender Year"){
    let result = "Invalid";
    alert("Calender Year to Calender Year Can't Convert")
    output.value = result;
  }
   
} else {
  output.value = '';
}
// Time end

if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Miles per gallon" && selectedUnit2 === "Miles per gallon") {
    let result = "Invalid";
    alert("Miles per gallon to Miles per gallon Can't Convert")
    
    output.value = result ;
  } else if(selectedUnit1 === "Miles per gallon" && selectedUnit2 === "Kilometer per liter"){
    let result = inputValue / 2.352
    output.value = result.toExponential();
  }else if(selectedUnit1 === "Miles per gallon" && selectedUnit2 === "Liter per 100 Kilometer"){
    let result = 235.215 / inputValue ; 
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Kilometer per liter" && selectedUnit2 === "Miles per gallon") {
    let result = inputValue * 2.352;
    output.value = result;
  } else if(selectedUnit1 === "Kilometer per liter" && selectedUnit2 === "Kilometer per liter"){
    let result = "Invalid";
    alert("Kilometer per liter to Kilometer per liter Can't Convert")
    output.value = result;
  }else if(selectedUnit1 === "Kilometer per liter" && selectedUnit2 === "Liter per 100 Kilometer"){
    let result = 100 / inputValue ; 
    output.value = result;
  }
   
} else {
  output.value = '';
}
if (!isNaN(inputValue)) {
  // Check the selected units and set the appropriate multiplier
  if (selectedUnit1 === "Liter per 100 Kilometer" && selectedUnit2 === "Miles per gallon") {
    let result = 235.215 / inputValue ;
    output.value = result;
  } else if(selectedUnit1 === "Liter per 100 Kilometer" && selectedUnit2 === "Kilometer per liter"){
    let result = 100 / inputValue ;
    output.value = result;
  }else if(selectedUnit1 === "Liter per 100 Kilometer" && selectedUnit2 === "Liter per 100 Kilometer"){
    let result = "Invalid";
    alert("Liter per 100 Kilometer to Liter per 100 Kilometer Can't Convert")
    output.value = result;
  }
   
} else {
  output.value = '';
}
}

let result = [
  { name: "Length", tag: "Length", units: ["Kilometer", "Centimeter", "Meter", "Milimeter", "Micrometers","Mile","Foot","Inches"] },
  { name: "Speed", tag: "Speed", units: ["Mile per Hour","Foot per second","Meter per second","Kilometer per second"] },
  { name: "Time", tag: "Time", units: ["Milisecond","Second","Minute","Hour","Day","Week","Month","Calender Year"] },
  { name: "Fuel", tag: "Fuel Economy", units: ["Miles per gallon","Kilometer per liter","Liter per 100 Kilometer"] }
];

let populateDropDown = (params) => {
  params.optionsToPopulate.forEach(item => {
    params.ddlElement.add(new Option(item[`${params.text}`], item[`${params.id}`]));
  });
}

(function () {
  let params = {
    optionsToPopulate: result,
    ddlElement: document.getElementById("select_props"),
    id: "tag",
    text: "tag"
  };
  populateDropDown(params);
})();

function tagChanged(event) {
  let tagDdlValue = event.target.value;
  let optionsToAdd = result.find(item => item.tag === tagDdlValue);

  if (optionsToAdd) {
    let namesDdl = document.querySelectorAll('#select_props_2, #select_props_1');
    namesDdl.forEach(ddl => {
      ddl.options.length = 0;
      optionsToAdd.units.forEach(unit => {
        let params = {
          optionsToPopulate: [{ name: unit }],
          ddlElement: ddl,
          id: "name",
          text: "name",
        };
        populateDropDown(params);
      });
    });
  }
}


