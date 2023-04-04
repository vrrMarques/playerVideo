import Link from "next/link";

export default function Home() {
  return (
    <>
      <div
        style={{
          alignContent: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h1>Sucessos de manuel Gomes:</h1>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          alignContent: "center",
          display: "flex",
          justifyContent: "center",
          fontSize: "30px",
        }}
      >
        <br />
        <br />
        <ul>
          <li>
            <Link href="/VideoPage/1OA6J8aTGuo">Se Você não me ama</Link>
          </li>
          <br />
          <li>
            <Link href="/VideoPage/oxxJRZIZthg">
              Eu vou deixar de ser besta
            </Link>
          </li>
          <br />
          <li>
            <Link href="/VideoPage/xE5TaJJAyU0">Maura</Link>
          </li>
          <br />
        </ul>
      </div>
    </>
  );
}
