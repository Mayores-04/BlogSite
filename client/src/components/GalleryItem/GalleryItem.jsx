import React from "react";
import "./GalleryItem.css";
import { Link } from "react-router-dom";
import Image from "../Image";

const GalleryItem = ({ item }) => {
  const optimizedHeight = (372 * item.height) / item.width;

  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Link to={`/pin/${item.id}`} state={{ item }}>
        <Image path={item.media} alt="" w={372} h={optimizedHeight} />
      </Link>
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <img src="/general/share.svg" alt="" />
        </button>
        <button>
          <img src="/general/more.svg" alt="" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
