import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Vroom 2 | Book your Slingshot!</title>
      </Head>

      <div
        style={{
          height: "90vh",
          display: "grid",
          placeContent: "center",
          gap: "5em",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "grid",
            placeContent: "center",
            gap: "2em",
            maxWidth: "750px",
          }}
        >
          <h1 className="BigTitle">Book your Slingshot today!</h1>
          <h3>
            Call us at 438-700-9091 or contact us via email at
            vroom2rental@gmail.com
          </h3>
        </div>
        <div
          style={{
            display: "grid",
            gap: "1em",
            textAlign: "left",
          }}
        >
          <h4>Pricing:</h4>
          <p>
            <strong>weekday:</strong> 270$/day
            <br />
            <strong>weekend:</strong> 300$/day
            <br />
            <strong>3 days or more:</strong> 250$/day on weekdays and 270$/day
            on weekends
          </p>
        </div>
        <h3>Complete online booking system coming soon!</h3>
      </div>
    </>
  );
}
