const arrayToTxtFile = require('array-to-txt-file')


const reviewsColor = '#4d4d4d';

const data = require("./reviews.json");
const shuffledData = data.sort(() => Math.random() - 0.5);
var myPastDate = new Date(new Date(2021, 06, 01));
const newArray = shuffledData.map((obj, index) => {
  if (index % 3 == 0) {
    myPastDate.setDate(myPastDate.getDate() - 1);
  }
  obj.date = `${myPastDate.getDate()}/${myPastDate.getMonth()+1}/${myPastDate.getFullYear()}`;
  // var dt = myPastDate;
  // var mm = dt.getMonth() + 1;
  // var dd = dt.getDate();
  // var yyyy = dt.getFullYear();
  // obj.date = dd + "/" + mm + "/" + yyyy;
  return obj;
});
const finalHtml = newArray.map((obj, index)=>{
  if (index % 2 == 0) {
    obj.html = `<div align="left" style="padding-top: 30px;">
          <p><strong><em>${obj.comment}</em></strong></p>
          <div><span style="color: ${reviewsColor}; font-weight: bold;">${obj.name}</span> - ${obj.date}</div>
      </div>`;
  } else {
    obj.html = `<div align="right" style="padding-top: 30px;">
          <p><strong><em>${obj.comment}</em></strong></p>
          <div><span style="color: ${reviewsColor}; font-weight: bold;">${obj.name}</span> - ${obj.date}</div>
      </div>`;
  }
  return obj.html;
})
arrayToTxtFile(finalHtml, './test-output.html', err => {
  if(err) {
    console.error(err)
    return
  }
  console.log("done")
})