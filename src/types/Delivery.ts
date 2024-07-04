import { Deliverer } from "./Deliverer";

export type Delivery = {
  _id: string;
  code: string;
  compartment: string;
  deliverer: Deliverer;
  imageUrls: string[];
  time: string;
};
