export interface Field {
    name: string;
    value: string;
    inputRef: React.RefObject<HTMLInputElement>;
    handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  }