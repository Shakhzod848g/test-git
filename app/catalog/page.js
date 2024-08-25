import Link from "next/link";

export default function Catalog({ params }) {
  console.log("Work2");
  console.log("ct^ ", params);
  return (
    <main>
      Catalog
      <Link href={'/catalog/ct'}>Catalog[catalog]</Link>
      <Link href={'/catalog/ct/card1'}>Catalog[catalog]</Link>
    </main>
  );
}
