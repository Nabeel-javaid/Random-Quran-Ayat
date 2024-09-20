import React, { useState } from 'react';

// Array of all 20 ayats with Arabic, English, and Urdu translations
const ayats = [
  {
    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    english: "Allah does not burden a soul beyond that it can bear…",
    urdu: "اللہ کسی جان پر اس کی طاقت سے زیادہ بوجھ نہیں ڈالتا…",
    reference: "Surah Al-Baqarah (2:286)"
  },
  {
    arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    english: "Seek help through patience and prayer.",
    urdu: "صبر اور نماز کے ذریعہ مدد حاصل کرو۔",
    reference: "Surah Al-Baqarah (2:45)"
  },
  {
    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    english: "Indeed, with hardship [will be] ease.",
    urdu: "بیشک ہر مشکل کے ساتھ آسانی ہے۔",
    reference: "Surah Ash-Sharh (94:5-6)"
  },
  {
    arabic: "قُلْ لَّنْ یُّصِیْبَنَاۤ اِلَّا مَا كَتَبَ اللّٰهُ لَنَاۚ-هُوَ مَوْلٰىنَاۚ-وَ عَلَى اللّٰهِ فَلْیَتَوَكَّلِ الْمُؤْمِنُوْنَ",
    english: "Say, 'Never will we be struck except by what Allah has decreed for us; He is our protector.' And upon Allah let the believers rely.",
    urdu: "کہہ دو کہ ہمیں ہرگز کوئی مصیبت نہیں پہنچتی مگر وہی جو اللہ نے ہمارے لیے لکھ دی ہے۔ وہی ہمارا کارساز ہے اور مؤمنوں کو چاہیے کہ اللہ ہی پر بھروسا کریں۔",
    reference: "Surah At-Tawbah (9:51)"
  },
  {
    arabic: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ",
    english: "Allah! There is no deity except Him, the Ever-Living, the Sustainer of existence...",
    urdu: "اللہ، وہ معبود ہے جس کے سوا کوئی معبود نہیں، وہ زندہ ہے، سب کو قائم رکھنے والا ہے...",
    reference: "Surah Al-Baqarah (2:255) - Ayat al-Kursi"
  },
  {
    arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
    english: "Did We not soothe your heart for you?",
    urdu: "کیا ہم نے آپ کا سینہ آپ کے لئے کشادہ نہیں کیا؟ ",
    reference: "Surah Al-Inshirah (94:1-3)"
  },
  {
    arabic: "إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ",
    english: " Indeed, the mercy of Allah is near to the doers of good..",
    urdu: "بیشک اللہ کی رحمت نیکوکاروں کے قریب ہے۔",
    reference: "Surah Al-A'raf (7:126)"
  },
  {
    arabic: "فَاصْفَحِ الصَّفْحَ الْجَمِيلَ",
    english: "So forgive with gracious forgiveness.",
    urdu: "پس معاف کرو اچھا معاف کرنا۔",
    reference: "Surah Al-Hijr (15:85)"
  },
  {
    arabic: "وَلَيَعْلَمَنَّ اللَّهُ الَّذِينَ آمَنُوا",
    english: "And Allah will surely make evident those who believe",
    urdu: "اور بیشک اللہ ضرور ان لوگوں کو جان لے گا جو ایمان لائے۔",
    reference: "Surah Al-Ankabut (29:11)"
  },
  {
    arabic: "فَاذْكُرُونِي أَذْكُرْكُمْ",
    english: "So remember Me; I will remember you.",
    urdu: "پس مجھے یاد کرو، میں تمہیں یاد رکھوں گا۔",
    reference: "Surah Al-Baqarah (2:152)"
  },
  {
    arabic: "وَإِنَّ اللَّهَ لَمَعَ الْمُحْسِنِينَ",
    english: "indeed, Allah is with the doers of good.",
    urdu: "بیشک اللہ نیکوکاروں کے ساتھ ہے۔",
    reference: "Surah Al-Ankabut (29:69)"
  },
  {
    arabic: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ",
    english: "And We send down of the Quran such things that are healing and mercy for the believers...",
    urdu: "اور ہم قرآن میں سے وہ نازل کرتے ہیں جو ایمان والوں کے لئے شفا اور رحمت ہے...",
    reference: "Surah Al-Isra (17:82)"
  },
  {
    arabic: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    english: "Seek help through patience and prayer",
    urdu: "صبر اور نماز کے ذریعہ مدد حاصل کرو",
    reference: "Surah Al-Baqarah (2:45)"
  },
  {
    arabic: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ",
    english: "And We have certainly made the Quran easy to remember.",
    urdu: "اور بیشک ہم نے قرآن کو نصیحت کے لئے آسان کر دیا؟",
    reference: "Surah Al-Qamar (54:17)"
  },
  {
    arabic: "وَمَا تَوْفِيقِي إِلَّا بِاللَّهِ",
    english: "And my success is not but through Allah.",
    urdu: "اور میری کامیابی اللہ ہی کی مدد سے ہے۔",
    reference: "Surah Hud (11:88)"
  },
  {
    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
    english: "Indeed, Allah is with the patient.",
    urdu: "بیشک اللہ صبر کرنے والوں کے ساتھ ہے۔",
    reference: "Surah Al-Baqarah (2:153)"
  }
];

function QuranHealing() {
  const [selectedAyat, setSelectedAyat] = useState(null);

  // Function to handle the button click
  const handleAyatClick = () => {
    const randomAyat = ayats[Math.floor(Math.random() * ayats.length)];
    setSelectedAyat(randomAyat);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Are You Hurt?</h2>
      <button onClick={handleAyatClick} style={styles.button}>
        Click for Comfort
      </button>
      
      {selectedAyat && (
        <div style={styles.ayatContainer}>
          <h3>{selectedAyat.arabic}</h3>
          <p><strong>English:</strong> {selectedAyat.english}</p>
          <p><strong>Urdu:</strong> {selectedAyat.urdu}</p>
          <p><em>{selectedAyat.reference}</em></p>
        </div>
      )}
    </div>
  );
}

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  ayatContainer: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
  },
};

export default QuranHealing;
