const EventComponent: React.FC = () => {
  // get type from function in jsx
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };

  return (
    <div>
      {/* this line has type inference */}
      <input onChange={(e) => console.log(e)} />
      {/* this line has NO type inference */}
      <input onChange={onChange} />
    </div>
  );
};

export default EventComponent;
