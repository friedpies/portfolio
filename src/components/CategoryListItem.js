import React from "react";
import { Gear } from "../assets/EngineeringSVGs";
import "../styles/CategoryListItem.scss";

const CategoryListItem = props => (
  <div className="category-item">
    <Gear />
    <div>
      <h3>MECHANICAL</h3>
      <p>
        From CAD to prototyping, fabrication, and assembly. I’ve designed
        mechanical hardware from internet-connected desktop devices to huge,
        complex motion-controlled systems. I understand how to design for all
        sorts of manufacturing processes and can speak the language to ensure
        that parts get fabricated efficiently and properly.
      </p>
    </div>
  </div>
);

export default CategoryListItem;
