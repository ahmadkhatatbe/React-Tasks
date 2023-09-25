
function MyFunctionalComponent() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>This is a functional React component.</p>
    </div>
  );
}

function ConditionalComponent({ condition }) {
  return <div>{condition ? <p>This is rendered conditionally.</p> : null}</div>;
}


function ListComponent({ items }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}



function ParentComponent() {
  return (
    <div>
      <ChildComponent />
    </div>
  );
}

function ChildComponent() {
  return <p>This is a child component.</p>;
}