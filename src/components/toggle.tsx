interface ToggleProps {
  type: string;
}

export default function Toggle({ type }: ToggleProps) {
  return <div>{type}</div>;
}
