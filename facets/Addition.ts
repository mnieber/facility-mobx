import { observable } from "mobx";
import { operation, data, exec } from "facility";

type GenericObjectT = any;

export class Addition<ValueT = any> {
  @observable @data item: ValueT | undefined;
  @observable @data parentId: any;

  @operation add(values: GenericObjectT) {
    this.item = exec("createItem");
    exec("createItem_post");
  }
  @operation confirm() {
    exec("confirm", { optional: true });
    this._reset();
  }
  @operation cancel() {
    this._reset();
  }

  _reset() {
    this.item = undefined;
    this.parentId = undefined;
  }

  static get = (ctr: any): Addition => ctr.addition;
}

export const initAddition = (self: Addition): Addition => {
  return self;
};
