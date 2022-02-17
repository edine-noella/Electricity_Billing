import {useState} from "react";

export default function Check() {

  const [meter, setMeter] = useState('')

  return <div>
    <h1 className="font-bold text-center py-6">Check your meter</h1>

    <div className="flex flex-col gap-5">


      <input type="text" value={meter}
        onChange={e => setMeter(e.target.value)}
        className="w-[30rem]" placeholder=" Your meter number here" />

      <button type="button" className="bg-cyan-600 py-2 rounded text-white">submit</button>
    </div>


  </div>;
}
