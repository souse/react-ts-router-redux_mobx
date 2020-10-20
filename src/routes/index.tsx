import React, { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'

const Index = lazy(() => import(/* index */ '@/views/Index'))
const About =lazy(() => import(/* about */ '@/views/About'))
const TestRedux =lazy(() => import(/* tredux */ '@/views/TestRedux'))
const TestMobx =lazy(() => import(/* tmobx */ '@/views/TestMobx'))
const TodoList = lazy(() => import (/* todolist */ '@/views/TodoList'))

export default (
  <Suspense fallback="">
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/tredux" component={TestRedux} />
      <Route path="/tMobx" component={TestMobx} />
      <Route path="/todo" component={TodoList} />
    </Switch>
  </Suspense>
);