console.log("hello script js");

var inputHappened = function(currentInput){
  console.log( currentInput );
  // return "WOW GOOGLE SHOPPING";

var brand= currentInput;
var items= "";
var wholeObjectArray = [];
// products.item is an array
// getting the array of items
//  look at every object in the array
//  if the value in the object mentions the value w're looking for ("nikon")
// put that wholbe object into ta reults array
//  show the results arry

//  get the item by brand key

// console.log(products["items"][1]["product"]["brand"]);
//  need to iterate on that 1!


for (var i = 0; i < products["items"].length; i++) {
  var brandNameOutput = products["items"][i]["product"]["brand"];
   if (brandNameOutput === brand) {
 wholeObjectArray.push(products["items"][i]["product"]["title"]);
  console.log(brandNameOutput);
  console.log(products["items"][i]["product"]["title"]);
   }
}
// console.log(wholeObjectArray);
// (products["items"][1]["product"]["brand"]);

    return wholeObjectArray;
};

