import React from 'react';
import { useDispatch, connect } from 'react-redux';

import * as actions from '../../controllers/pagination/actions';

// interfaces
import { IStore } from '../../controllers/storeModel';

interface IProps {
  data: number;
  activePage: number
}

const PaginationItem: React.FC<IProps>  = (props) => {

  const dispatch = useDispatch();


  return (
    <div 
      className={`${"pagination-item"} ${props.activePage === props.data ? 'pagination-active' : ''}`}
      onClick={()=> {
        dispatch(actions.setActivePage(props.data))
      }}
    >
      {props.data}
    </div>
  );
}

export default connect(
  (state: IStore) => ({
      activePage: state.pagination.activePage,
  }),
  {},
)(PaginationItem);