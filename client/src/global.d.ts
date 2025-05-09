//объявляем модуль бутстрап(чтобы при импорте ts увидел)
declare module 'bootstrap/dist/css/bootstrap.css';
//добавляем .css, чтобы TS понимал что он импортит css и как его типизировать
declare module '*.css' {
  const css: { [key: string]: string };
  export default css;
}