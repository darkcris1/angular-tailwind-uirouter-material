import { BehaviorSubject, Observable } from 'rxjs';

export function writable<T, Dispatcher = Function>(
  initial: T,
  reducer?: Dispatcher
) {
  const subject = new BehaviorSubject<T>(initial);
  const observable = subject.asObservable();

  return {
    ...observable,
    subscribe: observable.subscribe.bind(
      observable
    ) as Observable<T>['subscribe'],
    pipe: observable.pipe.bind(observable) as Observable<T>['pipe'],
    unsubscribe: subject.unsubscribe,
    update: (callback: (data: T) => any) => {
      subject.next(callback(subject.getValue()));
    },
    set: subject.next.bind(subject),
  };
}
