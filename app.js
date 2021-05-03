const rp = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");
const reviewsColor = '#f15a24';

const url = "http://localhost/reviews/";

rp(url).then((html) => {
  const $ = cheerio.load(html);
  const y = dataExtract($);
  // const dataObject = dataToHtml(reviews);
  // const shuffledData = dataShuffle(dataObject);
  // const datesAdded = addDates(shuffledData);
  // const cssApplied = applyCss(datesAdded);
  convertToJson(y);
  // printArray(cssApplied);
});

dataExtract = ($) => {
  reviews = [];
  for (let x = 0; $(`em:eq(${x})`).text() != ""; x++) {
    const text = $(`em:eq(${x})`).text();
    const name = $(`span:eq(${x})`).text();
    const singleComment = {
      comment: text.replace(/\s+/g, " "),
      name: name,
    };
    reviews.push(singleComment);
  }
  return reviews;
};
dataToHtml = (reviewsArray) => {
  const x = reviewsArray.map((obj) => {
    obj.html = `<div>${obj.comment}</div>`;
    return obj;
  });
  return x;
};
dataShuffle = (data) => {
  const dataArray = data.sort(() => Math.random() - 0.5);
  return dataArray;
};
convertToJson = (data) => {
  fs.writeFile("json-to-html/reviews.json", JSON.stringify(data), (error) => {
    if (error) throw error;
  });
};
addDates = (object) => {
  const y = [];
  for (let g = 0; g <= object.length; g += 0.3) {
    y.push(g);
  }
  const newArray = object.map((obj, index) => {
    var myCurrentDate = new Date();
    var myPastDate = new Date(myCurrentDate);
    myPastDate.setDate(myPastDate.getDate() - y[index]);
    var dt = myPastDate;
    var mm = dt.getMonth() + 1;
    var dd = dt.getDate();
    var yyyy = dt.getFullYear();
    obj.date = dd + '/' + mm + '/' + yyyy;
    return obj;
  });
  return newArray;
};
applyCss = (objectArray) => {
  const finalObj = objectArray.map((obj, index) => {
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
    return obj;
  });
  return finalObj;
};
printArray = (object) => {
  object.map((obj) => {
    // if (obj.date.includes("Mar")){
    console.log(obj.html);
    // }

  })
}