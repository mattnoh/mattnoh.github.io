export default function LandingTimelapse() {
  return (
    <div className="landing-videos">
      <video autoPlay controls playsInline muted loop preload="auto"
        poster="/media/landing/circle/poster.webp"
        src="/media/landing/circle/timelapse.mp4"
        aria-label="Circular-motion quadrotor landing timelapse" />
      <video autoPlay controls playsInline muted loop preload="auto"
        poster="/media/landing/random/poster.webp"
        src="/media/landing/random/timelapse.mp4"
        aria-label="Random-motion quadrotor landing timelapse" />
    </div>
  );
}
