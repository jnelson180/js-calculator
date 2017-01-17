var tRes = "";
var tDisp = "";
var tForm = "";
var disp = "";
var calcMem;

function funcAdd() {
  if (calcMem != undefined) {
    tForm = String(calcMem + "\+");
    document.getElementById("formula").innerHTML = tForm;
    calcMem = undefined;
    tDisp = "";
  } else {
    tForm = String(tForm + "\+");
    document.getElementById("result").innerHTML = "+";
    tDisp = "";
  }
}

function funcDivide() {
  if (calcMem != undefined) {
    tForm = String(calcMem + "\/");
    document.getElementById("formula").innerHTML = tForm;
    calcMem = undefined;
    tDisp = "";
  } else {
    tForm = String(tForm + "\/");
    document.getElementById("result").innerHTML = "/";
    tDisp = "";
  }
}

function funcMultiply() {
  if (calcMem != undefined) {
    tForm = String(calcMem + "\*");
    document.getElementById("formula").innerHTML = tForm;
    calcMem = undefined;
    tDisp = "";
  } else {
    tForm = String(tForm + "\*");
    document.getElementById("result").innerHTML = "*";
    tDisp = "";
  }
}

function funcSubtract() {
  if (calcMem != undefined) {
    tForm = String(calcMem + "\-");
    document.getElementById("formula").innerHTML = tForm;
    calcMem = undefined;
    tDisp = "";
  } else {
    tForm = String(tForm + "\-");
    document.getElementById("result").innerHTML = "-";
    tDisp = "";
  }
}

function funcCe() {
  if (Number(tDisp)) {
    tForm = tForm.slice(0, (tForm.length - tDisp.length));
    document.getElementById("formula").innerHTML = tForm;
    tDisp = "";
    document.getElementById("result").innerHTML = "0";

    if (formula.length == 0) {
      document.getElementById("formula").innerHTML = "0";
    }
  } else {
    return
  }
}

function funcAc() {
  tRes = "";
  tDisp = "";
  tForm = "";
  disp = "";
  calcMem = undefined;

  document.getElementById("formula").innerHTML = "0";
  document.getElementById("result").innerHTML = "0";
}

function funcDecimal() {
  // cannot use ' includes() ' method; not compatible before IE12.
  var sc = false;
  for (var i = 0; i < tDisp.length; i++)
    if (tDisp.charAt(i) == ".") {
      sc = true;
      i = tDisp.length;
      return;
    }
  if (sc == false) {
    calcMem = undefined;
    tForm = String(tForm + ".");
    tDisp = String(tDisp + ".");
    document.getElementById("formula").innerHTML = tForm;
    document.getElementById("result").innerHTML = tDisp;
  }
}

function func0() {
  calcMem = undefined;
  if (tDisp.length < 1) {
    return;
  } else {
    tForm = String(tForm + "0");
    tDisp = String(tDisp + "0");
    document.getElementById("formula").innerHTML = tForm;
    document.getElementById("result").innerHTML = tDisp;
  }
}

function func1() {
  calcMem = undefined;
  tForm = String(tForm + "1");
  tDisp = String(tDisp + "1");
  document.getElementById("formula").innerHTML = tForm;
  document.getElementById("result").innerHTML = tDisp;
}

function func2() {
  calcMem = undefined;
  tForm = String(tForm + "2");
  tDisp = String(tDisp + "2");
  document.getElementById("formula").innerHTML = tForm;
  document.getElementById("result").innerHTML = tDisp;
}

function func3() {
  calcMem = undefined;
  tForm = String(tForm + "3");
  tDisp = String(tDisp + "3");
  document.getElementById("formula").innerHTML = tForm;
  document.getElementById("result").innerHTML = tDisp;
}

function func4() {
  calcMem = undefined;
  tForm = String(tForm + "4");
  tDisp = String(tDisp + "4");
  document.getElementById("formula").innerHTML = tForm;
  document.getElementById("result").innerHTML = tDisp;
}

function func5() {
  tForm = String(tForm + "5");
  tDisp = String(tDisp + "5");
  document.getElementById("formula").innerHTML = tForm;
  document.getElementById("result").innerHTML = tDisp;
}

function func6() {
  calcMem = undefined;
  tForm = String(tForm + "6");
  tDisp = String(tDisp + "6");
  document.getElementById("formula").innerHTML = tForm;
  document.getElementById("result").innerHTML = tDisp;
}

function func7() {
  calcMem = undefined;
  tForm = String(tForm + "7");
  tDisp = String(tDisp + "7");
  document.getElementById("formula").innerHTML = tForm;
  document.getElementById("result").innerHTML = tDisp;
}

function func8() {
  calcMem = undefined;
  tForm = String(tForm + "8");
  tDisp = String(tDisp + "8");
  document.getElementById("formula").innerHTML = tForm;
  document.getElementById("result").innerHTML = tDisp;
}

function func9() {
  calcMem = undefined;
  tForm = String(tForm + "9");
  tDisp = String(tDisp + "9");
  document.getElementById("formula").innerHTML = tForm;
  document.getElementById("result").innerHTML = tDisp;
}

function funcEquals() {

  // ADD A LINE SO THAT IF FORMULA = 0, DO NOTHING
  if (tForm == 0) {
    return;
  } else if (calcMem != undefined) {
    if (!Number(tForm.charAt(0))) {
      //alert("using Equals formula since calcmem is defined");
      var working = (calcMem + String(tForm));
      var res = eval(working);
      // alert("charAt tres.0 is '" + tRes.charAt(0) + "'; tRes is " + tRes);
      document.getElementById("result").innerHTML = res;
      document.getElementById("formula").innerHTML = "0";
      tRes = "";
      calcMem = res;
      res = "";
    } else {
      // alert("charAt tres.0 is '" + tRes.charAt(0) + "'; tRes is " + tRes);
      //alert("calcmem was defined");
      var res = eval(tForm);
      document.getElementById("result").innerHTML = res;
      document.getElementById("formula").innerHTML = "0";
      tRes = "";
      tDisp = "";
      calcMem = res;
      res = "";

    }
  } else if (calcMem == undefined) {
    var res = eval(tForm);
    //alert("calcMem UNDEFINED, running ver 3");
    document.getElementById("result").innerHTML = res;
    document.getElementById("formula").innerHTML = String(tForm + "=" + res);
    // document.getElementById("formula").innerHTML = "0";
    tForm = "";
    calcMem = String(res);
    tDisp = "";
    tRes = "";
    res = "";
  }
}

document.addEventListener("keypress", displayunicode);

function displayunicode(e) {
  var unicode = e.keyCode ? e.keyCode : e.charCode
    // var actualkey=String.fromCharCode(unicode);

  switch (unicode) {
    case 49:
      func1();
      break;
    case 50:
      func2();
      break;
    case 51:
      func3();
      break;
    case 52:
      func4();
      break;
    case 53:
      func5();
      break;
    case 54:
      func6();
      break;
    case 55:
      func7();
      break;
    case 56:
      func8();
      break;
    case 57:
      func9();
      break;
    case 48:
      func0();
      break;
    case 27:
      funcAc();
      break;
    case 8:
    case 46:
      funcCe();
      break;
    case 13:
      funcEquals();
      break;
    case 43:
      funcAdd();
      break;
    case 45:
      funcSubtract();
      break;
    case 42:
      funcMultiply();
      break;
    case 47:
      funcDivide();
      break;
    default:
      break;
  }
}