<<<<<<< HEAD
import React from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Search, Edit, Booking } from "../screen";
import SearchBar from "../SearchFunctionComponents/SearchBar";

const Searchroom = () => {
  return (
    <div>
      {/* SearchBar chỉ xuất hiện khi truy cập đường dẫn /search */}
      <SearchBar />
      <Outlet /> {/* Hiển thị các component con dựa trên route */}
    </div>
  );
};
const AuthRouter = () => {
  return (
    <div className="col content-center">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Edit />} />
          <Route path="/booking" element={<Booking />} />

          <Route path="/search" element={<Searchroom />}>
            {/* Thành phần cụ thể cho /search */}
            <Route index element={null} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default AuthRouter;
=======
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Search, EditRoom, Booking } from '../screen'
const AuthRouter = () => {
    return (
        <div className="col content-center">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<EditRoom />} />
                    <Route path='/booking' element={<Booking />} />
                    <Route path='/search' element={<Search />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default AuthRouter
>>>>>>> d7c7765958c3d5b437e37c5d81d86c6dec9369a6
