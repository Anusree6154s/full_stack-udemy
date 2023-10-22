## Code Files

Here's the code you provided along with the expected content output:

```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>CSS Box Model</title>
  <style>
    /* Write your CSS code here */

    #box1{
      background-color: cadetblue;
      padding: 20px;
      width: 200px;
      height: 200px;
      border-style: solid;
      border-color: black;
      border-width: 10px;
    }
    #box2{
      background-color: gold;
      padding: 20px;
      width: 200px;
      height: 200px;
      margin: 0px 0px 0px 260px;
      border-style: solid;
      border-color: black;
      border-width: 20px 10px;
    }
    #box3{
      background-color: indianred;
      margin: 0px 40px;
      width: 200px;
      height: 200px;
      border-style: solid;
      border-color: black;
      border-width: 10px;
    }
  </style>
</head>

<body>


  <!-- TODOs:
1. Create 3 Boxes using the div element.
2. Set their sizes to 200px heigh by 200px wide.
3. Set different background colors for each of the boxes (I used cadetblue, gold and indianred).
4. Add a paragraph <p> element into the first div and add the following words:
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at sapien porttitor urna elementum lacinia. In
    id magna pulvinar, ultricies lorem id, vehicula elit. Aliquam eu luctus nisl, vitae pellentesque magna. Phasellus
    dolor metus, laoreet ac convallis sit amet, efficitur sed dolor.
5. Set the 1st div to have 20px padding all around with a black 10px border.
6. Fix the style of the <p> element to remove all margins.
Hint: Use the CSS inspector in Chrome.
7. Set the 2nd div to have a 20px border on top and bottom and 10px border left and right. (See goal image)
8. Set the 3rd div to have a 10px border 
9. Set the margins for the divs so that each box corner touches the other. (See the goal image)
-->

<div id="box1">
  <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at sapien porttitor urna elementum lacinia. In
  id magna pulvinar, ultricies lorem id, vehicula elit. Aliquam eu luctus nisl, vitae pellentesque magna. Phasellus
  dolor metus, laoreet ac convallis sit amet, efficitur sed dolor.</p>
</div>
<div id="box2"></div>
<div id="box3"></div>

</body>

</html>
```

## Expected output 
![output](./goal.png)