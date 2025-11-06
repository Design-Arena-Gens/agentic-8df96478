import Image from "next/image";
import { ChaiScene } from "@/components/ChaiScene";
import { RoveArrivalScene } from "@/components/RoveArrivalScene";
import { Soundboard } from "@/components/Soundboard";

export default function Home() {
  return (
    <main className="page">
      <header className="page__intro">
        <div aria-hidden="true" style={{ marginBottom: "1.5rem" }}>
          <Image src="/rove-logo.svg" alt="ROVE logo" width={160} height={60} priority />
        </div>
        <h1>Delivery riders at a chai stall feel the weight of a slow week.</h1>
        <p>
          In the glow of a late-evening Ahmedabad street, four riders linger by the kettle, tired
          eyes and worn bikes reflecting the week&apos;s grind. Their murmurs overlap—commission
          cuts, missed earnings, wondering if hustle alone is ever enough.
        </p>
      </header>

      <section className="scene scene--chai">
        <div className="scene__visual">
          <ChaiScene />
        </div>
        <div className="scene__content" aria-labelledby="scene-chai-heading">
          <h2 id="scene-chai-heading">Overlapping murmurs by the chai stall</h2>
          <p>
            Cameras circle gently; steam curls in the half-light while cheap helmets hang off tired
            shoulders. This is a week-running-on-empty, the air thick with diesel and doubt.
          </p>
          <dl className="dialogue">
            <div className="dialogue__item">
              <dt className="dialogue__label">Rider 1</dt>
              <dd className="dialogue__line">“Yaar, poora hafta nikal gaya…”</dd>
            </div>
            <div className="dialogue__item">
              <dt className="dialogue__label">Rider 2</dt>
              <dd className="dialogue__line">“Kuch kamaai hi nahi…”</dd>
            </div>
            <div className="dialogue__item">
              <dt className="dialogue__label">Rider 2</dt>
              <dd className="dialogue__line">“Sab commission mein chala jaata hai.”</dd>
            </div>
          </dl>
        </div>
      </section>

      <div className="scene-switch">
        <div>
          <p className="scene-switch__text">
            Camera pans right. Street beat softens while a new, hopeful motif gently fades in.
          </p>
          <p className="scene-switch__hint">Glance, murmur, curiosity rising.</p>
        </div>
        <span className="badge">transition</span>
      </div>

      <section className="scene scene--arrival">
        <div className="arrival-spotlight" aria-hidden="true" />
        <div className="scene__visual">
          <RoveArrivalScene />
        </div>
        <div className="scene__content" aria-labelledby="scene-arrival-heading">
          <h2 id="scene-arrival-heading">The ROVE rider steps out—calm, confident</h2>
          <p>
            A door swishes open. He emerges in a deep-purple ROVE polo, parcel tucked securely, logo
            shimmering under a narrow beam of evening sun. Ignition ready. The chai crew can&apos;t
            help but whisper.
          </p>
          <dl className="dialogue">
            <div className="dialogue__item">
              <dt className="dialogue__label">Rider 3</dt>
              <dd className="dialogue__line">“Koi nayi company hai kya?”</dd>
            </div>
            <div className="dialogue__item">
              <dt className="dialogue__label">Rider 4</dt>
              <dd className="dialogue__line">“Lagta hai mast kama raha hai…”</dd>
            </div>
            <div className="dialogue__item">
              <dt className="dialogue__label">Rider 1</dt>
              <dd className="dialogue__line">“Bhai… yeh kya hai?”</dd>
            </div>
          </dl>
          <Soundboard />
        </div>
      </section>

      <footer className="credits">
        <span>
          <strong>Visual direction:</strong> Layered vector illustration capturing chai-stall blues
          to ROVE glow-up transition.
        </span>
        <span>
          <strong>Sound palette:</strong> Procedurally generated ambience &amp; logo-rise motifs
          inspired by FreeSound streets and Pixabay reveals—100% royalty-free.
        </span>
      </footer>
    </main>
  );
}
