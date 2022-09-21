window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
const menuBtn = document.querySelector(".menubtn");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
});
const dropDown = document.querySelector(".dropdown");
let dropDownOpen = false;
menuBtn.addEventListener("click", () => {
  if (!dropDownOpen) {
    dropDown.classList.add("open");
    dropDownOpen = true;
  } else {
    dropDown.classList.remove("open");
    dropDownOpen = false;
  }
});
const juniorLinkList = document.querySelector("#juniorLinkList");
const juniorCollapsible = document.querySelector(".juniorCollapsible");
const vertPlusjun = document.querySelector("#vertPlusjun");
let juniorLinkListOpen = false;
juniorLinkList.addEventListener("click", () => {
  if (!juniorLinkListOpen) {
    juniorLinkList.classList.add("open");
    juniorLinkListOpen = true;
    juniorCollapsible.style.display = "block";
    vertPlusjun.style.opacity = "0";
  } else {
    juniorLinkList.classList.remove("open");
    juniorLinkListOpen = false;
    juniorCollapsible.style.display = "none";
    vertPlusjun.style.opacity = "1";
  }
});
const seniorLinkList = document.querySelector("#seniorLinkList");
const seniorCollapsible = document.querySelector(".seniorCollapsible");
const vertPlussen = document.querySelector("#vertPlussen");
let seniorLinkListOpen = false;
seniorLinkList.addEventListener("click", () => {
  if (!seniorLinkListOpen) {
    seniorLinkList.classList.add("open");
    seniorLinkListOpen = true;
    seniorCollapsible.style.display = "block";
    vertPlussen.style.opacity = "0";
  } else {
    seniorLinkList.classList.remove("open");
    seniorLinkListOpen = false;
    seniorCollapsible.style.display = "none";
    vertPlussen.style.opacity = "1";
  }
});

const canvas = document.querySelector("#main");
const ctx = canvas.getContext('2d');


