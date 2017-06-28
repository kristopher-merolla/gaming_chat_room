import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

export class ChatService {
  private url = 'http://localhost:8000/dashboard';
  private socket;

  sendMessage(message) {
    this.socket = io(this.url);
    this.socket.emit('add-message', message);
  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

  getSocketID() {
    let observable = new Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('user_logout', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }

}