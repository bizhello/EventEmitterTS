# EventEmitter.

Функционал:

Подписка на события;
Генерация сообщений подписчикам;
Получение списка событий.

### Технологии:

- TypeScript

## Пример использования:
```js
import MyEventEmitter from '../index';

const myEmitter = new MyEventEmitter();

myEmitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});

myEmitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1 as string}, ${arg2 as string} in second listener`);
});

myEmitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');

  console.log(`event with parameters ${parameters} in third listener`);
});

myEmitter.emit('event', 1, 2, 3, 4, 5);
/*
 *  Helloooo! first listener
 *  event with parameters 1, 2 in second listener
 *  event with parameters 1, 2, 3, 4, 5 in third listener
 */

// ----- //

import MyEventEmitter from '../index';

const myEmitter = new MyEventEmitter();

myEmitter.on('foo', () => {});
myEmitter.on('bar', () => {});

console.log(myEmitter.eventNames());
/*
 *  [ 'foo', 'bar' ]
 */
```
