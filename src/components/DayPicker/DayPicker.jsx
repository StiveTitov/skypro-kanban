import React from 'react';

import { format } from 'date-fns';
import {ru} from "date-fns/locale/ru";

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

export default function Example() {
  const [selected, setSelected] = React.useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>Срок исполнения: {format(selected, 'PP', {locale:ru})}.</p>;
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