import React from 'react';
import { connectDatabase } from './api/db';

const HomePage = ({ data }) => {
  return (
    <div>
      <h1>Next.js SSR with SQLite</h1>
      <ul>
        {data.map((item) => (
          <li key={item.aiueo}>{item.aiueo}</li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const db = await connectDatabase();
  const data = await db.all('SELECT * FROM nihongo');

  return {
    props: { data },
  };
}

export default HomePage;
