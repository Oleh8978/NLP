import React from 'react';
import { data } from '../../assets/constants';

// interface 
import { IResponseItem } from '../../controllers/nlpData/models';

interface IProps {
    data: IResponseItem
}

const ListItem: React.FC<IProps>  = (props) => {
  return (
    <div className="body-list-item">
        {props.data.text}
    </div>
  );
}

export default ListItem;