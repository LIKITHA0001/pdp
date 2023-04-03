import React from 'react';
import { } from 'recharts';
import {  Panel,Title } from '@ui5/webcomponents-react';

export const renderCustomizeLengend = props => {
    const mapping = { 
      ActiveSession:"total",
      User:"regular",
      Volume:"promotion"
  };
    const { payload } = props;
    const pannels = {
      total: [],
      regular: [],
      promotion: [],
    
    }
    payload.forEach(element => {
      console.log(element);
      
      const pannelName = mapping[element.value];
      
      pannels[pannelName].push(element);
    });
    return (
    <div>
      <Title level="H5"><b>Legends</b></Title>
      <Panel style={{width:'20rem' }} headerText="Total"  onToggle={function ka(){}}>
      <div style={{ paddingRight: '100px', paddingTop: '0px' }}>
        {pannels.total.map((entry, index) => (
          <div
          key={`item-${index}`}
            style={{
              width: '100%',
              display: 'inline-flex',
              alignItems: 'flex-start',
            }}
          >
          <div>
            <svg viewBox='0 0 32 32' width='14' height='14' >
                <path stroke-width={4} fill="none" stroke="#8884d8" d='M 0 16 h 10.6667 A 5.33333 5.33333 0 1 1 21.3333 16 H 32 M 21.3333 16 A 5.33333 5.33333 0 1 1 10.6667 16'></path>
              </svg>
            </div>
            <div
            style={{
              paddingRight: '3px',
              fontSize: '15px',
              overflowWrap: 'break-word',
              wordBreak:'break-word',
            }}
            >
            
              {entry.value}
            </div>
          </div>
        ))}
      </div>
      </Panel>
      <Panel style={{width:'20rem'}} headerText="Regular" onToggle={function ka(){}}>
      <div style={{ paddingRight: '100px', paddingTop: '0px' }}>
        {pannels.regular.map((entry, index) => (
          <div
          key={`item-${index}`}
            style={{
              width: '100%',
              display: 'inline-flex',
              alignItems: 'flex-start',
            }}
          >
            <div
              
            >
              <svg viewBox='0 0 32 32' width='14' height='14' >
                <path stroke="none" fill='#413ea0' d='M 0 4 h 32 v 24 h -32 Z'></path>
              </svg>
            </div>
            <div
            style={{
              paddingRight: '3px',
              fontSize: '15px',
              overflowWrap: 'break-word',
              wordBreak:'break-word',
            }}
          >
            
              {entry.value}
            </div>
          </div>
        ))}
      </div>
      </Panel>
      <Panel style={{width:'20rem'}} headerText="Promotions" onToggle={function ka(){}}>
      <div style={{ paddingRight: '100px', paddingTop: '0px' }}>
        {pannels.promotion.map((entry, index) => (
          <div
          key={`item-${index}`}
            style={{
              width: '100%',
              display: 'inline-flex',
              alignItems: 'flex-start',
            }}
          >
         
            <div>
              <svg viewBox='0 0 32 32' width='14' height='14' >
                <path stroke-width='4'fill='none' stroke="#ff7300" d='M 0 16 h 10.6667 A 5.33333 5.33333 0 1 1 21.3333 16 H 32 M 21.3333 16 A 5.33333 5.33333 0 1 1 10.6667 16'></path>
              </svg>
            </div>
            <div
            style={{
              paddingRight: '3px',
              fontSize: '15px',
              overflowWrap: 'break-word',
              wordBreak:'break-word',
            }}
          >
            {entry.value}
            </div>
          </div>
        ))}
      </div>
      </Panel>
      

     
      </div>
    );
  };
export default renderCustomizeLengend;