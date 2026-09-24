export default function LandingTimelapse() {
  return (
    <figure className="landing-videos">
      <div className="lv-item">
        <video autoPlay controls playsInline muted loop preload="auto"
          poster="/media/landing/circle/poster.webp"
          src="/media/landing/circle/timelapse.mp4"
          aria-label="Circular-motion quadrotor landing timelapse" />
        <figcaption>
          <b>Circular target motion.</b> A quadrotor tracks a ground vehicle
          driving a constant-radius circle and lands on it.
        </figcaption>
      </div>
      <div className="lv-item">
        <video autoPlay controls playsInline muted loop preload="auto"
          poster="/media/landing/random/poster.webp"
          src="/media/landing/random/timelapse.mp4"
          aria-label="Random-motion quadrotor landing timelapse" />
        <figcaption>
          <b>Random target motion.</b> The same landing against
          acceleration-driven motion the planner cannot anticipate.
        </figcaption>
      </div>
      <figcaption className="lv-note">
        Hardware experiments, built from the recorded footage as accumulating
        motion trails. The yellow ring follows the quadrotor; the red ring marks
        where the state-triggered constraint activates.
      </figcaption>
    </figure>
  );
}
