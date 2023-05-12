"use client";
import Image from 'next/image'
import { useState } from "react";
import ChipSelection from '../../components/chip-selection-popup/chip-selection';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <button onClick={handleOpenModal}>Open modal</button>
      <ChipSelection isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2>Modal title</h2>
        <p>Modal content goes here.</p>
      </ChipSelection>
    </>
  )
}