let lightCoords =[[1127, 574], [1061, 560], [996, 571], [939, 586], [891, 574], [822, 577], [751, 587], [686, 565], [634, 574], [562, 638], [508, 640], [423, 606], [368, 634], [297, 592], [233, 572], [171, 597], [96, 627], [141, 535], [218, 545], [287, 536], [344, 552], [398, 539], [466, 573], [525, 590], [593, 589], [655, 592], [736, 583], [797, 578], [856, 591], [919, 589], [977, 517], [1037, 598], [1101, 612], [1170, 529], [1084, 512], [1026, 542], [948, 539], [894, 517], [811, 515], [750, 505], [680, 509], [606, 497], [536, 519], [609, 476], [679, 504], [735, 501], [803, 525], [861, 480], [917, 476], [978, 486], [1152, 502], [1177, 455], [1170, 414], [1090, 439], [1046, 442], [984, 420], [925, 386], [865, 381], [792, 390], [726, 397], [672, 375], [608, 381], [552, 382], [483, 444], [446, 442], [359, 402], [305, 413], [254, 472], [299, 530], [303, 477], [318, 421], [342, 522], [353, 559], [365, 515], [332, 459], [392, 435], [385, 495], [448, 561], [410, 508], [388, 438], [433, 470], [492, 536], [464, 499], [453, 460], [523, 419], [502, 484], [589, 476], [556, 425], [611, 405], [679, 404], [737, 418], [793, 417], [850, 411], [930, 420], [969, 429], [1053, 426], [1079, 433], [1114, 483], [1120, 387], [1209, 435], [1146, 467], [1085, 473], [1025, 519], [943, 515], [900, 518], [828, 466], [785, 441], [721, 439], [654, 449], [577, 444], [517, 515], [484, 575], [432, 585], [351, 528], [287, 561], [253, 485], [299, 394], [217, 472], [227, 517], [212, 549], [184, 479], [248, 427], [210, 362], [190, 452], [176, 521], [165, 574], [139, 500], [163, 443], [151, 352], [99, 434], [114, 508], [94, 549], [87, 459], [80, 379], [173, 360], [229, 394], [311, 391], [366, 379], [439, 398], [495, 390], [573, 416], [634, 415], [697, 386], [752, 363], [822, 364], [890, 370], [947, 385], [1019, 418], [1080, 406], [1132, 357], [1124, 298], [1063, 306], [1006, 310], [935, 335], [865, 373], [798, 328], [727, 320], [658, 304], [588, 314], [525, 359], [460, 373], [377, 341], [314, 328], [252, 313], [183, 315], [101, 355], [134, 337], [193, 313], [242, 250], [172, 166], [254, 158], [328, 162], [392, 164], [462, 173], [521, 155], [587, 209], [652, 203], [716, 232], [798, 234], [838, 180], [906, 158], [961, 171], [1040, 191], [1117, 215], [1146, 301], [1085, 361], [1022, 368], [941, 385], [878, 342], [810, 347], [743, 334], [671, 332], [605, 338], [534, 342], [464, 334], [404, 337], [337, 338], [276, 334], [210, 340], [169, 330], [105, 304], [154, 337], [209, 308], [281, 306], [357, 309], [418, 303], [486, 321], [554, 343], [632, 339], [694, 327], [759, 301], [828, 323], [890, 318], [965, 340], [1026, 338], [1103, 321], [1148, 297], [1204, 223], [1110, 227], [1056, 252], [1008, 303], [931, 266], [865, 281], [795, 294], [723, 316], [657, 268], [578, 278], [514, 273], [437, 273], [375, 307], [298, 257], [245, 260], [161, 284], [104, 255], [110, 155], [178, 200], [226, 217], [292, 215], [353, 240], [414, 245], [491, 266], [568, 263], [632, 266], [706, 274], [775, 270], [843, 273], [908, 273], [973, 270], [1020, 231], [1097, 293], [1132, 119], [1064, 105], [1022, 103], [929, 52], [885, 55], [822, 111], [773, 63], [699, 62], [653, 86], [565, 57], [543, 52], [451, 91], [385, 83], [308, 59], [259, 93], [206, 129], [158, 78], [82, 153], [159, 176], [221, 141], [286, 189], [360, 180], [403, 180], [487, 136], [529, 129], [614, 120], [669, 139], [756, 126], [795, 129], [874, 134], [904, 132], [979, 170], [1039, 155], [1099, 131], [1188, 153], [1088, 155], [1041, 163], [987, 208], [913, 221], [882, 229], [806, 227], [721, 171], [706, 163], [613, 185], [571, 174], [506, 236], [454, 239], [393, 238], [338, 239], [302, 198]]
let xS = [];
let yS = [];

for (let i=0; i<lightCoords.length; i++) {
xS.push(lightCoords[i][0]);
yS.push(lightCoords[i][1]);
}

xS.sort(function(a, b) {
return a - b;
});
yS.sort(function(a, b) {
return a - b;
});

canvas.width = 1139;
canvas.height = 598;


for (let i=0; i<lightCoords.length; i++) {
ctx.fillStyle = "#FEC9F1";
ctx.beginPath();
ctx.arc((lightCoords[i][0] - xS[0]) + 5, (lightCoords[i][1] - yS[0]) + 5, 3, 0, 2 * Math.PI);
ctx.fill();
}

let i = 0;

function Animate(num) {
if (i > 298) {
  clearInterval(interval);
}
ctx.fillStyle = "#000000";
ctx.beginPath();
ctx.arc((lightCoords[i][0] - xS[0]) + 5, (lightCoords[i][1] - yS[0]) + 5, 4, 0, 2 * Math.PI);
ctx.fill();
i++;
}

let shown = 0;
let interval;
const options = {};
const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      shown++;
      if (shown <= 1) {
        console.log(entry);
        interval = setInterval(Animate, 25, i);
      }
    } 
  })
}, options);
observer.observe(canvas);
