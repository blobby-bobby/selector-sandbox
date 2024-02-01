
export type SelectOption = {
    label: string,
    value: string | number,
}

export type MultipleSelectProps = {
  multiple: true,
  value: SelectOption[],
  onChange: (value: SelectOption[]) => void
}

export type SingleSelectProps = {
  multiple?: false,
  value?: SelectOption,
  onChange: (value: SelectOption | undefined) => void
}

export type optionProps = {
  options: SelectOption[];
}

export type SelectProps = {
    options: SelectOption[]
} & (SingleSelectProps | MultipleSelectProps)

export const options: SelectOption[] = [
    { label: "Duck 🦆", value: 1 },
    { label: "Buffalo 🐃", value: 2 },
    { label: "Bear 🐻", value: 3 },
    { label: "Cat 🐈", value: 4 },
    { label: "Otter 🦦", value: 5 },
    { label: "Turtle 🐢", value: 6 },
    { label: "Snake 🐍", value: 7 },
    { label: "Dolphin 🐬", value: 8},
    { label: "Goat 🐐", value: 9},
    { label: "T-Rex 🦖", value: 10}
]