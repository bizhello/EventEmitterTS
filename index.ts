type MyEventListener = (...args: any[]) => void;

class MyEventEmitter {
    private events: Record<string, MyEventListener[]>;

    constructor() {
        this.events = {};
    }

    on(event: string, listener: MyEventListener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    emit(event: string, ...args: any[]) {
        if (this.events[event]) {
            this.events[event].forEach(listener => listener.apply(this, args));
        }
    }

    eventNames(): string[] {
        return Object.keys(this.events);
    }
}



//Пример 1
// const myEmitter = new MyEventEmitter();

// myEmitter.on('event', function firstListener() {
//     console.log('Helloooo! first listener');
// });

// myEmitter.on('event', function secondListener(arg1, arg2) {
//     console.log(`event with parameters ${arg1 as string}, ${arg2 as string} in second listener`);
// });

// myEmitter.on('event', function thirdListener(...args) {
//     const parameters = args.join(', ');

//     console.log(`event with parameters ${parameters} in third listener`);
// });

// myEmitter.emit('event', 1, 2, 3, 4, 5);


//Пример 2
// const myEmitter = new MyEventEmitter();

// myEmitter.on('foo', () => { });
// myEmitter.on('bar', () => { });

// console.log(myEmitter.eventNames());
