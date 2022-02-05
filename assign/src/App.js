import React,{useState} from "react";
import './App.css';

function App() {
  var [DOB,setDOB] = useState({dobDay:0,dobMonth:0,dobYear:0});
  var [age,setAge] = useState({day:0,month:0,year:0});

  const d = new Date();
  const curr_day = d.getDay()-1;
  const curr_month = d.getMonth()+1;
  const curr_year = d.getFullYear();

  const {dobDay,dobMonth,dobYear} = DOB;
  function displayAge() {
    var year,month,day;

    year = curr_year - dobYear;

    if (curr_month >= dobMonth) month = curr_month - dobMonth;
    else {
      year--;
      month = 12 + curr_month - dobMonth;
    }

    if (curr_day >= dobDay) day = curr_day - dobDay;
    else {
      month--;
      day = 31 + curr_day - dobDay;

      if (month < 0) {
        month = 11;
        year--;
      }
    }
   
  setAge({...age,day:day,month:month,year:year})
      
  }

  const handleChange = (e)=>{
    const daysInMonth = {1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};

    if(e.target.name == 'dobYear'){
      if(e.target.value > curr_year) alert('Incorrect Year');
    }
    
    if(e.target.name == 'dobMonth'){
      if(e.target.value > 12 || e.target.value < 1) alert('Incorrect Month');
      else if(dobYear == curr_year && e.target.value > curr_month) alert('Incorrect Month');
    }

    if(e.target.name == 'dobDay'){
      if(e.target.value > daysInMonth[dobMonth]) alert('Incorrect Day');
      else if(parseInt(dobYear)%4 == 0 && dobMonth == 2 && e.target.value > 29) alert('Incorrect Day');
    }

   setDOB({...DOB,[e.target.name]:e.target.value})
  }

  return (
    <div className="container">           
      <b>
        Enter the year: <input type="number" name="dobYear" onChange={handleChange} />
      </b>
      <br />
      <b>
        Enter the month: <input type="number" name="dobMonth" onChange={handleChange} />
      </b>
      <br />
      <b>
        Enter the day: <input type="number" name="dobDay" onChange={handleChange} />
      </b>
      <br />
      <br />
      <button onClick={displayAge} className="btn">Get Age</button>
      <br />

      <p><b>{`You are ${age.year} years ${age.month} months  ${age.day} days old`}</b></p>
    </div>
  );
}

export default App;

