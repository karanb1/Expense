import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  
  <Link className="item" to={`/edit/${id}`}>
  <div className="listitem">
       <div>
           <h3>{description}</h3>
         <p className="time">{moment(createdAt).format('MMMM Do, YYYY')}</p>
      </div>
      <div>
           <h3>
           {numeral(amount).format('0,0.00')}
          </h3>
      </div>
      </div>
      </Link>
  
);

export default ExpenseListItem;
