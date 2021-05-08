interface ChildProps {
  color: string;
  onClick: () => void;
}

// Not React Component yet for TypeScript
// this receive props and returns jsx, that's all.
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}></button>
    </div>
  );
};

// Function Component with TypeScript
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}></button>
    </div>
  );
};

// FunctionComponent style offers ReactComponent properties.
// choice for which stytle you use is optional.
ChildAsFC.displayName;
