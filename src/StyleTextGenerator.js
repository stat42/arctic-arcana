import React, { useState, useEffect, useCallback, useMemo } from 'react';

const StyleTextGenerator = () => {
  // Placeholders for constants
  const catImages = useMemo(() => [
    `${process.env.PUBLIC_URL}/images/catspellbinder-0.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-1.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-2.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-3.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-4.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-5.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-6.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-7.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-8.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-9.png`,
    `${process.env.PUBLIC_URL}/images/catspellbinder-10.png`
    // Add more images if needed
  ], []); // Empty dependency array means this array won't change on re-renders
  const decorations = useMemo(() => [
    { open: "༺•", close: "•༻" },
    { open: "⟆•†", close: "†•⟅" },
    { open: "𖤓✧", close: "✧𖤓" },
    { open: "⚚•❖", close: "❖•⚚" },
    { open: "۞•¤", close: "¤•۞" },
    { open: "⊹•", close: "•⊹" },
    { open: "⧼•", close: "•⧽" },
    { open: "༒•", close: "•༒" },
    { open: "⟢•", close: "•⟣" },
    { open: "✦•", close: "•✦" },
    { open: "⧫•", close: "•⧫" },
    { open: "⟊•", close: "•⟊" },
    { open: "⛥•", close: "•⛥" },
    { open: "✺•", close: "•✺" },
    { open: "✪•", close: "•✪" },
    { open: "⚘•", close: "•⚘" },
    { open: "❂•", close: "•❂" },
    { open: "☬•", close: "•☬" },
    { open: "⟁•", close: "•⟁" },
    { open: "✵•", close: "•✵" },
    { open: "༼ʘ̚ل͜ʘ̚༽⊰", close: "⊱༼ʘ̚ل͜ʘ̚༽" },
    { open: "╚»★«╝", close: "╚»★«╝" },
    { open: "⫷⫸༒༒", close: "༒༒⫷⫸" },
    { open: "➶➶❖", close: "❖➶➶" },
    { open: "༒༆••", close: "••༆༒" },
    { open: "═══『", close: "』═══" },
    { open: "⸻⸻❁", close: "❁⸻⸻" },
    { open: "↞↞✿", close: "✿↠↠" },
    { open: "⌘⚜", close: "⚜⌘" },
    { open: "➷➷◈", close: "◈➷➷" },
    { open: "༶⸙༶", close: "༶⸙༶" },
    { open: "⎯⎯❦", close: "❦⎯⎯" },
    { open: "༻༺❂", close: "❂༻༺" },
    { open: "༶☽◯", close: "◯☾༶" },
    { open: "╰☆☆", close: "☆☆╯" },
    { open: "⤞⤞༒", close: "༒⤝⤝" },
    { open: "⌜••✵", close: "✵••⌝" },
    { open: "╔═◢◤", close: "◢◤═╗" },
    { open: "⫷⫸••", close: "••⫷⫸" },
    { open: "༶⸙❃", close: "❃⸙༶" }
  ],[]);
  const styleMap = useMemo(() => ({
    "a": ["α", "ค", "ค", "ᴀ", "₳", "å", "ą", "ä", "á", "∆", "α", "Ⱥ", "ª", "Æ", "ǡ", "Ǻ", "Ã", "ª", "ᗅ", "𝒶"],
    "b": ["ß", "฿", "乃", "в", "β", "ც", "Ɓ", "฿", "ɓ", "Ƅ", "β", "ʙ", "в", "ß", "ƀ", "ß", "Ь", "ʙ", "ϐ", "β"],
    "c": ["ς", "૮", "¢", "Ꮯ", "ȼ", "ς", "Ĉ", "₵", "ç", "ʗ", "Ⲥ", "𝒸", "ς", "¢", "ć", "Č", "ḉ", "ċ", "Ç", "č"],
    "d": ["đ", "∂", "ძ", "๔", "Ð", "ɖ", "ƌ", "D", "đ", "ḓ", "ɖ", "∂", "Ð", "Đ", "ԁ", "ḋ", "δ", "Ꮄ", "d", "ḑ"],
    "e": ["є", "ε", "Ɇ", "є", "乇", "ë", "Ɛ", "έ", "ē", "ξ", "ε", "£", "Ɛ", "ë", "∑", "ɇ", "℮", "ė", "ē", "ḗ"],
    "f": ["ƒ", "ғ", "Բ", "₣", "Բ", "f", "₣", "ʄ", "F", "ғ", "ḟ", "ғ", "ƒ", "Ƒ", "ʄ", "Բ", "Ғ", "ḟ", "Ŧ", "ϝ"],
    "g": ["ɠ", "g", "₲", "Ǥ", "Ɠ", "ĝ", "ğ", "ƃ", "₲", "ɢ", "g", "ǥ", "ḡ", "Ġ", "Ğ", "g", "ɢ", "ƃ", "Ǥ", "ℊ"],
    "h": ["ђ", "н", "ђ", "Һ", "н", "Ħ", "ђ", "ɦ", "ђ", "♄", "н", "h", "н", "ħ", "ђ", "н", "ḧ", "Ħ", "ʰ", "ɦ"],
    "i": ["เ", "ɨ", "ɪ", "เ", "เ", "ï", "í", "į", "î", "ΐ", "į", "ı", "ï", "î", "ỉ", "ἰ", "ỉ", "𝒾", "ι", "¡"],
    "j": ["נ", "ן", "ʝ", "נ", "ʆ", "ĵ", "ɉ", "Ј", "ʲ", "ʝ", "Ɉ", "ĵ", "ϳ", "ʝ", "ј", "ǰ", "ᴊ", "ј", "ĵ", "ʲ"],
    "k": ["к", "ƙ", "Қ", "ќ", "Ҡ", "κ", "Ƙ", "қ", "к", "ҟ", "Ҡ", "κ", "ќ", "ḳ", "ҟ", "қ", "κ", "ƙ", "𝓀", "ҡ"],
    "l": ["ℓ", "l", "ł", "ι", "Լ", "Ł", "Ꮮ", "ℓ", "l", "ɭ", "Ḷ", "ʟ", "ĺ", "Ŀ", "ℒ", "₤", "ḻ", "ł", "ļ", "ḽ"],
    "m": ["๓", "м", "ɱ", "๓", "爪", "ʍ", "м", "₥", "m", "ო", "Ꮇ", "ɱ", "м", "₥", "m", "ṃ", "ṁ", "ḿ", "m", "ϻ"],
    "n": ["ภ", "η", "ภ", "ก", "и", "ท", "η", "ղ", "п", "η", "ŋ", "ղ", "ภ", "η", "и", "ή", "ή", "ṅ", "ń", "Ň"],
    "o": ["๏", "๐", "σ", "о", "Ø", "ø", "õ", "ô", "ö", "θ", "ø", "ø", "ö", "σ", "ờ", "ọ", "ѻ", "ѳ", "Ò", "ŏ"],
    "p": ["ρ", "ק", "ק", "þ", "ק", "P", "Ƥ", "ƥ", "þ", "թ", "ρ", "ק", "p", "ṕ", "ṗ", "p", "ῤ", "ρ", "Ƥ", "ƿ"],
    "q": ["q", "φ", "Q", "զ", "Ω", "Ҩ", "q", "ʠ", "Ɋ", "ℚ", "q", "զ", "ϙ", "q", "զ", "ǫ", "ʠ", "Q", "ǭ", "Q"],
    "r": ["г", "г", "я", "Ř", "₹", "я", "r", "ѓ", "ř", "ʀ", "r", "Я", "г", "ŗ", "ř", "r", "ȑ", "ŕ", "ṟ", "Ɍ"],
    "s": ["ร", "ѕ", "ş", "Ş", "ƨ", "§", "ʂ", "Š", "Ş", "Ƨ", "ş", "Š", "ṡ", "ș", "s", "š", "ѕ", "ş", "ṥ", "ʂ"],
    "t": ["t", "Շ", "Ƭ", "Ŧ", "†", "է", "ƭ", "₮", "t", "τ", "ŧ", "ƭ", "Ť", "ҭ", "ƫ", "т", "ṫ", "ț", "Ƭ", "т"],
    "u": ["ย", "µ", "υ", "Ʊ", "บ", "ú", "û", "ù", "ư", "น", "ú", "υ", "Ü", "ù", "ũ", "û", "ṳ", "ű", "ų", "ȗ"],
    "v": ["ש", "v", "ง", "ν", "ѵ", "v", "√", "ṽ", "v", "ν", "v", "ṽ", "v", "v", "v", "ṿ", "v", "v", "v", "v"],
    "w": ["ฬ", "ω", "Ɯ", "ώ", "щ", "Ψ", "ฬ", "ẅ", "ώ", "w", "ẁ", "ω", "ώ", "w", "ฬ", "щ", "ώ", "ẃ", "ẁ", "ω"],
    "x": ["א", "ж", "x", "ჯ", "×", "ẋ", "χ", "×", "Ӿ", "✗", "χ", "×", "ж", "ẋ", "ҳ", "×", "χ", "ẍ", "✗", "Ẋ"],
    "y": ["ץ", "ყ", "ϓ", "¥", "ү", "ÿ", "ý", "ÿ", "γ", "ч", "ყ", "ý", "ÿ", "ẙ", "γ", "ү", "ϒ", "ý", "ỷ", "ȳ"],
    "z": ["z", "ƶ", "ʑ", "ȥ", "z", "ž", "ʐ", "ź", "Ż", "ƶ", "ẓ", "ž", "ƶ", "ż", "Ž", "Ƶ", "Z", "Ź", "Z", "Ẕ"]
  }), []);

  const [input, setInput] = useState('');
  const [selectedDecoration, setSelectedDecoration] = useState('');
  const [copied, setCopied] = useState(false);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);
  const [catAnimationClass, setCatAnimationClass] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [seed, setSeed] = useState(() => Math.random());
 // Function to preload images
 const preloadImages = useCallback(() => {
  catImages.forEach(image => {
    const img = new Image();
    img.src = image;
  });
}, [catImages]);

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  preloadImages(); // Preload all cat images on component mount
}, [preloadImages]); // Now it is included in the dependency array

  const stylizeText = useCallback((text, currentSeed) => {
    return text.toLowerCase().split('').map((char, index) => {
      if (styleMap[char]) {
        const styleIndex = Math.floor((currentSeed * 1000 + index) % styleMap[char].length);
        return styleMap[char][styleIndex];
      }
      return char;
    }).join('');
  }, [styleMap]);

  const output = useMemo(() => stylizeText(input, seed), [input, seed, stylizeText]);

  const decoratedOutput = useMemo(() => {
    const decoration = selectedDecoration 
      ? decorations.find(d => d.open === selectedDecoration)
      : { open: '', close: '' };
    return `${decoration.open}${output}${decoration.close}`;
  }, [output, selectedDecoration, decorations]);

  useEffect(() => {
    setCurrentCatIndex(Math.floor(Math.random() * catImages.length));
  }, [catImages.length]);  // Include catImages.length as a dependency
  
  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleDecorationChange = useCallback((e) => {
    setSelectedDecoration(e.target.value);
  }, []);

  const handleCopy = useCallback(() => {
    const copyToClipboard = (text) => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
      } else {
        // Create a temporary element
        const elem = document.createElement('textarea');
        // Set its value to the text we want to copy
        elem.value = text;
        // Make it readonly to be tamper-proof
        elem.setAttribute('readonly', '');
        // Move outside the screen to make it invisible
        elem.style.position = 'absolute';
        elem.style.left = '-9999px';
        // Append the element to the body
        document.body.appendChild(elem);
        // Check if there's any content selected previously
        const selected = 
          document.getSelection().rangeCount > 0
            ? document.getSelection().getRangeAt(0)
            : false;
        // Select the text
        elem.select();
        // Use the classic 'copy' command
        document.execCommand('copy');
        // Remove the element
        document.body.removeChild(elem);
        // If a selection existed before copying
        if (selected) {
          // Unselect everything on the HTML document
          document.getSelection().removeAllRanges();
          // Restore the original selection
          document.getSelection().addRange(selected);
        }
      }
    };
  
    copyToClipboard(decoratedOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [decoratedOutput]);

  const handleShakeItUp = useCallback(() => {
    setSeed(Math.random());
    const element = document.querySelector('.shakeable');
    element.classList.add('shake-animation');
    setTimeout(() => element.classList.remove('shake-animation'), 500);
  }, []);

  const handleCatClick = useCallback(() => {
    if (isAnimating) return;
  
    setIsAnimating(true);
    setCatAnimationClass('fade-out');
  
    setTimeout(() => {
      setCurrentCatIndex(prevIndex => {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * catImages.length);
        } while (newIndex === prevIndex);
        return newIndex;
      });
      setCatAnimationClass('fade-in');
  
      setTimeout(() => {
        setCatAnimationClass('');
        setIsAnimating(false);
      }, 500);
    }, 250);
  }, [isAnimating, catImages.length]);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/a9e2fc4d-73e5-434e-bc50-686c838ffce2.png)` }}>
<div className="relative max-w-md w-full bg-white bg-opacity-80 p-8 rounded-lg shadow-lg mx-4 sm:mx-6 lg:mx-8">
<img src={`${process.env.PUBLIC_URL}/images/freePiksnowcap.png`} alt="Snow" className="absolute -top-7 -right-5 w-24 h-24 object-contain" />
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6 font-rowdies">Arctic Arcana</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Enter your text here"
            value={input}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <select 
            onChange={handleDecorationChange}
            value={selectedDecoration}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="">Select a decoration</option>
            {decorations.map((decoration, index) => (
              <option key={index} value={decoration.open}>
                {decoration.open} Text {decoration.close}
              </option>
            ))}
          </select>
        </div>
        <div className="bg-white p-4 rounded border border-gray-300 mb-4 min-h-[100px]">
          <p className="text-center text-lg font-medium text-blue-800 break-all">
            {decoratedOutput}
          </p>
        </div>
        <div className="flex space-x-2">
          <div 
            onClick={handleShakeItUp} 
            className="relative w-32 h-32 cursor-pointer shakeable" 
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/FireCrystal.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <span className="absolute inset-0 flex items-center justify-center text-white text-shadow text-center">
              <>Shake<br /> it up!</>
            </span>
          </div>
          <div 
            onClick={handleCopy} 
            className={`relative w-32 h-32 cursor-pointer flex items-center justify-center ${copied ? 'animate-pulseShrinkGrow' : ''}`} 
            style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/CopyToClipboard.png)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <span 
              className="text-center text-black text-shadow"
              style={{
                transform: 'rotate(-10deg)',
                position: 'relative',
                top: '-30px',  
                left: '5px',    
                lineHeight: '0.9'  
              }}
            >
              {copied ? 'Copied!' : <>Copy<br />To<br />Clipboard</>}
            </span>
          </div>
        </div>
        <img 
          src={catImages[currentCatIndex]}
          alt="Cat" 
          className={`absolute bottom-0 right-[-40px] w-50 h-80 object-contain ${catAnimationClass}`} 
          onClick={handleCatClick}
        />
      </div>
    </div>
  );
};

export default React.memo(StyleTextGenerator);