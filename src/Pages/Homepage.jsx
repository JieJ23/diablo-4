import PitLadder from "../Components/PitLadder";
import { SubmissionCard } from "../Components/Submission";

export default function Homepage() {
  return (
    <section className="h-lvh overflow-x-hidden">
      <div className="fixed bg-[#131313] h-lvh w-full object-cover -z-10" />
      <img
        src="/mainBG.png"
        alt="cover-bg"
        className="fixed h-lvh w-full object-cover -z-10 object-center"
      />
      <div className="flex w-full justify-center mt-5">
        <SubmissionCard
          title={`Submit Your Run`}
          link={`https://forms.gle/C3VhTY7HEF3Hudz86`}
        />
        <SubmissionCard
          title={`View Entires`}
          link={`https://docs.google.com/spreadsheets/d/e/2PACX-1vS9AHMY9FAO_JhRWEMHMqVHOltd9TxhviLxmu89VA-fP7HeaeR6O47kmmiApMPrD3RKHYdR6eENBv8Z/pubhtml?gid=1899307961&single=true`}
        />
      </div>
      <PitLadder />
    </section>
  );
}
