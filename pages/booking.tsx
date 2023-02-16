import Head from "next/head";
import { Booking } from "../components/Booking";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Vroom 2 | Book your Slingshot!</title>
      </Head>

      <div
        style={{
          display: "grid",
          placeContent: "center",
          gap: "8em",
          textAlign: "center",
          margin: "6em",
        }}
      >
        <div
          style={{
            display: "grid",
            placeContent: "center",
            gap: "2em",
            maxWidth: "750px",
            margin: "auto",
          }}
        >
          <h1 className="BigTitle">Book your Slingshot today!</h1>
          <h3
            style={{
              margin: "auto",
              maxWidth: "550px",
              fontWeight: "normal",
              lineHeight: "1.5",
            }}
          >
            Contact us via email at <strong>vroom2rental@gmail.com</strong> or
            call us at <strong>438-700-9091</strong>
          </h3>
        </div>
        <Booking />
        <h1>Complete online booking system coming soon!</h1>
      </div>
    </>
  );
}
