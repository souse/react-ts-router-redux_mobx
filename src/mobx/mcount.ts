import { action, computed, observable, reaction } from 'mobx'

export interface McountProps {
  countStore?: McountStore
}

class McountStore {

  constructor() {
    reaction(() => this.count, _ => console.log(this.count));
  }
  
  @observable count: number = 1;

  @action.bound opCount(type: string) {
    const { count } = this;
    
    if (type === 'add') {
      this.count = count + 1;
    } else {
      this.count = count -1;
    }
  }

  @computed get info() {
    if (this.count > 3) return `test computed ${this.count}`;
    return this.count;
  }
}

export default new McountStore();