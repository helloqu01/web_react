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
const Table_list = () => {

  const [viewContent, setViewContent] = useState([]);

  useEffect(()=>{
    Axios.get('http://localhost:3001/api/get').then((Response)=>{
      setViewContent(Response.data);
      console.log(Response.data)
    })
  }, [])
  

  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;


  return (
    <div  className='container2'id="container2">

      <header>
        <h1>게시물 목록</h1>
      </header>

      <label>
        페이지 당 표시할 게시물 수:&nbsp;
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

        <table>
            <thead>
            <tr>
                <th>상태</th>
                <th>케이스 이름</th>
                <th>환자 이름</th>
                <th>폼 정보</th>
                <th>수정한 날짜</th>
                <th>스캔한 날짜</th>
                <th>주문한 날짜</th>
                <th>기공소명</th>
            
            </tr>
            </thead>
            <tbody>

            {viewContent.slice(offset, offset + limit).map((viewContent, index) => (
                  
                  <tr key={index}>
                <td>{viewContent.idx}</td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{viewContent.name}</Link></td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{viewContent.name}</Link></td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{viewContent.name}</Link></td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{viewContent.name}</Link></td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{viewContent.name}</Link></td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{viewContent.name}</Link></td>
                <td><Link   to={"/Viewer_side"} state={{ content: {viewContent} }} >{viewContent.name}</Link></td>
              </tr>

            ))}

            </tbody>
        </table>
{/* 
        <div className="pagination">
          <a href="#">&laquo;</a>
          <a href="#">1</a>
          <a href="#" className="active">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">&raquo;</a>
        </div> */}




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