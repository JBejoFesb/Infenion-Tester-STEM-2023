"use client";
import { useState } from "react";
import ChipSelection from '../../components/chip-selection-popup/chip-selection';
import loadJSONData from '../../helpers/json-parser';
import logo from "../../images/logo.png";
import Image from 'next/image';

import { ILoadedData } from "../../helpers/json-parser";

export default function Home() {
  let JSONdata = loadJSONData();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChip, setSelectedChip] = useState('');
  const [chipInfo, setChipInfo] = useState<ILoadedData | undefined>(undefined);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    console.log(selectedChip);
    switch(selectedChip) {
      case 'L1':
        setChipInfo(JSONdata.L1);
      case 'L2':
        setChipInfo(JSONdata.L2);
      case 'M1':
        setChipInfo(JSONdata.M1);
      case 'M2':
       setChipInfo(JSONdata.M2);
    }
  }

  console.log(chipInfo);

  function handleChange(event: any) {
    setSelectedChip(event.target.value);
  }

  return (
    <div style={{ display: 'flex' }}>
      <header className='bg-green-300' style={{ width: '50vh', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className='bg-green-400 w-full h-fit flex flex-row items-center justify-center p-4' >
          <Image src={logo.src} alt="HCL logo" width={100} height={100} />
          <h1 className='text-black font-bold p-3'>Chip Tester Pro v0.1</h1>
        </div>
        <div className='flex flex-col w-full py-2 px-4'>
        <button onClick={handleOpenModal} className="bg-green-700 py-4 w-full rounded-lg text-lg font-semibold text-white hover:bg-orange-600 hover:scale-x-105 transition-colors duration-100">Pick a chip</button>
        <div>
          <ChipSelection isOpen={isModalOpen} onClose={handleCloseModal}>
            <div>
              <label htmlFor="my-dropdown">Select an option:</label>
              <select id="my-dropdown" value={selectedChip} onChange={handleChange}>
                <option value="">-- Please select --</option>
                <option value="L1">L1</option>
                <option value="L2">L2</option>
                <option value="M1">M1</option>
                <option value="M2">M2</option>
              </select>
              <p>You selected: {selectedChip}</p>
            </div>
          </ChipSelection>
        </div>
        <div>
        <button type="submit" className="bg-green-700 py-4 w-full rounded-lg text-lg font-semibold text-white hover:bg-orange-600 hover:scale-x-105 transition-colors duration-100">Export .csv</button>
        </div>
        </div>
      </header>
      <div style={{ flex: 1, paddingTop: 50 }}>
        <h2 style={{ textAlign: 'center' }}>Welcome to Your App!</h2>
        <p style={{ textAlign: 'center' }}>This is the body of your homepage. It takes up the rest of the screen.</p>
      </div>
    </div>
  )
}