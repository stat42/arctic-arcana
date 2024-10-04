import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';

const Arcana = () => {
  const [input, setInput] = useState('');
  const [selectedDecoration, setSelectedDecoration] = useState('');
  const [copied, setCopied] = useState(false);
  const [seed, setSeed] = useState(() => Math.random());
  const [isShaking, setIsShaking] = useState(false);

  const decorations = useMemo(() => [
    { open: "༺═•", close: "•═༻" },
    { open: "⧼✵", close: "✵⧽" },
    { open: "𓆣༒", close: "༒𓆣" },
    { open: "⟪⟬⚔", close: "⚔⟪⟬" },
    { open: "✧☾", close: "☽✧" },
    { open: "⎋❖", close: "❖⎋" },
    { open: "╰❀✶", close: "✶❀╯" },
    { open: "⫷☬", close: "☬⫸" },
    { open: "✸⌬", close: "⌬✸" },
    { open: "⊶⊶✾", close: "✾⊷⊷" },
    { open: "➵➵✦", close: "✦➵➵" },
    { open: "⍟⍟", close: "⍟⍟" },
    { open: "༶☽⚚", close: "⚚☾༶" },
    { open: "⟅•⟆", close: "⟅•⟆" },
    { open: "➷❃", close: "❃➷" },
    { open: "⊂⊂⦿", close: "⦿⊃⊃" },
    { open: "⚘⩫", close: "⩫⚘" },
    { open: "⌘༆", close: "༆⌘" },
    { open: "⊸⊸✹", close: "✹⊸⊸" },
    { open: "➶➶⚜", close: "⚜➶➶" },
    { open: "⫍❄", close: "❄⫎" },
    { open: "⊷⊷◈", close: "◈⊶⊶" },
    { open: "╭✪", close: "✪╮" },
    { open: "⛤⌑", close: "⌑⛤" },
    { open: "⩥⩤❧", close: "❧⩥⩤" },
    { open: "⫷⟆✿", close: "✿⟅⫸" },
    { open: "⟴༄", close: "༄⟴" },
    { open: "╰⌘", close: "⌘╯" },
    { open: "⊱⫸", close: "⫷⊰" },
    { open: "⊶⊶⚝", close: "⚝⊷⊷" },
    { open: "⌯•", close: "•⌯" },
    { open: "⧼⚔", close: "⚔⧽" },
    { open: "༄ༀ", close: "ༀ༄" },
    { open: "╰❂", close: "❂╯" },
    { open: "➳༶", close: "༶➳" },
    { open: "𓆏⌬", close: "⌬𓆏" },
    { open: "⩧✦", close: "✦⩧" },
    { open: "➳❂", close: "❂➳" },
    { open: "✦⌘", close: "⌘✦" },
    { open: "⚛❂", close: "❂⚛" },
    { open: "⚔⦿", close: "⦿⚔" },
    { open: "༼ʘ̚ل͜ʘ̚༽⊰", close: "⊱༼ʘ̚ل͜ʘ̚༽" },
    { open: "༼ つ ◕_◕ ༽つ", close: "༼ つ ◕_◕ ༽つ" },
    { open: "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", close: "✧ﾟ･: *ヽ(◕ヮ◕ヽ)" },
    { open: "乁( •_• )ㄏ", close: "ㄏ( •_• )乁" },
    { open: "ᕙ(⇀‸↼‶)ᕗ", close: "ᕙ(⇀‸↼‶)ᕗ" },
    { open: "(ง ͠° ͟ل͜ ͡°)ง", close: "(ง ͠° ͟ل͜ ͡°)ง" },
    { open: "(¬‿¬)", close: "(¬‿¬)" },
    { open: "╚(•⌂•)╝", close: "╚(•⌂•)╝" },
    { open: "┬┴┬┴┤(･_├┬┴┬┴", close: "┬┴┬┴┤(･_├┬┴┬┴" },
    { open: "(ʘ‿ʘ)", close: "(ʘ‿ʘ)" },
    { open: "⊂(◉‿◉)つ", close: "⊂(◉‿◉)つ" },
    { open: "( ͡° ͜ʖ ͡°)", close: "( ͡° ͜ʖ ͡°)" },
    { open: "(▀̿Ĺ̯▀̿ ̿)", close: "(▀̿Ĺ̯▀̿ ̿)" },
    { open: "(งಠ_ಠ)ง", close: "(งಠ_ಠ)ง" },
    { open: "ლ(ಠ益ಠ)ლ", close: "ლ(ಠ益ಠ)ლ" },
    { open: "༼ ºل͟º ༽", close: "༼ ºل͟º ༽" },
    { open: "༼ຈل͜ຈ༽", close: "༼ຈل͜ຈ༽" },
    { open: "ψ(｀∇´)ψ", close: "ψ(｀∇´)ψ" },
    { open: "(¬_¬)", close: "(¬_¬)" },
    { open: "ᕦ(ò_óˇ)ᕤ", close: "ᕦ(ò_óˇ)ᕤ" },
    { open: "⊂(・﹏・⊂)", close: "(つ´ω`)つ" },
    { open: "༼ つ ಥ_ಥ ༽つ", close: "༼ つ ಥ_ಥ ༽つ" },
    { open: "(ﾉಥ益ಥ）ﾉ", close: "ヽ(ಥ益ಥﾉ)" },
    { open: "(ノ°Д°）ノ︵", close: "︵(ノ°Д°）ノ" },
    { open: "(｡♥‿♥｡)", close: "(｡♥‿♥｡)" },
    { open: "✌(◕‿-)✌", close: "✌(-‿◕)✌" },
    { open: "(ಥ﹏ಥ)", close: "(ಥ﹏ಥ)" },
    { open: "ಠ_ಠ", close: "ಠ_ಠ" },
    { open: "(ʘᴗʘ✿)", close: "(✿ʘ‿ʘ)" },
    { open: "(づ｡◕‿‿◕｡)づ", close: "(づ｡◕‿‿◕｡)づ" },
    { open: "⤜(ʘ_ʘ)⤏", close: "⤜(ʘ_ʘ)⤏" },
    { open: "(⊙_◎)", close: "(⊙_◎)" },
    { open: "◉_◉", close: "◉_◉" },
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
    "0": ["⓪", "0", "〇", "๐", "Ø", "੦", "߀", "⓿", "ʘ", "0", "⊘", "ø", "⁰", "ᴑ", "∅", "۰", "Օ", "𝟢", "⍥", "𝟬"],
    "1": ["①", "➀", "1", "１", "𝟏", "१", "۱", "𝟙", "①", "𝟣", "१", "١", "ℵ", "❶", "⓵", "𝟏", "𝟷", "۱", "𝟭", "Ⅰ"],
    "2": ["②", "➁", "2", "𝟐", "２", "२", "۲", "𝟚", "❷", "٢", "𝟤", "⓶", "۲", "２", "Ⅱ", "๒", "𝟮", "𝟸", "۲", "𝟤"],
    "3": ["③", "➂", "3", "𝟑", "३", "٣", "𝟛", "❸", "⓷", "３", "۳", "Ⅲ", "3", "٣", "𝟯", "𝟹", "ꝛ", "③", "𝟶", "ℨ"],
    "4": ["④", "➃", "4", "𝟒", "४", "٤", "𝟜", "❹", "٤", "𝟦", "⓸", "４", "Ⅳ", "۴", "४", "𝟰", "𝟸", "四", "𝟜", "ꝛ"],
    "5": ["⑤", "➄", "5", "𝟓", "५", "٥", "𝟝", "❺", "⓹", "٥", "۵", "𝟻", "Ⅴ", "٥", "𝟱", "𝟸", "５", "𝟓", "ꝙ", "Ƽ"],
    "6": ["⑥", "➅", "6", "𝟔", "६", "٦", "𝟞", "❻", "⓺", "٦", "۶", "𝟼", "Ⅵ", "६", "𝟨", "６", "６", "Ⅳ", "⍻", "Ƽ"],
    "7": ["⑦", "➆", "7", "𝟕", "७", "٧", "𝟟", "❼", "⓻", "٧", "𝟽", "７", "Ⅶ", "۷", "𝟭", "𝟭", "𝟠", "𐑅", "7", "𝟕"],
    "8": ["⑧", "➇", "8", "𝟖", "८", "٨", "𝟠", "❽", "⓼", "٨", "۸", "𝟾", "８", "Ⅷ", "۸", "𝟚", "๘", "౮", "𝟾", "⨀"],
    "9": ["⑨", "➈", "9", "𝟗", "९", "٩", "𝟡", "❾", "⓽", "९", "٩", "𝟿", "９", "Ⅸ", "۹", "𝟢", "⑩", "卍", "𝟗", "ꝙ"],
    "!": ["!", "！", "❗", "❕", "ǃ", "¡", "︕", "﹗", "！", "❢", "❣", "！", "︕", "ᵎ", "ǃ", "‼", "ǂ", "‽", "¡", "︕"],
    "@": ["@", "＠", "⍲", "ᴁ", "❨", "﷽", "⊗", "⓪", "＠", "⦿", "◉", "©", "𝛼", "٭", "₳", "ᴁ", "◯", "ʘ", "⍺", "Ⓐ"],
    "#": ["#", "＃", "❖", "⁂", "♯", "⌗", "⧠", "⌘", "⍈", "＃", "❧", "♯", "⨃", "₤", "⧟", "𝄢", "＃", "⨁", "𝄤", "⨀"],
    "$": ["$", "＄", "₪", "₡", "₣", "₥", "￠", "円", "₩", "₹", "₳", "₤", "＄", "₢", "₯", "₨", "₾", "৲", "₸", "₱"],
    "%": ["%", "％", "℅", "٪", "ℓ", "℀", "℁", "℅", "ℓ", "℀", "℁", "％", "٪", "ℓ", "‰", "ℇ", "⊕", "⊖", "⊗", "⊙"],
    "^": ["^", "＾", "ˆ", "⌒", "︿", "⨌", "◡", "∧", "∨", "⊻", "⊼", "⊽", "＾", "ˆ", "⊻", "⊺", "⋀", "⋁", "⋃", "⋂"],
    "&": ["&", "＆", "⦸", "⊕", "⊙", "⊗", "⊞", "⊟", "⦶", "⦷", "⦵", "＆", "⊡", "⊨", "⊭", "⦿", "⊜", "⊛", "⊰", "⊱"],
    "*": ["*", "＊", "⁕", "❋", "⭑", "⭒", "⛤", "✱", "✲", "✴", "＊", "✶", "✷", "✸", "✹", "✺", "✼", "❂", "❄", "✪"],
    "(": ["(", "（", "❨", "❪", "❬", "⦅", "⦇", "⦉", "⦋", "⦍", "⦏", "（", "❭", "❯", "⦙", "⦚", "⦛", "⦜", "⦮", "⦯"],
    ")": [")", "）", "❩", "❫", "❬", "⦆", "⦈", "⦊", "⦌", "⦎", "⦐", "❯", "❮", "❭", "❬", "❯", "⦕", "⦖", "⦗", "⦘"],
    "-": ["-", "−", "–", "⸗", "⸚", "–", "⸺", "⸻", "⸺", "⸻", "⎯", "−", "―", "─", "━", "➖", "⧀", "⧁", "⧂", "⧃"],
    "_": ["_", "＿", "‿", "︵", "︶", "︷", "︸", "︹", "︺", "︻", "︼", "︽", "︾", "︿", "﹀", "﹁", "﹂", "﹃", "﹄", "︾"],
    "=": ["=", "＝", "≠", "≡", "≢", "≣", "⧫", "≠", "⩵", "⩶", "⊥", "⊦", "⊧", "⊪", "⊫", "⊮", "⊯", "⊰", "⊱", "≌"],
    "+": ["+", "＋", "⊕", "⊖", "⊗", "⊞", "⊟", "⊠", "⊡", "⊣", "⊤", "⊥", "⊦", "⊧", "⊨", "⊭", "⊮", "⊯", "⊰", "⊱"],
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

  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  const handleDecorationChange = useCallback((e) => {
    setSelectedDecoration(e.target.value);
  }, []);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(decoratedOutput).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [decoratedOutput]);

  const handleShakeItUp = useCallback(() => {
    setSeed(Math.random());
    setIsShaking(true);
  
    const element = document.querySelector('.shakeable');
    element.classList.add('shake-animation');
    setTimeout(() => {
      element.classList.remove('shake-animation');
      setIsShaking(false);
    }, 500);
  }, []);

  return (
    <div>
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
      <div className="bg-white p-4 rounded border border-gray-300 mb-4 min-h-[80px] sm:min-h-[100px]">
        <p className="text-center text-base sm:text-lg font-medium text-blue-800 break-all">
          {decoratedOutput}
        </p>
      </div>
      <div className="flex justify-start w-full space-x-4 sm:space-x-6 ml-8">
        <motion.div
          onClick={handleShakeItUp}
          className={`relative w-20 h-20 sm:w-24 sm:h-24 cursor-pointer shakeable ${isShaking ? 'glow-fire' : ''}`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/FireCrystal.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: isShaking ? 0.8 : 1
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="absolute inset-0 flex items-center justify-center text-white text-shadow text-center text-xs sm:text-sm">
            <>Shake<br /> it up!</>
          </span>
        </motion.div>
        <motion.div 
          onClick={handleCopy} 
          className={`relative w-20 h-20 sm:w-24 sm:h-24 cursor-pointer flex items-center justify-center ${copied ? 'animate-pulseShrinkGrow' : ''}`} 
          style={{ 
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/CopyToClipboard.png)`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span 
            className="text-center text-black text-shadow text-xs sm:text-sm"
            style={{
              transform: 'rotate(-10deg)',
              position: 'relative',
              top: '-15px',  
              left: '5px',    
              lineHeight: '0.9'  
            }}
          >
            {copied ? 'Copied!' : <>Copy<br />To<br />Clipboard</>}
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default Arcana;