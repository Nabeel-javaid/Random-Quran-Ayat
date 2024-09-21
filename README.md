

# QuranHealing

QuranHealing is a web application designed to provide spiritual comfort through selected ayats (verses) from the Quran. The app displays random ayats for reflection and specific verses to provide solace for various emotional states, such as sadness, hopelessness, and heartbreak. It also includes audio recitation and translations in both English and Urdu, ensuring accessibility for a broader audience.

## Features

### 1. **Random Ayat Display**
   - On each load, the app displays a random ayat from the Quran, with its English and Urdu translations. 
   - The ayat is fetched from the Al-Quran API.

### 2. **Comforting Ayats**
   - Users can choose from three emotional states: **Are you hurt?**, **Are you sad?**, and **Are you hopeless?** to receive Quranic verses tailored to provide comfort.
   - Each ayat is displayed with Arabic, English, and Urdu text along with references.

### 3. **Islamic Date Display**
   - The app features a **floating notification banner** on the right side that shows the current Islamic (Hijri) date, dynamically fetched from an Islamic calendar API.

### 4. **Search Functionality**
   - Users can search for specific ayats based on keywords in Arabic, English, or Urdu. This enables users to explore relevant Quranic verses based on their queries.

### 5. **Audio Recitation**
   - Users can listen to the audio recitation of the displayed ayats, adding an immersive experience.

### 6. **Responsive Design**
   - The application has been designed to be fully responsive, ensuring a seamless experience across desktop, tablet, and mobile devices.
   - The UI is soothing, with calming colors, smooth animations, and clear typography, offering a peaceful experience for users.

### 7. **Share Ayats**
   - Users can easily share any ayat via the built-in sharing functionality, allowing them to spread words of comfort with others.

### 8. **Smooth Animations**
   - The app uses **Framer Motion** for animations, ensuring smooth transitions and interactions, enhancing the overall user experience.

## Technologies Used

- **React.js**: Frontend library for building the user interface.
- **Framer Motion**: For adding animations to elements.
- **Styled-components**: For dynamic styling and responsive design.
- **Al-Quran API**: For fetching random ayats.
- **Islamic Calendar API**: For displaying the current Islamic (Hijri) date.
- **Vercel Analytics**: To track the app's performance.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/QuranHealing.git
   ```
2. Navigate to the project directory:
   ```
   cd QuranHealing
   ```
3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open the app in your browser:
   ```
   http://localhost:3000
   ```

## Usage

- On load, a random ayat will appear on the homepage.
- Choose a comforting category (Hurt, Sad, Hopeless) to see related ayats.
- Search for ayats using keywords in Arabic, English, or Urdu.
- View the current Islamic date on the floating notification banner.
- Share any ayat directly using the share button.

## Future Enhancements

- **Bookmark Ayats**: Allow users to bookmark their favorite ayats.
- **Dark Mode**: A night mode for improved readability in low-light environments.
- **User Personalization**: Custom ayat suggestions based on user preferences.

## Contributing

If you'd like to contribute to QuranHealing, feel free to submit a pull request. Ensure that your code follows best practices and is well-documented.

## License

This project is licensed under the MIT License.

---

This README should give a clear overview of your project, its features, and how to get started!
