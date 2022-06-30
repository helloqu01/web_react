import React from 'react'
import './table_list.css'
import Axios from 'axios';
import { useEffect} from 'react';
import {useState} from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router-dom';
import Viewer_side from '../viewer_side/Viewer_side';
import Pagination from "./Pagination";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";


const Table_list = () => {
  



  const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    Axios.get('http://3.35.10.95:3001/api/get').then((Response)=>{
      // Axios.get('http://localhost:3001/api/get').then((Response)=>{    
      for(let i = 0; i < Response.data.length; i++  ){
        let a = Response.data[i].status;
        if(a == '0'){
          var status_num = Response.data;
          status_num[i]["status"] = 'Information Completed';
        } else if(a == '1'){
          var status_num = Response.data;
          status_num[i]["status"] = 'Scan Completed';
        }else if(a == '2'){
          var status_num = Response.data;
          status_num[i]["status"] = 'Post Processing';
        }else if(a == '3'){
          var status_num = Response.data;
          status_num[i]["status"] = 'CAD';
        }else if(a == '4'){
          var status_num = Response.data;
          status_num[i]["status"] = 'Order';
        }else if(a == '5'){
          var status_num = Response.data;
          status_num[i]["status"] = 'Complete';
        }
      }
  
 
      setViewContent(Response.data)
      // console.log(Response.data)
       })
  }, [])
  


  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [search, setSearch] = useState("");




  const onChangeSearch = (e) => {
    Axios.get('http://3.35.10.95:3001/api/get')
    .then((res) => {
      for(let i = 0; i < res.data.length; i++  ){
        let a = res.data[i].status;
        if(a == '0'){
          var status_num = res.data;
          status_num[i]["status"] = 'Information Completed';
        } else if(a == '1'){
          var status_num = res.data;
          status_num[i]["status"] = 'Scan Completed';
        }else if(a == '2'){
          var status_num = res.data;
          status_num[i]["status"] = 'Post Processing';
        }else if(a == '3'){
          var status_num = res.data;
          status_num[i]["status"] = 'CAD';
        }else if(a == '4'){
          var status_num = res.data;
          status_num[i]["status"] = 'Order';
        }else if(a == '5'){
          var status_num = res.data;
          status_num[i]["status"] = 'Complete';
        }
      }
      setViewContent(res.data)
    });
    e.preventDefault();
    setSearch(e.target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (search === null || search === '') { //검색어가 없을 경우 전체 리스트 반환
    alert("검색어를 넣어주세요1");
    
    Axios.get('http://3.35.10.95:3001/api/get')
    .then((res) => {
      for(let i = 0; i < res.data.length; i++  ){
        let a = res.data[i].status;
        if(a == '0'){
          var status_num = res.data;
          status_num[i]["status"] = 'Information Completed';
        } else if(a == '1'){
          var status_num = res.data;
          status_num[i]["status"] = 'Scan Completed';
        }else if(a == '2'){
          var status_num = res.data;
          status_num[i]["status"] = 'Post Processing';
        }else if(a == '3'){
          var status_num = res.data;
          status_num[i]["status"] = 'CAD';
        }else if(a == '4'){
          var status_num = res.data;
          status_num[i]["status"] = 'Order';
        }else if(a == '5'){
          var status_num = res.data;
          status_num[i]["status"] = 'Complete';
        }
      }
      setViewContent(res.data)
    });
    } else { //검색 구현
      var s = document.getElementById("search");
      var search_value = s.options[s.selectedIndex].value;
      if(search_value != "patient_name"){
        const filterData = viewContent.filter((row) => row.case_name.toString().includes(search))
        if(Array.isArray(filterData) && filterData.length === 0){
          alert("검색 내용이 없습니다.");
          Axios.get('http://3.35.10.95:3001/api/get')
          .then((res) => {
            for(let i = 0; i < res.data.length; i++  ){
              let a = res.data[i].status;
              if(a == '0'){
                var status_num = res.data;
                status_num[i]["status"] = 'Information Completed';
              } else if(a == '1'){
                var status_num = res.data;
                status_num[i]["status"] = 'Scan Completed';
              }else if(a == '2'){
                var status_num = res.data;
                status_num[i]["status"] = 'Post Processing';
              }else if(a == '3'){
                var status_num = res.data;
                status_num[i]["status"] = 'CAD';
              }else if(a == '4'){
                var status_num = res.data;
                status_num[i]["status"] = 'Order';
              }else if(a == '5'){
                var status_num = res.data;
                status_num[i]["status"] = 'Complete';
              }
            }
            setViewContent(res.data)
          });
        } else{
          setViewContent(filterData)
          console.log("patient_name:"+ filterData);
          setPage(1)
        }
      } else {
        const filterData = viewContent.filter((row) => row.patient_name.toString().includes(search))
        if(Array.isArray(filterData) && filterData.length === 0){
          alert("검색 내용이 없습니다.");
          Axios.get('http://3.35.10.95:3001/api/get')
          .then((res) => {
            for(let i = 0; i < res.data.length; i++  ){
              let a = res.data[i].status;
              if(a == '0'){
                var status_num = res.data;
                status_num[i]["status"] = 'Information Completed';
              } else if(a == '1'){
                var status_num = res.data;
                status_num[i]["status"] = 'Scan Completed';
              }else if(a == '2'){
                var status_num = res.data;
                status_num[i]["status"] = 'Post Processing';
              }else if(a == '3'){
                var status_num = res.data;
                status_num[i]["status"] = 'CAD';
              }else if(a == '4'){
                var status_num = res.data;
                status_num[i]["status"] = 'Order';
              }else if(a == '5'){
                var status_num = res.data;
                status_num[i]["status"] = 'Complete';
              }
            }
            setViewContent(res.data)
          });
        } else{
          setViewContent(filterData)
          console.log("patient_name:"+ filterData);
          setPage(1)
        }
      }
     
    }
    setSearch('')
  }


  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


const submitHandler2 = (e) => {
    e.preventDefault();
    // state에 저장한 값을 가져옵니다.

    // axios.post("http://localhost:3001/api/day", day_data).then((res) => console.log(res));
    fetch("http://3.35.10.95:3001/api/day", {
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
    <div  className='container2'id="container2">

      <header>
        <h1>WEB VIEWER</h1>
        <h2>Case List</h2>
      </header>

      <label>
      Number of posts to display per page :&nbsp;
        <select
          type="number"
          value={limit}
          onChange={({ target: { value } }) => setLimit(Number(value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
      
        </select>
      </label>

      <div className='search'>

      <form onSubmit={submitHandler2}>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        //locale={ko}                   // 한글로 변경
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
        //locale={ko}                   // 한글로 변경
        dateFormat="yyyy.MM.dd (eee)" // 시간 포맷 변경
        showPopperArrow={false}       // 화살표 변경
      />

<button type='submit'  >search</button>
        
        </form>
      </div>


      <div className='search'>
        <select id="search">
          <option value="patient_name">patient name</option>
          <option value="case_name">case name</option>
        </select>
      <form onSubmit={e => onSearch(e)}>
        <input type="text" value={search} placeholder="search..." onChange={onChangeSearch} />
        <button type='submit'>search</button>
      </form>

      </div>

        <table  id="table1">
            <thead>
            <tr>
                <th>ID</th>
                <th>Case Name</th>
                <th>Patient Name</th>
                <th>Teeth Info</th>
                <th>File_name</th>
                <th>Status</th>
                <th>Date of Created</th>
                <th>Date of Scanned </th>
            </tr>
            </thead>
            <tbody>

            {viewContent.slice(offset, offset + limit).map((viewContent, index) => (

              
                <tr key={index}>
                {/* <td>{viewContent.idx}</td> */}
                <td>{viewContent.id}</td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{viewContent.patient_name}</Link></td>
                <td>{viewContent.case_name}</td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{viewContent.tooth_select}</Link></td>
                {/* <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{viewContent.case_name.toString().substr(0,1)}</Link></td> */}
                <td><Link id="status"  to={"/Viewer_side"} state={{ content: {viewContent} }}  >{viewContent.file_name.split(".")[0]}</Link></td>
                <td><Link id="status"  to={"/Viewer_side"} state={{ content: {viewContent} }}  >{viewContent.status}</Link></td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{new Date(viewContent.date_created).toISOString().slice(0, 10)}</Link></td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{new Date(viewContent.date_upload).toISOString().slice(0, 10)}</Link></td>
               
              </tr>

            ))}

            </tbody>
        </table>





      <footer>
        <Pagination
          total={viewContent.length}
          limit={limit}
          page={page}
          setPage={setPage}
        />
      </footer>
    </div>

  )
}

export default Table_list