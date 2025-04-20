import { Inter, Jost, Cinzel, Lora, Libre_Baskerville, Playfair_Display, Cormorant, EB_Garamond, UnifrakturMaguntia, Pirata_One } from 'next/font/google';

// Sans-serif options
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
});

// Serif/Gothic-like options for headings
export const cinzel = Cinzel({
  subsets: ['latin'],
  display: 'swap',
});

export const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
});

export const libreBaskerville = Libre_Baskerville({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
});

export const cormorant = Cormorant({
  subsets: ['latin'],
  display: 'swap',
});

export const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  display: 'swap',
});

// True Gothic/Blackletter options
export const unifrakturMaguntia = UnifrakturMaguntia({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export const pirataOne = Pirata_One({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

export default function FontTest() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Font Options for Evermore</h1>
      
      <section>
        <h2>Sans-serif Options (Body Text)</h2>
        <div style={{ marginBottom: '2rem' }}>
          <h3 className={inter.className}>Inter - Body Text Sample</h3>
          <p className={inter.className}>Inter is a clean, modern sans-serif font that offers excellent readability. It has a professional look while remaining warm and approachable.</p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h3 className={jost.className}>Jost - Body Text Sample</h3>
          <p className={jost.className}>Jost is an elegant sans-serif with softer lines that can complement a serif heading font. It has a slightly more distinctive character than Inter.</p>
        </div>
      </section>
      
      <section>
        <h2>Serif/Gothic-like Options (Headings)</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h1 className={cinzel.className} style={{ fontSize: '2.5rem' }}>EVERMORE - Cinzel</h1>
          <p>Cinzel is a classical serif with elegant proportions, evoking Roman inscriptions and timeless dignity.</p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h1 className={lora.className} style={{ fontSize: '2.5rem' }}>EVERMORE - Lora</h1>
          <p>Lora offers a more contemporary serif style with calligraphic elements, balancing tradition with modernity.</p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h1 className={libreBaskerville.className} style={{ fontSize: '2.5rem' }}>EVERMORE - Libre Baskerville</h1>
          <p>Libre Baskerville has weight and gravitas, with strong serifs that convey formality and reverence.</p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h1 className={playfairDisplay.className} style={{ fontSize: '2.5rem' }}>EVERMORE - Playfair Display</h1>
          <p>Playfair Display features high contrast between thick and thin strokes, creating an elegant and distinguished look.</p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h1 className={cormorant.className} style={{ fontSize: '2.5rem' }}>EVERMORE - Cormorant</h1>
          <p>Cormorant is a sophisticated serif with delicate details, inspired by classic Garamond designs.</p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h1 className={ebGaramond.className} style={{ fontSize: '2.5rem' }}>EVERMORE - EB Garamond</h1>
          <p>EB Garamond is a revival of Claude Garamont's designs, offering timeless elegance and readability.</p>
        </div>
      </section>
      
      <section>
        <h2>True Gothic/Blackletter Options</h2>
        
        <div style={{ marginBottom: '2rem' }}>
          <h1 className={unifrakturMaguntia.className} style={{ fontSize: '2.5rem' }}>EVERMORE - UnifrakturMaguntia</h1>
          <p>UnifrakturMaguntia is a traditional blackletter/Gothic font that most closely resembles the Mortuary style.</p>
        </div>
        
        <div style={{ marginBottom: '2rem' }}>
          <h1 className={pirataOne.className} style={{ fontSize: '2.5rem' }}>EVERMORE - Pirata One</h1>
          <p>Pirata One has blackletter influences with a slightly more contemporary feel.</p>
        </div>
      </section>
    </div>
  );
}