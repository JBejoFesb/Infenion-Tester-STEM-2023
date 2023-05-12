"use client";
import Image from 'next/image'
import logo from "../../images/logo.png";
import { useState } from "react";
import ChipSelection from '../../components/chip-selection-popup/chip-selection';
import loadJSONData from '../../helpers/json-parser';
import AllTables from '../../components/test-vectors/test-vectors';

let chipInfo: any = undefined;

export default function Home() {

  let JSONdata = loadJSONData();
  let L1 = JSONdata.L1;
  let L2 = JSONdata.L2;
  let M1 = JSONdata.M1;
  let M2 = JSONdata.M2;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChip, setSelectedChip] = useState('');
  const [isChipSelected, setIsChipSelected] = useState(false);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    console.log(selectedChip);
    switch(selectedChip) {
      case 'L1':
        chipInfo = L1;
        break;
      case 'L2':
        chipInfo = L2;
        break;
      case 'M1':
        chipInfo = M1;
        break;
      case 'M2':
        chipInfo = M2;
        break;
    }

    setIsChipSelected(!isChipSelected);
  }

  function handleChange(event: any) {
    setSelectedChip(event.target.value);
  }

  const handleMinChange = (event:any) => {
    setMin(event.target.value);
  };

  const handleMaxChange = (event:any) => {
    setMax(event.target.value);
  };

  const [data, setData] = useState({
    items: [
      { id: 1, name: 'Temperature', min: '-40',max: '150'},
      { id: 2, name: 'Humidity', min: '10',max: '30 '},
      { id: 3, name: 'Input voltage', min: '0',max: '5'},
      { id: 4, name: 'Power consumption', min: '100',max: '1000'},
      { id: 4, name: 'Number of PWM Channels', min: '2',max: '8'}
    ]})


  return (
    <div style={{ display: 'flex' }}>
      <header className='bg-green-300' style={{ width: '50vh', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <div className='bg-green-400 w-full h-fit flex flex-row items-center justify-center p-4' >
          <Image src={logo.src} alt="HCL logo" width={100} height={100} />
          <h1 className='text-black font-bold p-3'>Chip Tester Pro v0.1</h1>
        </div>
        <div className='flex flex-col w-full py-2 px-4 space-y-2'>
        <button onClick={handleOpenModal} className="bg-green-700 py-2 w-full rounded-lg text-lg font-semibold text-white hover:bg-orange-600 hover:scale-x-105 transition-colors duration-100">Pick a chip</button>
        <div>
          <ChipSelection isOpen={isModalOpen} onClose={handleCloseModal}>
            <div className=' space-y-2'>
              <label className='text-black' htmlFor="my-dropdown">Select an option:</label>
              <select  className='text-black' id="my-dropdown" value={selectedChip} onChange={handleChange}>
                <option value="">-- Select chip family --</option>
                <option value="L1">L1</option>
                <option value="L2">L2</option>
                <option value="M1">M1</option>
                <option value="M2">M2</option>
              </select>
              <p className='text-black'>You selected: {selectedChip}</p>
            </div>
          </ChipSelection>
        </div>

        <div className='flex flex-col h-[70vh] w-full p-4 bg-slate-200 rounded-lg overflow-scroll'>

          <div className='flex flex-col space-y-3'>
            {data.items.map(item => (
              <div key={item.id} className='flex flex-col space-y-1 py-3 border-b-2 border-slate-500/50'>
                <p className='text-black text-lg font-bold'>{item.name}</p>
                <label className='text-black font-bold' htmlFor="min">Minimum:</label>
                <input className='text-black mb-2' type="number" id="min" value={min} onChange={handleMinChange} />
                <label className='text-black font-light' htmlFor="min">Default value:{item.min}</label>

                <label className='text-black font-bold' htmlFor="max">Maximum:</label>
                <input className='text-black' type="number" id="max" value={max} onChange={handleMaxChange} />
                <label className='text-black font-light' htmlFor="min">Default value:{item.max}</label>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="bg-green-700 py-4 w-full rounded-lg text-lg font-semibold text-white hover:bg-orange-600 hover:scale-x-105 transition-colors duration-100">Export .csv</button>
        </div>
      </header>
      <div style={{ flex: 1, paddingTop: 50 }}>
        {
          isChipSelected ? <AllTables data={chipInfo} /> : <></>
        }
      </div>
    </div>
  );
}
