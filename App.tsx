import * as React from 'react';
import './style.css';
import { db } from './firebase';
import {
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  collection,
} from 'firebase/firestore';
export default function App() {
  const dataref = collection(db, 'players');
  React.useEffect(() => {
    const getData = async () => {
      await onSnapshot(dataref, (snap) => {
        const filterData = snap.docs.map((e) => ({ ...e.data(), id: e.id }));
        setPlayersList(filterData);
      });
    };
    getData();
  }, []);
  const [name, setName] = React.useState();
  const [jersey, setJersey] = React.useState();
  const [playersList, setPlayersList] = React.useState();
  const [idCheck, setIdCheck] = React.useState();
  const handleAdd = async (e) => {
    e.preventDefault();
    await addDoc(dataref, { name: name, jersey: jersey });
  };
  const handledel = (e) => {
    e.preventDefault();
    console.log(name, playersList);
    playersList?.map(async (e) => {
      if (e.name === name) {
        const dref = await doc(db, 'players', e.id);
        await deleteDoc(dref);
      }
    });
  };
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="players name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="jersey"
          onChange={(i) => setJersey(i.target.value)}
        />
        <button type="submit">Add Player</button>
      </form>
      <form action="" onSubmit={handledel}>
        <input
          type="text"
          placeholder="players NAme"
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Dlete palyer</button>
      </form>
      <div>
        {playersList?.map((e) => (
          <div key={e.id}>
            {e.name},{e.jersey}
          </div>
        ))}
      </div>
    </div>
  );
}
