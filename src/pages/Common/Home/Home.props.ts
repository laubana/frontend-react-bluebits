import { Delivery } from "../../../types/Delivery";

export interface HomeProps {
  delivery: Delivery | undefined;
  isLoading: boolean;
}
