import React from 'react';
import { Insight, Clients, Task } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase, faArrowsRotate, faArrowTrendUp, faMoneyBills, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import './overview.scss';

const Overview = () => {
  // Tag data array
  const tags = [
    { id: 1, title: "Capacity", text: '132 GB', icon: <FontAwesomeIcon icon={faDatabase} />, subIcon: <FontAwesomeIcon icon={faArrowsRotate} />, subTitle: 'Just Updated' },
    { id: 2, title: "Growth", text: '18%', icon: <FontAwesomeIcon icon={faArrowTrendUp} />, subIcon: <FontAwesomeIcon icon={faCalendarDays} />, subTitle: 'Past Day' },
    { id: 3, title: "Revenue", text: '$1,827', icon: <FontAwesomeIcon icon={faMoneyBills} />, subIcon: <FontAwesomeIcon icon={faCalendarDays} />, subTitle: 'Past Week' },
  ];

  return (
    <>
      {/* Overview Section */}
      <section id='overview'>
        <h1 className="page-title">Overview</h1>
        <div className="grid-container">
          {tags.map(tag => (
            <div key={tag.id} className="tag-container grid-d-4 grid-s-12">
              <div className="upper-tag-container">
                <div className="icon">
                  {tag.icon}
                </div>
                <div className="tag-stat">
                  <p>{tag.title}</p>
                  <h2>{tag.text}</h2>
                </div>
              </div>
              <div className="lower-tag-container">
                {tag.subIcon}
                <p>{tag.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Insight Section */}
      <section>
        <Insight />
      </section>
      {/* Task Section */}
      <section>
        <Task />
      </section>
      {/* Clients Section */}
      <section>
        <Clients />
      </section>
    </>
  );
};

export default Overview;
