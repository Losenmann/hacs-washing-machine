const active = "white";
const inactive = "#2A2A2A";
const warning = "red";
const running = "gold"

function loadcss() {
    let css = '/hacsfiles/ha-washing-machine/fonts.css'    
    let link = document.createElement('link');
    let head = document.getElementsByTagName('head')[0];
    link.rel = 'stylesheet';
    link.type = 'text/css';
    let t = link.cloneNode(true);
    t.href = css;
    head.appendChild(t);
}

function picture(a, b, c) {
//  let active = "white";
//  let inactive = "#2A2A2A";
//  let warning = "red";
//  let running = "gold"


  let color = inactive;
  let arr = [];
  if (b == "on") {
    color = active;
  }

  switch (a) {
    case "wm":
      // base64 encoded svg image
      // logo
      arr[0] = `<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 180 250" xmlns="http://www.w3.org/2000/svg"><g id="_x5F_default_26_" transform="matrix(1.449928, 0, 0, 1.449928, -84.077811, -49.017211)" style=""><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="120" y1="34.5511" x2="120" y2="206.5511" gradientTransform="matrix(1 0 0 -1 0 240.5511)"><stop offset="0" style="stop-color:#E6E6E6"/><stop offset="0.6" style="stop-color:#F1F1F1"/><stop offset="1" style="stop-color:#EAEAEA"/></linearGradient><path class="st0" d="M180,206H60c-1.1,0-2-0.9-2-2V36c0-1.1,0.9-2,2-2h120c1.1,0,2,0.9,2,2v168C182,205.1,181.1,206,180,206z" style="fill: url('#SVGID_1_');"/><g><circle class="st1" cx="120" cy="118.4" r="54" style="fill: rgb(70, 70, 70);"/><radialGradient id="Ellipse_886_copy_1_" cx="123.9062" cy="119.0024" r="41.4649" gradientTransform="matrix(0.9912 0 0 -0.9912 -2.8158 236.3552)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#4E4E4E"/><stop offset="0.5" style="stop-color:#565656"/><stop offset="1" style="stop-color:#414141"/></radialGradient><circle id="Ellipse_886_copy_5_" class="st2" cx="120" cy="118.4" r="41.1" style="fill: url('#Ellipse_886_copy_1_');"/><g><radialGradient id="SVGID_2_" cx="123.9062" cy="178.2568" r="41.4499" gradientTransform="matrix(0.9912 0 0 -0.9912 -2.8158 236.3552)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#4E4E4E"/><stop offset="0.5" style="stop-color:#565656"/><stop offset="1" style="stop-color:#414141"/></radialGradient><ellipse class="st3" cx="120" cy="89" rx="28.7" ry="11.7" style="fill: url('#SVGID_2_');"/></g><g><radialGradient id="SVGID_3_" cx="-820.9389" cy="277.1257" r="41.4" gradientTransform="matrix(-0.4956 -0.8584 -0.8584 0.4956 -99.8345 -694.3658)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#4E4E4E"/><stop offset="0.5" style="stop-color:#565656"/><stop offset="1" style="stop-color:#414141"/></radialGradient><path class="st4" d="M80.2,108.1c-2.6,10-1.4,21.1,4.2,30.8s14.5,16.2,24.5,19c2.6-10,1.4-21.1-4.2-30.8 C99.2,117.5,90.2,110.9,80.2,108.1z" style="fill: url('#SVGID_3_');"/></g><g><radialGradient id="SVGID_4_" cx="-262.9209" cy="1045.9927" r="41.4535" gradientTransform="matrix(-0.4956 0.8584 0.8584 0.4956 -857.3497 -144.9893)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#4E4E4E"/><stop offset="0.5" style="stop-color:#565656"/><stop offset="1" style="stop-color:#414141"/></radialGradient><path class="st5" d="M131,157.9c10-2.8,18.9-9.3,24.5-19s6.8-20.7,4.2-30.8c-10,2.8-18.9,9.3-24.5,19 C129.7,136.9,128.5,147.9,131,157.9z" style="fill: url('#SVGID_4_');"/></g><radialGradient id="SVGID_5_" cx="105.476" cy="132.0772" r="13.5918" gradientTransform="matrix(1.0357 0 0 -1.0357 11.4046 256.6924)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#535353"/><stop offset="0.5" style="stop-color:#575757"/><stop offset="1" style="stop-color:#4A4A4A"/></radialGradient><circle class="st6" cx="120.6" cy="119.9" r="14.1" style="fill: url('#SVGID_5_');"/><path class="st7" d="M58,66.3c0,0,11.9-0.5,23.1-2c11-1.4,25.5-4.8,39.9-4.8c13.9,0,27.8,3.3,38.4,4.8c10.9,1.5,22.5,2,22.5,2" style="fill: none; opacity: 0.15; stroke: rgb(0, 0, 0); stroke-width: 2px;"/><linearGradient id="SVGID_6_" gradientUnits="userSpaceOnUse" x1="119.45" y1="128.2083" x2="119.45" y2="79.1893" gradientTransform="matrix(1 0 0 -1 0 240.5511)"><stop offset="0" style="stop-color:#448CF6"/><stop offset="1" style="stop-color:#5FCBF7"/></linearGradient><path class="st8" d="M120,159.5c19.5,0,35.9-13.6,40-31.9h-4.7c-6,0-18.9-1-28.6-6.4c-9.3-5.2-15.9-7.5-26.7-7.5 c-8.2,0-16,2.4-21.1,4c0,0.2,0,0.5,0,0.7C78.9,141.1,97.3,159.5,120,159.5z" style="display: none; fill: url('#SVGID_6_'); perspective-origin: 50% 50%;"/></g><g><circle class="st9" cx="120" cy="47" r="9" style="fill: rgb(116, 116, 116);"/><circle id="Ellipse_887_copy_2_" class="st10" cx="120" cy="47" r="7" style="fill: rgb(225, 228, 229);"/><g><rect x="147" y="40" class="st11" width="30" height="15" style="fill: rgb(61, 61, 61);"/></g></g><path class="st12" d="M89.2,58H65.6c-1.2,0-2.2-1-2.2-2.2v-4.5h28v4.5C91.4,57,90.4,58,89.2,58z" style="opacity: 0.2;"/><linearGradient id="SVGID_7_" gradientUnits="userSpaceOnUse" x1="185.0722" y1="120.5511" x2="128.6585" y2="120.5511" gradientTransform="matrix(1 0 0 -1 0 240.5511)"><stop offset="0" style="stop-color:#828282"/><stop offset="1" style="stop-color:#828282;stop-opacity:0"/></linearGradient><path class="st13" d="M180,34h-54.2v172H180c1.1,0,2-0.9,2-2V36C182,34.9,181.1,34,180,34z" style="fill: url('#SVGID_7_'); opacity: 0.2;"/><linearGradient id="SVGID_8_" gradientUnits="userSpaceOnUse" x1="-885.0645" y1="120.5511" x2="-939.3094" y2="120.5511" gradientTransform="matrix(-1 0 0 -1 -828.1111 240.5511)"><stop offset="0" style="stop-color:#828282"/><stop offset="1" style="stop-color:#828282;stop-opacity:0"/></linearGradient><path class="st14" d="M60,34h54.2v172H60c-1.1,0-2-0.9-2-2V36C58,34.9,58.9,34,60,34z" style="fill: url('#SVGID_8_'); opacity: 0.2;"/><g class="st15" style="opacity: 0.25;"><radialGradient id="SVGID_9_" cx="84.2726" cy="160.7999" r="52.3446" gradientTransform="matrix(1 0 0 -1 0 240.5511)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color:#FFFFFF"/><stop offset="1" style="stop-color:#FFFFFF;stop-opacity:0"/></radialGradient><circle class="st16" cx="120" cy="118.4" r="54" style="fill: url('#SVGID_9_');"/></g></g></svg>`;
//      let wm_wash = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjxzdmcgdmlld0JveD0iMCAwIDUwMCA1MDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogIDxnIHRyYW5zZm9ybT0ibWF0cml4KDQ4LjkxMzUyNSwgMCwgMCwgNDguOTEzNTI1LCAtMjY4Ni4zNzM3NzksIC0xMzUxLjcyMjY1NikiIHN0eWxlPSIiPg0KICAgIDxnIGlkPSJMYXllcl8xIj4NCiAgICAgIDxnPg0KICAgICAgICA8cGF0aCBmaWxsPSIjMjcyNTI1IiBkPSJNNjMuMjIwMywzNC41NThoLTAuNTQwOGMwLjA0NjIsMC40MjY1LDAuMTE0MywwLjg2ODMsMC4yMDkxLDEuMzA0Mkg1Ny4xNzkgYzAuMDkzLTAuNDM1OSwwLjE1OTktMC44Nzc3LDAuMjA4NS0xLjMwNDJoLTAuNTQxNGMtMC4wNTUxLDAuNDk4Ny0wLjEzNTYsMS4wMTI5LTAuMjYyNCwxLjUwOGwtMC4wMDc3LDAuMDY1MSBjMCwwLjA2MDQsMC4wMjAxLDAuMTE4NCwwLjA1NzQsMC4xNjU4YzAuMDUyMiwwLjA2NjQsMC4xMjgsMC4xMDY2LDAuMjEyNiwwLjEwNjZoNi4zNzQyYzAuMDg0NywwLDAuMTYyOC0wLjA0MDMsMC4yMTM4LTAuMTA2NiBjMC4wMzczLTAuMDQ3NCwwLjA1NzQtMC4xMDU0LDAuMDU3NC0wLjE2NThsLTAuMDA4OS0wLjA2NTFDNjMuMzU3MiwzNS41NzA5LDYzLjI3NiwzNS4wNTY3LDYzLjIyMDMsMzQuNTU4IE02NC41NTg5LDMyLjYyMzYgYy0wLjAxMjQsMC4wNDAzLTAuMzIyMiwwLjk4NTYtMS4zNjcsMC45ODU2bC0wLjA0MzgtMC4wMDQ3Yy0wLjAxNzItMC4zMjU3LTAuMDI3Mi0wLjYzNDktMC4wMjcyLTAuODk2NyBjMC0wLjMyNDYsMC4wMDg5LTAuNTgxNiwwLjAxNjYtMC43NTgxaDEuMTE4MmMwLjE1MDUsMCwwLjI3MTMtMC4xMjMyLDAuMjcxMy0wLjI3MjV2LTIuMzQ3OCBjMC0wLjE1MDQtMC4xMjA4LTAuMjcxMi0wLjI3MTMtMC4yNzEyaC0yLjg1MDFjLTAuMTMwMywwLTAuMjQyMiwwLjA5LTAuMjY1MywwLjIxNTUgYy0wLjEwODQsMC41NDYxLTAuNTcyMiwwLjk0MDYtMS4xMDUyLDAuOTQwNmMtMC41MzU0LDAtMS4wMDA0LTAuMzk0NS0xLjEwNzUtMC45NDA2IGMtMC4wMjYxLTAuMTI1NS0wLjEzNjMtMC4yMTU1LTAuMjY3Mi0wLjIxNTVINTUuODEyYy0wLjE0OTMsMC0wLjI3MDEsMC4xMjA4LTAuMjcwMSwwLjI3MTJ2Mi4zNDc4IGMwLDAuMTQ5MywwLjEyMDgsMC4yNzI1LDAuMjcwMSwwLjI3MjVoMS4xMTdjMC4wMDc3LDAuMTc3NiwwLjAxNjYsMC40MzU5LDAuMDE2NiwwLjc2MjljMCwwLjI2MTgtMC4wMTAxLDAuNTY5Ny0wLjAyNDksMC44OTA4IGwtMC4wNjEsMC4wMDU5Yy0xLjA0MywwLTEuMzQ4Ny0wLjk0NDEtMS4zNjExLTAuOTg0NGwtMC41MTgzLDAuMTU3NmMwLjE0MjgsMC40NzM5LDAuNzE4NSwxLjM2ODIsMS44Nzk0LDEuMzY4MiBjMC44MDM3LDAsMS4zLTAuNDMxMiwxLjU4MzEtMC44NTQxYzAuMjgwNywwLjQyMjksMC43NzUzLDAuODU0MSwxLjU4MDgsMC44NTQxYzAuODA3OSwwLDEuMzAzNi0wLjQzMTIsMS41ODU1LTAuODU0MSBjMC4yODI2LDAuNDIyOSwwLjc3NTksMC44NTQxLDEuNTgyNiwwLjg1NDFjMS4xNjA5LDAsMS43NDI1LTAuODk0MywxLjg4NDEtMS4zNjgyTDY0LjU1ODksMzIuNjIzNnogTTYyLjYxMTUsMzEuNjU3IGMtMC4wMDQ3LDAuMDQwMy0wLjAzMzgsMC40NTI1LTAuMDMzOCwxLjA2ODVjMCwwLjIyMzksMC4wMDc3LDAuNDg0NSwwLjAyMTQsMC43NTMzYy0wLjU1MDgtMC4yNTctMC43MTk3LTAuODE0OS0wLjcyOTctMC44NDgxIGMtMC4wMzA3LTAuMTE2MS0wLjEzOC0wLjE5NjYtMC4yNi0wLjE5NjZjLTAuMTIyNiwwLTAuMjI4NiwwLjA4MTctMC4yNjA2LDAuMTk3OGMtMC4wMTI0LDAuMDQwMy0wLjI4NiwwLjk3NzItMS4zMjQ5LDAuOTc3MiBjLTEuMDM1NCwwLTEuMzA5NS0wLjkzNy0xLjMxODUtMC45NzcyYy0wLjAzNDktMC4xMTYxLTAuMTQxNi0wLjE5NzgtMC4yNjI0LTAuMTk3OGMtMC4xMjA4LDAtMC4yMjg2LDAuMDgwNS0wLjI2MjQsMC4xOTY2IGMtMC4wMDc3LDAuMDMzMi0wLjE3MzUsMC41ODI4LTAuNzExOSwwLjg0MzRjMC4wMTM2LTAuMjY3NywwLjAxOTUtMC41MjI0LDAuMDE5NS0wLjc0MjdjMC0wLjYxOTUtMC4wMjk2LTEuMDM0MS0wLjAzMzItMS4wNzQ0IGMtMC4wMTEyLTAuMTM5Ny0wLjEyNzktMC4yNDk5LTAuMjcwMS0wLjI0OTloLTEuMTAyMnYtMS44MDg4aDIuMzk1MmMwLjIzMzQsMC42NzY0LDAuODQxMSwxLjE1NzMsMS41NTcxLDEuMTU3MyBjMC43MTMxLDAsMS4zMjA4LTAuNDgxLDEuNTUzNi0xLjE1NzNoMi4zOTc1djEuODA4OGgtMS4xMDY0QzYyLjczOTQsMzEuNDA3MSw2Mi42MjI3LDMxLjUxNzMsNjIuNjExNSwzMS42NTciLz4NCiAgICAgIDwvZz4NCiAgICA8L2c+DQogIDwvZz4NCjwvc3ZnPg==";
      // wash
      arr[1] = '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(4.816, 0, 0, 4.816, -264, -134)"><path fill="currentColor" d="M63.2203,34.558h-0.5408c0.0462,0.4265,0.1143,0.8683,0.2091,1.3042H57.179c0.093-0.4359,0.1599-0.8777,0.2085-1.3042h-0.5414c-0.0551,0.4987-0.1356,1.0129-0.2624,1.508l-0.0077,0.0651c0,0.0604,0.0201,0.1184,0.0574,0.1658c0.0522,0.0664,0.128,0.1066,0.2126,0.1066h6.3742c0.0847,0,0.1628-0.0403,0.2138-0.1066c0.0373-0.0474,0.0574-0.1054,0.0574-0.1658l-0.0089-0.0651C63.3572,35.5709,63.276,35.0567,63.2203,34.558 M64.5589,32.6236c-0.0124,0.0403-0.3222,0.9856-1.367,0.9856l-0.0438-0.0047c-0.0172-0.3257-0.0272-0.6349-0.0272-0.8967c0-0.3246,0.0089-0.5816,0.0166-0.7581h1.1182c0.1505,0,0.2713-0.1232,0.2713-0.2725v-2.3478c0-0.1504-0.1208-0.2712-0.2713-0.2712h-2.8501c-0.1303,0-0.2422,0.09-0.2653,0.2155c-0.1084,0.5461-0.5722,0.9406-1.1052,0.9406c-0.5354,0-1.0004-0.3945-1.1075-0.9406c-0.0261-0.1255-0.1363-0.2155-0.2672-0.2155H55.812c-0.1493,0-0.2701,0.1208-0.2701,0.2712v2.3478c0,0.1493,0.1208,0.2725,0.2701,0.2725h1.117c0.0077,0.1776,0.0166,0.4359,0.0166,0.7629c0,0.2618-0.0101,0.5697-0.0249,0.8908l-0.061,0.0059c-1.043,0-1.3487-0.9441-1.3611-0.9844l-0.5183,0.1576c0.1428,0.4739,0.7185,1.3682,1.8794,1.3682c0.8037,0,1.3-0.4312,1.5831-0.8541c0.2807,0.4229,0.7753,0.8541,1.5808,0.8541c0.8079,0,1.3036-0.4312,1.5855-0.8541c0.2826,0.4229,0.7759,0.8541,1.5826,0.8541c1.1609,0,1.7425-0.8943,1.8841-1.3682L64.5589,32.6236z M62.6115,31.657c-0.0047,0.0403-0.0338,0.4525-0.0338,1.0685c0,0.2239,0.0077,0.4845,0.0214,0.7533c-0.5508-0.257-0.7197-0.8149-0.7297-0.8481c-0.0307-0.1161-0.138-0.1966-0.26-0.1966c-0.1226,0-0.2286,0.0817-0.2606,0.1978c-0.0124,0.0403-0.286,0.9772-1.3249,0.9772c-1.0354,0-1.3095-0.937-1.3185-0.9772c-0.0349-0.1161-0.1416-0.1978-0.2624-0.1978c-0.1208,0-0.2286,0.0805-0.2624,0.1966c-0.0077,0.0332-0.1735,0.5828-0.7119,0.8434c0.0136-0.2677,0.0195-0.5224,0.0195-0.7427c0-0.6195-0.0296-1.0341-0.0332-1.0744c-0.0112-0.1397-0.1279-0.2499-0.2701-0.2499h-1.1022v-1.8088h2.3952c0.2334,0.6764,0.8411,1.1573,1.5571,1.1573c0.7131,0,1.3208-0.481,1.5536-1.1573h2.3975v1.8088h-1.1064C62.7394,31.4071,62.6227,31.5173,62.6115,31.657"/></g></svg>';
      // rinse
      arr[2] = '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(4.816, 0, 0, 4.816, -399, -134)"><path fill="currentColor" d="M91.2134,34.1174h-0.5432c0.0474,0.5603,0.1256,1.1585,0.2535,1.7496h-5.7096c0.0906-0.4241,0.1551-0.8517,0.2025-1.2639h-0.5395c-0.0557,0.4845-0.1368,0.9856-0.2582,1.4688l-0.0089,0.0664c0,0.0593,0.0201,0.1173,0.0574,0.1647c0.0509,0.0675,0.1291,0.1054,0.2126,0.1054h6.3741c0.0859,0,0.1629-0.0379,0.215-0.1054c0.0361-0.0474,0.0575-0.1054,0.0575-0.1647l-0.0101-0.0675C91.3538,35.4263,91.2614,34.7464,91.2134,34.1174 M91.1583,33.0169c-0.0012-0.1018-0.0035-0.2049-0.0035-0.2985c0-0.3281,0.0101-0.5864,0.0189-0.764h1.1159c0.1504,0,0.2724-0.122,0.2724-0.2713v-2.3502c0-0.1493-0.122-0.2701-0.2724-0.2701h-2.8477c-0.1315,0-0.2417,0.0912-0.2683,0.218c-0.1066,0.5461-0.5716,0.9381-1.1046,0.9381s-0.9992-0.392-1.1064-0.9381c-0.0237-0.1268-0.1392-0.218-0.2659-0.218H83.846c-0.1493,0-0.2713,0.1208-0.2713,0.2701v2.3502c0,0.1493,0.122,0.2713,0.2713,0.2713h1.1182c0.0077,0.1765,0.0166,0.4324,0.0166,0.7569c0,0.2345-0.0089,0.5106-0.0201,0.7984c-0.5769-0.0889-1.1289-0.2215-1.4801-0.3956l-0.2387,0.4868c0.7569,0.372,2.195,0.5722,3.164,0.5722c0.7137,0,1.4209-0.1102,2.0481-0.3163l0.1184-0.0308c0.5899-0.1931,1.2402-0.2938,1.8965-0.2938c0.6711,0,1.7248,0.0995,2.2223,0.2488l0.1551-0.5176C92.4471,33.1425,91.7713,33.056,91.1583,33.0169 M90.6466,31.6617c-0.0036,0.0403-0.0349,0.4561-0.0349,1.0744c0,0.0794,0.0024,0.1682,0.0024,0.2559c-0.0456-0.0012-0.0978-0.0012-0.1451-0.0012c-0.7137,0-1.4233,0.1089-2.0493,0.3162l-0.1197,0.032c-0.5887,0.1919-1.2379,0.2914-1.8941,0.2914c-0.2748,0-0.5864-0.0189-0.9074-0.0533c0.0154-0.3068,0.0249-0.5982,0.0249-0.8493c0-0.6137-0.0308-1.0258-0.0332-1.0662c-0.0101-0.1397-0.1279-0.2487-0.2701-0.2487h-1.1034v-1.8077h2.3976c0.2322,0.6752,0.8399,1.1562,1.5548,1.1562c0.7131,0,1.3196-0.481,1.5535-1.1562h2.397v1.8077h-1.1046C90.7757,31.413,90.6578,31.522,90.6466,31.6617"/></g></svg>';
      // spin
      arr[3] = '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(4.816, 0, 0, 4.816, -535, -134)"><path fill="currentColor" d="M113.3067,32.5206c0-0.5793-0.0302-0.969-0.0338-1.0069c-0.0112-0.1422-0.1279-0.2488-0.2695-0.2488h-1.017v-1.6654h2.2211c0.2227,0.6349,0.7955,1.0862,1.4677,1.0862c0.6752,0,1.2479-0.4514,1.4718-1.0862h2.2181v1.7673h0.542v-2.0375c0-0.1504-0.1202-0.2712-0.2695-0.2712h-2.6736c-0.1303,0-0.2423,0.0924-0.266,0.2191c-0.1007,0.5022-0.5277,0.8659-1.0229,0.8659c-0.4934,0-0.9234-0.3637-1.0187-0.8659c-0.0261-0.1268-0.138-0.2191-0.2677-0.2191h-2.6718c-0.1516,0-0.2718,0.1208-0.2718,0.2712v2.2045c0,0.1493,0.1202,0.2713,0.2718,0.2713h1.03c0.0066,0.167,0.0154,0.4063,0.0154,0.7024c0,0.8162-0.0574,2.0339-0.3393,3.1355l-0.0066,0.0687c0,0.0592,0.019,0.1172,0.0563,0.1658c0.0509,0.0675,0.1291,0.103,0.2126,0.103h2.5847v-0.5413h-2.2507C113.2469,34.3804,113.3067,33.2858,113.3067,32.5206 M120.7749,34.9667l-0.0522-0.0297c-0.3258,0.5556-0.8304,1.0022-1.3835,1.2237c-1.4168,0.571-2.519-0.0889-3.0757-0.8943c-0.6201-0.8908-0.6438-2.3384,0.3068-3.0763c0.465-0.3553,1.0851-0.4975,1.6631-0.3814c0.4697,0.0959,0.844,0.3542,1.0525,0.7262c0.2476,0.4383,0.3193,0.8766,0.2085,1.2651c-0.0918,0.3282-0.3139,0.616-0.5946,0.77c-0.3868,0.2155-0.7226,0.1718-0.9388,0.0983c-0.2795-0.0948-0.517-0.3045-0.6177-0.5449c-0.1564-0.3695-0.0805-0.7356,0.2025-0.9524c0.1209-0.0924,0.2648-0.1339,0.4016-0.1161c0.1084,0.0154,0.2001,0.0758,0.2819,0.1611l0.3868-0.3849c-0.1653-0.173-0.3666-0.2796-0.5952-0.3127c-0.2807-0.0379-0.5734,0.0438-0.8043,0.2239c-0.4797,0.3696-0.626,0.995-0.3726,1.5932c0.1629,0.3839,0.5147,0.7001,0.9406,0.847c0.4525,0.154,0.9423,0.1055,1.3806-0.1374c0.4003-0.2239,0.7202-0.6326,0.8517-1.0981c0.1042-0.3696,0.1457-0.9618-0.2582-1.6773c-0.2861-0.5118-0.7907-0.8635-1.4185-0.9915c-0.7267-0.1493-1.5133,0.0332-2.1014,0.4845c-1.1947,0.9251-1.1846,2.7186-0.4212,3.8131c0.6758,0.9772,2.012,1.7756,3.7243,1.0874c0.6266-0.2523,1.1917-0.7439,1.5772-1.3516L120.7749,34.9667z"/></g></svg>';
      // door lock
      arr[4] = '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(4.816, 0, 0, 4.816, -532.5, -394.5)"><path fill="currentColor" d="M114.3865,87.09c0,0.3648-0.2914,0.6598-0.6539,0.6598c-0.3618,0-0.6574-0.295-0.6574-0.6598c0-0.3601,0.2955-0.6539,0.6574-0.6539C114.0951,86.4361,114.3865,86.7299,114.3865,87.09 M114.9965,86.7405c-0.1143-0.5639-0.6462-0.9808-1.2639-0.9808c-0.7368,0-1.335,0.597-1.335,1.3303c0,0.7391,0.5982,1.3373,1.335,1.3373c0.6065,0,1.1395-0.4229,1.2864-1.0069c0.0136,0,2.1648,0.0047,2.1648,0.0047v0.436l0.0397,0.0367h0.5544l0.0373-0.0367v-0.4407h0.4673v0.706l0.0409,0.0379h0.5976l0.0391-0.0379V86.782l-0.0391-0.0415H114.9965z"/><path fill="currentColor" d="M115.7629,82.8279c-2.3525,0-4.2656,1.9131-4.2656,4.2656c0,2.3525,1.9131,4.2656,4.2656,4.2656c2.3525,0,4.2662-1.9131,4.2662-4.2656C120.0292,84.741,118.1155,82.8279,115.7629,82.8279 M112.0404,87.0935c0-1.3243,0.6995-2.4864,1.7437-3.1462l3.941,6.3031c-0.5704,0.3566-1.2414,0.565-1.9622,0.565C113.7107,90.8154,112.0404,89.1452,112.0404,87.0935 M118.1664,89.9294l-3.9014-6.2415c0.459-0.2014,0.9648-0.3163,1.4979-0.3163c2.0517,0,3.7231,1.6702,3.7231,3.7219C119.486,88.2296,118.9719,89.2471,118.1664,89.9294"/></g></svg>';
      // remote control
      arr[5] = '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(4.816, 0, 0, 4.816, -431, -394)"><path fill="currentColor" d="M96.7524,82.8576l-0.2227,0.3838c0.8387,0.501,1.521,1.2366,1.9521,2.1204l0.3862-0.2251C98.3966,84.189,97.6598,83.3953,96.7524,82.8576"/><path fill="currentColor" d="M98.6027,82.9227c-0.3956-0.3968-0.8375-0.7297-1.3077-1.0057l-0.2215,0.3849c0.4359,0.2571,0.8469,0.5686,1.213,0.937c0.4703,0.4678,0.8493,1.001,1.1395,1.5767l0.3862-0.2239C99.5018,83.9841,99.1003,83.4178,98.6027,82.9227"/><g><path fill="currentColor" d="M93.9794,83.3681c-2.3265,0-4.2135,1.8881-4.2135,4.2146c0,2.3289,1.8871,4.2147,4.2135,4.2147c2.3265,0,4.2123-1.8858,4.2123-4.2147C98.1917,85.2562,96.3058,83.3681,93.9794,83.3681z M93.9794,91.262c-2.0315,0-3.6781-1.6466-3.6781-3.6793c0-2.0315,1.6466-3.6792,3.6781-3.6792c2.0315,0,3.6769,1.6477,3.6769,3.6792C97.6563,89.6154,96.0109,91.262,93.9794,91.262z"/></g><path fill="currentColor" d="M91.9597,85.4659l2.1607,2.0043c0,0,0.1019,0.1149-0.0082,0.2298l-2.1666,1.9996c0,0-0.0747,0.0509-0.1303,0.0154c0,0-0.0663-0.0355-0.0604-0.1351v-4.0074c0,0-0.0106-0.0711,0.0604-0.1125C91.8151,85.46,91.8909,85.4079,91.9597,85.4659"/><path fill="currentColor" d="M94.8962,89.6723c-0.1374,0-0.2464-0.1102-0.2464-0.2476v-3.684c0-0.1374,0.109-0.2476,0.2464-0.2476c0.1362,0,0.2476,0.1101,0.2476,0.2476v3.684C95.1438,89.5621,95.0324,89.6723,94.8962,89.6723"/><path fill="currentColor" d="M95.9576,89.6723c-0.1386,0-0.2476-0.1102-0.2476-0.2476v-3.684c0-0.1374,0.109-0.2476,0.2476-0.2476c0.1362,0,0.2452,0.1101,0.2452,0.2476v3.684C96.2028,89.5621,96.0938,89.6723,95.9576,89.6723"/></g></svg>';
      // child lock
      arr[6] = '<?xml version="1.0" encoding="utf-8"?><svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(4.816, 0, 0, 4.816, -229, -392)"><path fill="currentColor" d="M53.7142,88.2035c0.1433,0,0.2582-0.1149,0.2582-0.257c0-0.1433-0.1149-0.2582-0.2582-0.2582c-0.144,0-0.2571,0.1149-0.2571,0.2582C53.4571,88.0886,53.5702,88.2035,53.7142,88.2035 M56.441,86.5747h-1.9083v-2.5421c-0.0391-0.9714-0.7966-1.6406-1.8438-1.6406c-1.0489,0-1.8052,0.6704-1.842,1.6311l-0.003,2.5516h-1.7769c-0.1291,0-0.2339,0.1054-0.2339,0.2345v3.0289c0,0.0901,0.0533,0.1741,0.1345,0.212c0.1392,0.0687,3.4784,1.6335,7.5599,0.0059c0.0906-0.0343,0.1475-0.122,0.1475-0.218v-3.0289C56.675,86.6801,56.5696,86.5747,56.441,86.5747 M51.3136,84.0326c0.0344-0.8067,0.7143-1.1727,1.3753-1.1727c0.6616,0,1.341,0.366,1.3706,1.181l0.003,2.5338h-2.7488V84.0326z M56.2059,89.6711c-3.3991,1.29-6.2842,0.2653-6.9013,0.0119v-2.638h6.9013V89.6711z M51.807,88.2035c0.1428,0,0.2553-0.1149,0.2553-0.257c0-0.1433-0.1125-0.2582-0.2553-0.2582c-0.1433,0-0.2582,0.1149-0.2582,0.2582C51.5488,88.0886,51.6637,88.2035,51.807,88.2035M52.7416,89.7612c0.9435,0,1.7656-0.4478,2.044-1.1088l-0.4312-0.1847c-0.2043,0.4833-0.8683,0.8221-1.6128,0.8221c-0.7303,0-1.3906-0.3305-1.6045-0.8031l-0.4294,0.1943C51.0015,89.3252,51.8183,89.7612,52.7416,89.7612"/></g></svg>';
      // wifi
      arr[7] = '';
      // mute
      arr[8] = '';
      break;
    default:
  }

  Object.keys(c).forEach(function(key, n) {
    switch (key) {
      case "run_state":
        switch (c[key]) {
          case "Стирка":
            arr[1] = arr[1].replace(/currentColor/g, running);
            break;
          case "Ополаскивание":
            arr[2] = arr[2].replace(/currentColor/g, running);
            break;
          case "Отжим":
            arr[3] = arr[3].replace(/currentColor/g, running);
            break;
          default:
        }
      case "door_lock":
        if (c[key] == "on") {
          arr[4] = arr[4].replace(/currentColor/g, warning);
        }
        break;
      case "remote_start":
        if (c[key] == "on") {
          arr[5] = arr[5].replace(/currentColor/g, running);
        }
        break;
      case "child_lock":
        if (c[key] == "on") {
          arr[6] = arr[6].replace(/currentColor/g, running);
        }
        break;
      default:
    }
  });

  arr.forEach(function(elem, id) {
    arr[id] = "data:image/svg+xml;base64," + btoa(elem.replace(/currentColor/g, color));
  });

  return arr;
}

