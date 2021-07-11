import React from 'react';
import PropTypes from 'prop-types';
import s from '../Statistics/Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={s.section}>
    {title && <h2>{title}</h2>}
    <ul className={s.list}>
      {stats.map(({ id, label, percentage }) => (
        <li key={id}>
          <span> {label}</span>
          <span> {percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
