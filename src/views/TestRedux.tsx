import { addCount } from '@/redux/rcount'
import React, { Component } from 'react'
import { connect, ConnectedProps } from 'react-redux'

import { Button } from 'antd-mobile'
import { subCount } from '@/redux/rcount'


const mapStateToProps = (state: { counter: any }) => ({
  counter: state.counter
})

const mapDispatchToProps = (dispath: any) => ({
  add: () => dispath(addCount()),
  sub: () => dispath(subCount())
})

const connector = connect(mapStateToProps, mapDispatchToProps)

type Props = ConnectedProps<typeof connector>

class TestRedux extends Component<Props> {
  componentDidMount() {
    console.log(this.props)
  }

  render() {
    const { sub, add } = this.props;

    return (
      <div>
        <Button onClick={sub}>减</Button>
        <div>{ this.props.counter.rCount }</div>  
        <Button onClick={add}>加</Button>
      </div>
    );
  }
}

export default connector(TestRedux)
