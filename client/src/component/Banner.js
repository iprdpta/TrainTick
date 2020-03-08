import React from "react";
import { Carousel, Image, Container } from "react-bootstrap";

class Banner extends React.Component {
  render() {
    return (
      <>
        <Carousel className="container-carousel" nextIcon="" prevIcon="">
          <Carousel.Item>
            <Image
              className="bannerImage"
              src="https://s3.envato.com/files/84579307/01_design.jpg"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="bannerImage"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSXaQQZDIXjxLGOWeGcdS8WhKjBVEB57cL397UW3MEAq6wB8EF0"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="bannerImage"
              src="https://s3.envato.com/files/84579307/01_design.jpg"
            />
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default Banner;
