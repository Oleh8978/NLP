import React from 'react';
import { connect } from 'react-redux';

// components
import ListItem from '../listItem';

// interfaces 
import { IResponseItem } from '../../controllers/nlpData/models';
import { IStore } from '../../controllers/storeModel';

// utils
import { paginationHandler } from '../../utils/paginationHandler';

interface IProps {
  data: IResponseItem[];
  activePage: number;
}

const Body: React.FC<IProps>  = (props) => {
  return (
    <div className="body">
      {paginationHandler(props.data, 2)[props.activePage - 1].map((item: IResponseItem) =>{

        if (!item) {
          return <></>
        }

        return <ListItem key={item.id} data={item}/>

      })}
    </div>
  );
}

export default connect(
  (state: IStore) => ({
      data: state.data.data,
      activePage: state.pagination.activePage
  }),
  {},
)(Body);