import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <div>
      <Child
        color='red'
        onClick={() => {
          console.log('click');
        }}
      />
      <ChildAsFC
        color='red'
        onClick={() => {
          console.log('click');
        }}
      >
        FunctionComponent includes children prop
      </ChildAsFC>
    </div>
  );
};

export default Parent;
