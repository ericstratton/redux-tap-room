import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete } = props; // Object Destructuring //
  return (
    <>
      <h3>Keg Details</h3>
      <hr />
      <h3>{ keg.name } - { keg.brand }</h3>
      <h4>Price: ${ keg.price }/pint</h4>
      <h4>ABV: { keg.abv }%</h4>
      <h4>Pours: { keg.stock }</h4>
      <button onClick={ props.onClickingEdit }>Update Keg</button>
      <button onClick={ () => onClickingDelete(keg.id) }>Remove Keg</button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
}

export default KegDetail;