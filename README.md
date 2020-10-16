###### 说明
* 自定义webpack config [customize-cra](https://github.com/arackaf/customize-cra), [react-app-rewired](https://github.com/timarney/react-app-rewired/blob/master/README_zh.md)
* 适配 [postcss-pxtorem](https://github.com/amfe/lib-flexible)
* UI库 [antd design mobile](https://mobile.ant.design/docs/react/use-with-create-react-app-cn)



```
Create a custom definition file called react-router-dom.d.ts and add the following:

export * from "@types/react-router";
export { RouteComponentProps } from "react-router";

declare module "react-router-dom" {
  export function withRouter<T extends RouteComponentProps<any>>(
    component?: React.ComponentType<T>
  ): any;
}
```