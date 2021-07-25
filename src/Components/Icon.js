import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function Icon() {
  return (
    <div>
      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#3b5998' }} >
        <MDBIcon fab icon='facebook-f' size='sm' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#55acee' }}>
        <MDBIcon fab icon='twitter' size='sm' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#dd4b39' }}>
        <MDBIcon fab icon='google' size='sm' />
      </MDBBtn>

      <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#ac2bac' }}>
        <MDBIcon fab icon='instagram' size='sm' />
      </MDBBtn>
    </div>
  );
}