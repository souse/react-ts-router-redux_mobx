import React, { Component } from 'react'
import { inject, observer, Provider } from 'mobx-react'

import { Button } from 'antd-mobile'
import mcountStore, { McountProps } from '@/mobx/mcount'

@inject('mcounteStore')
@observer
class Counter extends Component<McountProps, {}> {
  render() {
    const { mcounteStore } = this.props;

    return (
      <div>
        <Button onClick={() => mcounteStore!.opCount('sub')}>减</Button>
          <div style={{ textAlign: 'center' }}>{ mcounteStore!.count }</div>  
        <Button onClick={() => mcounteStore!.opCount('add')}>加</Button>
      </div>
    )
  }  
}

class TestMobx extends Component {
  render() {
    return (
      <Provider mcounteStore={mcountStore}>
        <Counter></Counter>
      </Provider>
    );
  }
}

export default TestMobx;
