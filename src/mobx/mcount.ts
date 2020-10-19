import { action, computed, observable } from 'mobx'

export interface Mcount {
  countStore: McountStore
}

class McountStore {
  
  @observable count!: number;

  @action opCount(type: string) {
    if (type === 'add') {
      return this.count + 1;
    } else {
      return this.count - 1;
    }
  }

  @computed get info() {
    if (this.count > 3) return `test computed ${this.count}`;
    return this.count;
  }
}

export default new McountStore();