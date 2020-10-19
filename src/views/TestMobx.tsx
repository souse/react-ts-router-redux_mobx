import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { Button } from 'antd-mobile'
import { Mcount } from '@/mobx/mcount';

@inject('countStore')
@observer
class TestMobx extends Component<Mcount> {
  render() {
    const { countStore} = this.props;
    return (
      <div>
        <Button onClick={() => countStore.opCount('add')}>减</Button>
          <div style={{ textAlign: 'center' }}>{ countStore.count }</div>  
        <Button onClick={() => countStore.opCount('sub')}>加</Button>
      </div>
    );
  }
}

export default TestMobx;
