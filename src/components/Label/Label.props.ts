export type Coloring = "orange";
export type Status = "pending";

export interface LabelProps {
  status: Status;
}

export type LabelStyleProps = {
  coloring: Coloring;
};
