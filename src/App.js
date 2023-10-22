import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { fetchTopAlbums, fetchNewAlbums, fetchSongs } from "./api/api";
import TopAlbums from "./components/CardSections/TopAlbums";
import NewAlbums from "./components/CardSections/NewAlbums";
import Songs from "./components/CardSections/Songs";
import Faq from "./components/Accordian/Faq";

function App() {
  const [topAlbumsData, setTopAlbumsData] = useState([]);
  const [newAlbumsData, setNewAlbumsData] = useState([]);
  const [newSongs, setNewSongs] = useState([]);
  const [filteredDataValues, setFilteredDataValues] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    console.log("handle chnge", newValue);
    setValue(newValue);
  };

  const generateTopAlbumsData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumsData(data);
    } catch (e) {
      console.error(e);
    }
  };

  const generateNewAlbumsData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumsData(data);
    } catch (err) {
      console.log(err);
    }
  };

  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs();
      setNewSongs(res);
      setFilteredDataValues(res);
    } catch (err) {
      console.log(err);
    }
  };

  const generateSongs = async () => {
    let key;
    console.log("newSongs", newSongs);
    if (value === 0) {
      filteredData(newSongs);
      return;
    } else if (value === 1) {
      key = "rock";
    } else if (value === 2) {
      key = "pop";
    } else if (value === 3) {
      key = "jazz";
    } else {
      key = "blues";
    }
    let res = newSongs.filter((item) => item.genre.key === key);
    filteredData(res);
  };

  useEffect(() => {
    generateTopAlbumsData();
    generateNewAlbumsData();
    generateAllSongsData();
  }, []);

  useEffect(() => {
    generateSongs(value);
  }, [value]);

  const filteredData = (val) => {
    setFilteredDataValues(val);
  };

  return (
    <div>
      <Navbar />
      <HeroSection />
      <div className={styles.sectionWrapper1}>
        <TopAlbums type="album" title="Top albums" data={topAlbumsData} />
      </div>
      <div className={styles.sectionWrapper2}>
        <NewAlbums type="album" title="New Album" data={newAlbumsData} />
      </div>
      <hr />
      <div className={styles.sectionWrapper3}>
        <Songs
          type="song"
          title="Songs"
          data={newSongs}
          filteredData={filteredData}
          filteredDataValues={filteredDataValues}
          value={value}
          handleChange={handleChange}
        />
      </div>
      <hr />
      <Faq />
    </div>
  );
}

export default App;
