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
      <div className="flex w-full justify-center mt-5 gap-2">
        <SubmissionCard
          title={`Submit Your Run`}
          link={`https://forms.gle/C3VhTY7HEF3Hudz86`}
          direction="_blank"
        />
        <SubmissionCard title={`Build Info`} link={`/Builds`} />
      </div>
      <PitLadder />
    </section>
  );
}
