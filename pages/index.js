import Head from 'next/head'
import {useState} from 'react';

export default function Home() {
  const [time, setTime] = useState('');

  setInterval(() => {
    const time = new Date();
    const starts = new Date();
    starts.setUTCHours(18,0,0,0);
    const timeuntil = new Date(starts-time);
    const minutes = timeuntil.getMinutes()+((timeuntil.getHours()-12)*60);
    const seconds = timeuntil.getUTCSeconds();
    setTime(`${minutes}:${seconds}`)
}, 100)


  return (
    <div className={'bg-gray-900 w-full h-screen'}>
      <Head>
        <title>FB Time Until</title>
        <meta name="description" content="Time until 7pm" />
      </Head>

      <p className='text-gray-100 font-bold text-3 pt-16 xl text-center'>Time Until Kick Off</p>
      <p className='text-gray-100 font-bold text-6xl pt-2 text-center'>{time}</p>

    </div>
  )
}
