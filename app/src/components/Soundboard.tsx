type Cue = {
  title: string;
  description: string;
  file: string;
};

const cues: Cue[] = [
  {
    title: 'City street ambience — “Ahmedabad market vibe”',
    description: 'Layered noise bed with gentle motion for chai-stall atmosphere.',
    file: '/audio/city-ambience.wav',
  },
  {
    title: 'Hopeful ambient beat — “Uplift Logo Rise” inspired',
    description: 'Soft swell with shimmering harmonics announcing the ROVE rider.',
    file: '/audio/hopeful-rise.wav',
  },
  {
    title: 'Motivational reveal — “Inspiring Logo Reveal” inspired',
    description: 'Bright triad bloom underscoring the parcel close-up and ignition.',
    file: '/audio/inspiring-reveal.wav',
  },
];

export function Soundboard() {
  return (
    <div className="audio-board">
      <h3>Sound design layers (royalty-free originals rendered in-app)</h3>
      {cues.map((cue) => (
        <div key={cue.title} className="audio-board__row">
          <span className="audio-board__title">{cue.title}</span>
          <p className="audio-board__description">{cue.description}</p>
          <audio controls preload="metadata">
            <source src={cue.file} type="audio/wav" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
}
