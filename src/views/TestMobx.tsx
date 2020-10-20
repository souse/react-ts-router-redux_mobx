import React, { Component } from 'react'
import { inject, observer, Provider } from 'mobx-react'

import { Button } from 'antd-mobile'
// import { stores, StoresContext } from '@/mobx'
import mcountStore, { McountProps } from '@/mobx/mcount';

@inject('countStore')
@observer
class Counter extends Component<McountProps> {
  render() {
    const { countStore } = this.props;
    debugger

    return (
      <div>
        <Button onClick={() => countStore!.opCount('sub')}>减</Button>
          <div style={{ textAlign: 'center' }}>{ countStore!.count }</div>  
        <Button onClick={() => countStore!.opCount('add')}>加</Button>
      </div>
    )
  }  
}

class TestMobx extends Component {
  render() {
    return (
      <Provider countStore={mcountStore}>
        <Counter></Counter>
      </Provider>
    );
  }
}

// class TestMobx extends Component {
//   render() {
//     return(
//       <Provider { ...stores }>
//         <StoresContext.Provider value={stores}>
//           <Counter></Counter>  
//         </StoresContext.Provider>
//       </Provider>
//     )
//   }
// }

export default TestMobx;
