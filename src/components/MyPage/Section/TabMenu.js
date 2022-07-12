import React, { useState } from 'react';

export default function Orgchart() {
  const [activeIndex, setActiveIndex] = useState(0);

  const tabClickHandler = index => {
    setActiveIndex(index);
  };

  const tabContArr = [
    {
      tabTitle: (
        <li
          className={activeIndex === 0 ? 'is-active' : ''}
          onClick={() => tabClickHandler(0)}
        >
          내가 쓴 게시글
        </li>
      ),
      tabCont: <div>탭1 내용</div>,
    },
    {
      tabTitle: (
        <li
          className={activeIndex === 1 ? 'is-active' : ''}
          onClick={() => tabClickHandler(1)}
        >
          내가 쓴 댓글
        </li>
      ),
      tabCont: <div> 탭2 내용</div>,
    },
  ];

  return (
    <div>
      <ul className="tabs is-boxed">
        {tabContArr.map((section, index) => {
          return section.tabTitle;
        })}
      </ul>
      <div>{tabContArr[activeIndex].tabCont}</div>
    </div>
  );
}
