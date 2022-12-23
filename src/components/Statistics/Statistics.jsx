import css from './Statistics.module.css';
import PropTypes from 'prop-types';
export const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}

    <ul className={css.statList}>
      {stats.map(el => (
        <li key={el.id} className={css.item}>
          <span className={css.label}>{el.label}</span>
          <span className={css.percentage}>{el.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
