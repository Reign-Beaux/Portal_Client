import React, { Fragment } from "react";
import "./style.css";

export interface DataList {
  id: number;
  text: string;
}

export interface List {
  id: number;
  text: string;
  isExpanded: boolean;
  datas: DataList[];
}

export interface CustomListProps {
  props: List;
  handleShowList: (id: number) => void;
  handleDataSelect: (id: number, datataSelect: string) => void;
  handleBlur: () => void;

}

const CustomList: React.FC<CustomListProps> = ({ props, handleShowList, handleDataSelect, handleBlur }) => {
  return (
    <div tabIndex={0} onBlur={handleBlur}>
      <div className="title-list" onClick={() => handleShowList(props.id)}>
        {props.text}
        {props.isExpanded ? (
          <i className="fa-solid fa-chevron-up"></i>
        ) : (
          <i className="fa-solid fa-chevron-down"></i>
        )}
      </div>
      {props.isExpanded && (
        <div className="container-list">
          {props.datas.map((data) => (
            <Fragment key={`fr-${data.id}`}>
              <hr />
              <div className="item-list" onClick={() => handleDataSelect(data.id, data.text)}>
                {data.text}
              </div>
            </Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomList;
