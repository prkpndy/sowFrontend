export default function SecondBack() {
  const config = {
    image: "https://storage.123fakturere.no/public/wallpapers/geiranger.jpg",
  };
  return (
    <>
      {config.image ? (
        <div
          style={{
            position: "fixed",
            height: "100vh",
          }}
        >
          <img
            id="background-img"
            src={config.image}
            alt={""}
            style={{
              width: "100%",
              height: "100%",
              position: "fixed",
              top: "0",
              left: "0",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
