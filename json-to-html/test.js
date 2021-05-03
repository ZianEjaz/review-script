var myPastDate = new Date(new Date());
      

const y = [];
      for(let x = 0; x<=100; x++){  
       y[x]= {key : x}
        };


        var myPastDate = new Date(new Date());

            const newArray = y.map((obj, index) => {
              
          
              if(index % 3 == 0){
                myPastDate.setDate(myPastDate.getDate() - 1);
                obj.date = myPastDate
               
          }
          
              var dt = myPastDate;
              var mm = dt.getMonth() + 1;
              var dd = dt.getDate();
              var yyyy = dt.getFullYear();
              obj.date = dd + '/' + mm + '/' + yyyy;
              return obj;
            })
console.log(newArray)