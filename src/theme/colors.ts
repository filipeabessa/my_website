interface Variant {
  main: string;
  dark: string;
  light: string;
}

interface Status {
  success: string;
  info: string;
  warning: string;
  error: string;
}

export interface Colors {
  background: Variant;
  primary: Variant;
  secondary: Variant;
  tertiary: Variant;
  text: Variant;
  status: Status;
}

const colors: Colors = {
  background: {
    light: "#ffffff",
    dark: "#b1c8c7",
    main: "#F7F7F7",
  },
  primary: {
    main: "#37231C",
    dark: "#251712",
    light: "#673D30",
  },

  secondary: {
    main: "#316C59",
    dark: "#004130",
    light: "#5F9B86",
  },
  tertiary: {
    main: "#021D3B",
    dark: "#001727",
    light: "#003352",
  },
  text: {
    light: "#ffffff",
    dark: "#000000",
    main: "#4b4d53",
  },
  status: {
    success: "#00c853",
    error: "#ff5252",
    warning: "#ffc107",
    info: "#2196f3",
  },
};
export default colors;
