import React from 'react';

import { format } from 'date-fns';
import {ru} from "date-fns/locale/ru";

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Calendar({children, selected, setSelected}) {
  

  let footer=<div className='calendar__period'>{children}</div>;
  if (selected) {
    footer = <p className="calendar__p date-end"> Выберете срок исполнения {format(selected, 'PP', {locale:ru})}.</p>;
    
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      locale={ru}
    />
  );
  
}