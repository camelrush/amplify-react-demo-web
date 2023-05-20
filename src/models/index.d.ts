import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly image_url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyDish = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Dish, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly price: number;
  readonly image_url: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Dish = LazyLoading extends LazyLoadingDisabled ? EagerDish : LazyDish

export declare const Dish: (new (init: ModelInit<Dish>) => Dish) & {
  copyOf(source: Dish, mutator: (draft: MutableModel<Dish>) => MutableModel<Dish> | void): Dish;
}