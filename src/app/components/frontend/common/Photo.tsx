interface PhotoData {
  ImageSrc: string;
  DisplayName: string;
  CreatedAt: string;
  TotalViews: string;
}
export default function Photo({ photo }: {photo: PhotoData}) {
  return (
    <>
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-5">
        <figure className="effect-ming tm-video-item">
          <img src={photo.ImageSrc} alt="{photo.DisplayName}" className="img-fluid" />
          <figcaption className="d-flex align-items-center justify-content-center">
            <h2>{photo.DisplayName}</h2>
            <a href="photo-detail.html">View more</a>
          </figcaption>
        </figure>
        <div className="d-flex justify-content-between tm-text-gray">
          <span className="tm-text-gray-light">{photo.CreatedAt}</span>
          <span>{photo.TotalViews}</span>
        </div>
      </div>
    </>
  )
}
