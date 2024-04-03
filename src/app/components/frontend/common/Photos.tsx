"use client"
import Photo from "./Photo";
import { useState, useEffect } from "react";
export default function Photos() {
  const [photoDetails, setPhotoDetails] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3001/photos')
      .then(response => response.json())
      .then(data => setPhotoDetails(data))
      .catch(error => console.error('Error fetching photos:', error));
  }, []);

  return (
    <>
      <div className="container-fluid tm-container-content tm-mt-60">
        <div className="row mb-4">
          <h2 className="col-6 tm-text-primary">Latest Photos</h2>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <form action="" className="tm-text-primary">
              Page{" "}
              <input
                type="text"
                defaultValue={1}
                size={1}
                className="tm-input-paging tm-text-primary"
              />{" "}
              of 200
            </form>
          </div>
        </div>
        <div className="row tm-mb-90 tm-gallery">
          {photoDetails.map((photo, index) => (
            <Photo key={index} photo={photo} />
          ))}
        </div>{" "}
        {/* row */}
        <div className="row tm-mb-90">
          <div className="col-12 d-flex justify-content-between align-items-center tm-paging-col">
            <a
              href="javascript:void(0);"
              className="btn btn-primary tm-btn-prev mb-2 disabled"
            >
              Previous
            </a>
            <div className="tm-paging d-flex">
              <a href="javascript:void(0);" className="active tm-paging-link">
                1
              </a>
              <a href="javascript:void(0);" className="tm-paging-link">
                2
              </a>
              <a href="javascript:void(0);" className="tm-paging-link">
                3
              </a>
              <a href="javascript:void(0);" className="tm-paging-link">
                4
              </a>
            </div>
            <a href="javascript:void(0);" className="btn btn-primary tm-btn-next">
              Next Page
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
