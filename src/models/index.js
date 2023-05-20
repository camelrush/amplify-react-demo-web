// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Dish } = initSchema(schema);

export {
  Dish
};