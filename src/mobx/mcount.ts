import { action, computed, observable } from 'mobx'

export interface McountProps {
  mcounteStore?: McountStore
}

class McountStore {
  
  @observable count: number = 1;

  @action opCount(type: string) {
    const { count } = this;
    
    if (type === 'add') {
      this.count = count + 1;
    } else {
      this.count = count -1;
    }
  }

  @computed get str() {
    if (this.count > 3) return `test computed ${this.count}`;
    return this.count;
  }
}

export default new McountStore();