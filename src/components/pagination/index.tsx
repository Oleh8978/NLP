import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';

// actions 
import * as actions from '../../controllers/pagination/actions';
import * as paginationInput from '../../controllers/paginationInput/actions';

// components
import PaginationItem from '../paginationItem';

// interfaces 
import { IResponseItem } from '../../controllers/nlpData/models';
import { IStore } from '../../controllers/storeModel';

// utils
import { pageHandler } from '../../utils/paginationHandler';

interface IProps {
  pages: number,
  activePage: number,
  data: IResponseItem[],
  paginationInput: string,
}

const Pagination: React.FC<IProps>  = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setPages(Math.ceil(props.data.length / 2 )))
  },[props.data.length])

  const numberOfPages = 10

  return (
    <div className="pagination">
      <div className='pagination-wrapper'>
        {Array.apply(null, Array(props.pages)).length < numberOfPages && <div 
          className="pagination-mover"
          onClick={() => {
            dispatch(actions.setActivePage(pageHandler(props.activePage, 'prev', Math.ceil(props.data.length / 2 ))))
          }}
        >
          Prev
        </div>}
        {
          Array.apply(null, Array(props.pages)).length > numberOfPages ? 
          <>
            <input 
              className="pagination-input"
              value={props.paginationInput}
              onChange={(e) => dispatch(paginationInput.setText(e.target.value.replace(/\D/g, '')))}
            >
            </input>
            <div
              className="pagination-mover"
              onClick={() => {
                if (Number(props.paginationInput) <= props.pages &&  Number(props.paginationInput) !== 0) {
                  dispatch(actions.setActivePage(Number(props.paginationInput)))
                }
              }}
            >
              GO
            </div>
          </> :
        <>
          {Array.apply(null, Array(props.pages)).map((item, index )=> {
            return <PaginationItem data={index + 1} key={index + 1}/>
          })}
        </>}
        {Array.apply(null, Array(props.pages)).length < numberOfPages &&  <div 
          className="pagination-mover"
          onClick={() => {
            dispatch(actions.setActivePage(pageHandler(props.activePage, 'next', Math.ceil(props.data.length / 2 ))))
          }}
        >
          Next
        </div>}
      </div>
    </div>
  );
}

export default connect(
  (state: IStore) => ({
      pages: state.pagination.pages,
      activePage: state.pagination.activePage,
      data: state.data.data,
      paginationInput: state.textPaginationInput
  }),
  {},
)(Pagination);