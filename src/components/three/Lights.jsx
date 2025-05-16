const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight position={[2, 5, 1]} intensity={1} />
    </>
  );
};

export default Lights;
