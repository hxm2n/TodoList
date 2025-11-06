import { useState } from 'react';
import type { ChangeEvent } from 'react';

export type UseInputResult = {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setValue: (value: string) => void;
};

export const useInput = (initialValue: string): UseInputResult => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return { value, onChange, setValue };
};