class WashingMachine extends HTMLElement {
  // Whenever the state changes, a new `hass` object is set. Use this to
  // update your content.
  set hass(hass) {
    // Initialize the content if it's not there yet.
    if (!this.content) {
      this.innerHTML = `
        <ha-card header="Washing Machine">
          <div class="card-content"></div>
        </ha-card>
      `;
      this.content = this.querySelector("div");
    }

    const entityId = this.config.entity;
    const state = hass.states[entityId];
    const friendlyName = state.attributes["friendly_name"] || state.entity_id;
    const stateStr = state ? state.state : "unavailable";

    let color = inactive;
    if (stateStr == "on") {
      color = active;
    }

    let arr = picture("wm",stateStr,state.attributes);
    loadcss();
    this.content.innerHTML = `
<table>
  <td><img src="${arr[0]}" style="width:144px;height:200px;"/></td>
  <td>
    <table>
      <td>
      <tr><div style="margin-left:5px;font-size:110%;"><b>Статус: ${state.attributes["run_state"]}</b><br><b>Программа: ${state.attributes["current_course"]}</b><br></div></tr>
      <tr>
        <img src="${arr[1]}" style="width:50px;height:50px;margin:5px;"/>
        <img src="${arr[2]}" style="width:50px;height:50px;margin:5px;"/>
        <img src="${arr[3]}" style="width:50px;height:50px;margin:5px;"/>
      </tr>
      <tr><p style="font-family:LG_LCD;font-size:250%;margin:5px;align:center;color:${color}">${state.attributes["remain_time"]}</p></tr>
      <tr>
        <img src="${arr[4]}" style="width:50px;height:50px;margin:5px;"/>
        <img src="${arr[5]}" style="width:50px;height:50px;margin:5px;"/>
        <img src="${arr[6]}" style="width:50px;height:50px;margin:5px;"/>
      </tr></td>
    </table>
  </td>
</table>
    `;
  }

  // The user supplied configuration. Throw an exception and Home Assistant
  // will render an error card.
  setConfig(config) {
    if (!config.entity) {
      throw new Error("You need to define an entity");
    }
    this.config = config;
  }

  getCardSize() {
    return 3;
  }
}

customElements.define("washing-machine", WashingMachine);
