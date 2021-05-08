interface ChildProps {
  color: string;
}

// Not React Component yet for TypeScript
// this receive props and returns jsx, that's all.
export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// Function Component with TypeScript
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};

// FunctionComponent style offers ReactComponent properties.
// choice for which stytle you use is optional.
ChildAsFC.displayName;
