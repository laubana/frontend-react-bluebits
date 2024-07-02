export type Coloring = "red";
export type Status = "pending";

export interface LabelProps {
  status: Status;
}

export type LabelStyleProps = {
  coloring: Coloring;
};
