export default function LandingTimelapse() {
  return (
    <figure className="landing-videos">
      <div className="lv-item">
        <video autoPlay controls playsInline muted loop preload="auto"
          poster="/media/landing/circle/poster.webp"
          src="/media/landing/circle/timelapse.mp4"
          aria-label="Circular-motion quadrotor landing timelapse" />
        <figcaption>
          <b>Circular target motion.</b> The ground vehicle drives a circle
          while the quadrotor closes in and lands on it.
        </figcaption>
      </div>
      <div className="lv-item">
        <video autoPlay controls playsInline muted loop preload="auto"
          poster="/media/landing/random/poster.webp"
          src="/media/landing/random/timelapse.mp4"
          aria-label="Random-motion quadrotor landing timelapse" />
        <figcaption>
          <b>Random target motion.</b> The same landing, with the vehicle
          driven by random accelerations.
        </figcaption>
      </div>
      <figcaption className="lv-note">
        Hardware experiments. Each clip keeps a snapshot every 0.2 s of flight,
        so the whole approach reads in a single frame. The yellow ring follows
        the quadrotor; the red marks where the state trigger activates.
      </figcaption>
    </figure>
  );
}
