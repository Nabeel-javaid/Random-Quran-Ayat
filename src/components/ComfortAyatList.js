import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define some comforting ayats
const comfortingAyats = [
    { id: 1, text: 'Verily, with every difficulty there is relief. (94:6)', translation: 'بیشک تنگی کے ساتھ آسانی ہے' },
    { id: 2, text: 'Do not lose hope, nor be sad. (3:139)', translation: 'غم نہ کرو اور نہ ہمت ہارو' },
    { id: 3, text: 'So be patient. Indeed, the promise of Allah is truth. (30:60)', translation: 'پس صبر کرو بیشک اللہ کا وعدہ حق ہے' },
    { id: 4, text: 'Indeed, Allah is with the patient. (2:153)', translation: 'بیشک اللہ صبر کرنے والوں کے ساتھ ہے' },
    { id: 5, text: 'And whoever fears Allah, He will make a way for him. (65:2-3)', translation: 'اور جو اللہ سے ڈرتا ہے اللہ اس کیلئے راستہ بناتا ہے' },
    { id: 6, text: 'For indeed, it is not the eyes that are blinded, but blinded are the hearts. (22:46)', translation: 'بیشک دل اندھے ہوتے ہیں آنکھیں نہیں' },
    { id: 7, text: 'Allah does not burden a soul beyond that it can bear. (2:286)', translation: 'اللہ کسی جان کو اس کی طاقت سے زیادہ تکلیف نہیں دیتا' },
    { id: 8, text: 'And seek help in patience and prayer. (2:45)', translation: 'صبر اور نماز سے مدد لو' },
    { id: 9, text: 'And My Mercy encompasses all things. (7:156)', translation: 'اور میری رحمت ہر چیز پر محیط ہے' },
    { id: 10, text: 'Call upon Me, I will respond to you. (40:60)', translation: 'مجھ سے دعا کرو میں قبول کروں گا' },
    { id: 11, text: 'Your Lord has not forsaken you, nor has He become displeased. (93:3)', translation: 'تمہارا رب تمہیں نہیں چھوڑے گا اور نہ ناراض ہوگا' },
    { id: 12, text: 'And We will surely test you with something of fear and hunger. (2:155)', translation: 'اور ہم تمہیں آزمائیں گے خوف اور بھوک کے ساتھ' },
    { id: 13, text: 'Indeed, Allah is the Best of Providers. (22:58)', translation: 'بیشک اللہ بہترین رزق دینے والا ہے' },
    { id: 14, text: 'Say, "O My servants who have transgressed against themselves, do not despair of the mercy of Allah." (39:53)', translation: 'اے میرے بندو جو اپنی جانوں پر ظلم کر چکے ہو، اللہ کی رحمت سے مایوس نہ ہو' },
    { id: 15, text: 'And He found you lost and guided [you]. (93:7)', translation: 'اور اس نے تمہیں بھٹکا ہوا پایا تو راہ دکھا دی' },
    { id: 16, text: 'But they plan, and Allah plans. And Allah is the best of planners. (8:30)', translation: 'اور وہ تدبیر کرتے ہیں اور اللہ تدبیر کرتا ہے اور اللہ بہترین تدبیر کرنے والا ہے' },
    { id: 17, text: 'And whoever puts their trust in Allah, He will be sufficient for him. (65:3)', translation: 'جو اللہ پر بھروسہ کرتا ہے، وہ اسے کافی ہے' },
    { id: 18, text: 'Indeed, the help of Allah is near. (2:214)', translation: 'بیشک اللہ کی مدد قریب ہے' },
    { id: 19, text: 'But perhaps you hate a thing and it is good for you. (2:216)', translation: 'ممکن ہے کہ تم کسی چیز کو ناپسند کرو اور وہ تمہارے لئے بہتر ہو' },
    { id: 20, text: 'And He gives you from all you ask of Him. (14:34)', translation: 'اور تمہیں ہر چیز دیتا ہے جو تم اس سے مانگتے ہو' }
  ];
  
const ListWrapper = styled(motion.div)`
  margin-top: 30px;
  background-color: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const AyatItem = styled(motion.div)`
  padding: 10px;
  margin-bottom: 15px;
  border-left: 4px solid #4caf50;
  background-color: #f0f4f8;
  border-radius: 5px;
  text-align: left;
`;

const AyatText = styled.p`
  font-size: 1.2rem;
  color: #2e384d;
  margin: 0;
`;

const AyatTranslation = styled.p`
  font-size: 1rem;
  color: #58627a;
  margin-top: 5px;
`;

const ComfortAyatList = () => {
  return (
    <ListWrapper
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {comfortingAyats.map(ayat => (
        <AyatItem
          key={ayat.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: ayat.id * 0.1 }}
        >
          <AyatText>{ayat.text}</AyatText>
          <AyatTranslation>{ayat.translation}</AyatTranslation>
        </AyatItem>
      ))}
    </ListWrapper>
  );
};

export default ComfortAyatList;
