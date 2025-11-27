import "../assets/scss/Timeline.scss";

interface Step {
  step: string;
  duration: number; // minuter
}

interface Props {
  timeline: Step[];
}

export default function Timeline({ timeline }: Props) {
  const formatTime = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return h > 0 ? `${h}h ${m}m` : `${m}m`;
  };

  return (
    <div className="timeline">
      {timeline.map((t, i) => (
        <div key={i} className="timeline-step">
          <span className="step-name">{t.step}</span>
          <span className="step-duration">{formatTime(t.duration)}</span>
        </div>
      ))}
    </div>
  );
}
