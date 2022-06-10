import React from 'react'
import html2canvas from 'html2canvas';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Viewer_side from './components/viewer_side/Viewer_side';
import Table_list from './components/table_list/Table_list';
const App = () => {


  return (
    <>
    
      {/* <Viewer_nav/>
      <Viewer_side/> */}
{/*       
    <Table_list/> */}
    <BrowserRouter>
		
				<Routes>
					<Route path="/" element={<Table_list />}></Route>
          <Route path="/Viewer_side" element={<Viewer_side />}></Route>
			
				</Routes>
			</BrowserRouter>

    </>
  )
}

export default App