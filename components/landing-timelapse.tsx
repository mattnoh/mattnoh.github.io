export default function LandingTimelapse() {
  return (
    <figure className="landing-videos">
      <div className="lv-item">
        <video autoPlay controls playsInline muted loop preload="auto"
          poster="/media/landing/circle/poster.webp"
          src="/media/landing/circle/timelapse.mp4"
          aria-label="Circular-motion quadrotor landing timelapse" />
        <figcaption>
          <b>Circular target motion.</b> The quadrotor tracks a vehicle
          driving a circle and lands on it.
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
    </figure>
  );
}
