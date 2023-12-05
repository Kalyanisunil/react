function Kallu(props) {
  return <h1>brands  called:{props.like}</h1>;
}

function Mylists() {
  const kallu = ["red", "black", "mustang", "landcruiser"];
  return (
    <>
      <h1>Iam in love with these</h1>
      <ol>
        {kallu.map((kallu) => (
          <Kallu like={kallu} />
        ))}
      </ol>
    </>
  );
}

export default Mylists;
