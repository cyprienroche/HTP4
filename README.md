# HTP4
<head>
  <style>
    .fishes
    {
      position:absolute;
      top: 10px;
      left: 10px;
      z-index: 1;
      width: 100%;
      height: 100%;
    }
    .fish
    {
      position:relative;
      top: 25px;
      left: 25px;
      width: 5%;
      height: 3.5%;
      z-index: 2;
      cursor: pointer;
      transform: translate(799px, 525px);
    }
  </style>
</head>
<body>
  <img src="images/Clue.jpg" class="fishes" >
  <img src="images/Map.jpg" class="fish" onclick="window.open('Map/html.html', '_blank');">
</body>
