declare module '*.vue' {
  import { defineComponent } from 'vue';

  const component: ReturnType<typeof defineComponent>;
  export default component;
}
declare module '*.png' {
  const value: any;
  export default value;
}
declare module '*.svg' {
  const value: any;
  export default value;
}
declare module '*.json' {
  const value: any;
  export default value;
}
