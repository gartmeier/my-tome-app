'use client'

import {FaFileAlt, FaMagic} from 'react-icons/fa'
import {Command} from 'cmdk'
import React, { useState } from 'react';

function CommandPrompt() {
  const [inputValue, setInputValue] = useState('')

  return (
    <Command loop>
      <Command.List>
        <Command.Item>
          <FaMagic />
          Create image
        </Command.Item>
        <Command.Item>
          <FaFileAlt />
          <span>
            Create page about
            {inputValue 
              ? <strong> {inputValue}</strong>
              : '...'}
          </span>
        </Command.Item>
      </Command.List>
      <Command.Input placeholder="What would you like to do?" autoFocus value={inputValue} onValueChange={setInputValue}/>
    </Command>
  )
}


export default function Home() {
  const [pages, setPages] = useState([])
  const [tiles, setTiles] = useState([])

  return (
    <main>
      <CommandPrompt/>
    </main>
  )
}
