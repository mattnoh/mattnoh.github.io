import LandingTimelapse from "@/components/landing-timelapse";

export default function About() {
  return (
    <>
      <h1 className="ph">About</h1>
      <p className="lede">
        I am a master&apos;s student in Electrical and Electronic Engineering at
        Inha University, in the Computational Robotics and Autonomy Lab, advised
        by Prof. Kwang-Ki K. Kim. I work on trajectory optimization and
        numerical optimal control for quadrotors &mdash; generating motion that
        respects the constraints a vehicle actually has to fly, fast enough to
        re-solve online.
      </p>
      <LandingTimelapse />
      <p className="lede">
        I received my B.S. in Electrical Engineering from Inha University in
        2025.
      </p>
    </>
  );
}
