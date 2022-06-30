import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import Axios from "axios";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [viewContent, setViewContent] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/api/day", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify({
          user: {
            startDate: startDate.toISOString().slice(0, 10),
            endDate: endDate.toISOString().slice(0, 10)
          },
      }),
  }).then(response => response.json())
  .then((viewContent) => {
    setViewContent(viewContent);
  console.log(viewContent);
  });

  };

  


  return (
    <>
     <form onSubmit={submitHandler}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        locale={ko}                   // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        showPopperArrow={false}       // 화살표 변경
      />
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        locale={ko}                   // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        showPopperArrow={false}       // 화살표 변경
      />

<button type='submit'  >검색</button>
        
        </form>


    </>
  );
};

export default Calendar;