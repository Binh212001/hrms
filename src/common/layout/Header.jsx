import { Avatar } from "antd";
import React, { useState } from "react";
import router from "../../routers/routers";
import { Link, useParams } from "react-router-dom";

function Header({ page }) {
  const [active, setActive] = useState(0);
  // eslint-disable-next-line
  const listLink = router.filter((l) => l.page == page);
  const { code } = useParams();
  return (
    <div id="header" className="flex  justify-between  items-center border-blue-200 border-b-2">
      <div>
        <ul className="list-none  flex ">
          {listLink.map((data, index) => {
            return (
              <li key={data.path} className={`${active === index ? "active-link" : ""} px-7`} onClick={() => setActive(index)}>
                <Link className="block" to={data.to ? data.to + code : data.path}>
                  {data.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className=" flex  items-center">
        <Avatar src="" />
        <div>Phạm NGọc Bình</div>
      </div>
    </div>
  );
}

export default Header;
