import { Division } from "../../../../../generated/ogm";
import { BeDivision } from "../../../types";

// todo : add error for uncaught division
const mapDivision = (division: BeDivision) => {
  // Recurve divisions
  if (division === BeDivision.RSM || division === BeDivision.RSW) {
    return Division.Rs;
  } else if (division === BeDivision.RU21M || division === BeDivision.RU21W) {
    return Division.R21;
  } else if (
    division === BeDivision.RU18M ||
    division === BeDivision.RU18W ||
    division === BeDivision.RU15M ||
    division === BeDivision.RU15W ||
    division === BeDivision.RU13M ||
    division === BeDivision.RU13W ||
    division === BeDivision.RYM ||
    division === BeDivision.RYW ||
    division === BeDivision.REM ||
    division === BeDivision.REW
  ) {
    return Division.R18;
  } else if (division === BeDivision.R5M || division === BeDivision.R5W) {
    return Division.R50;
  } else if (division === BeDivision.R6M || division === BeDivision.R6W) {
    return Division.R60;
  } else if (division === BeDivision.R7M || division === BeDivision.R7W) {
    return Division.R70;
  } else if (division === BeDivision.RCM || division === BeDivision.RCW) {
    return Division.Rc;
  } else if (division === BeDivision.ROM || division === BeDivision.ROW) {
    return Division.Ro;
  }

  // Compound Divisions
  else if (division === BeDivision.CSM || division === BeDivision.CSW) {
    return Division.Cs;
  } else if (division === BeDivision.CU21M || division === BeDivision.CU21W) {
    return Division.C21;
  } else if (
    division === BeDivision.CU18M ||
    division === BeDivision.CU18W ||
    division === BeDivision.CU15M ||
    division === BeDivision.CU15W ||
    division === BeDivision.CU13M ||
    division === BeDivision.CU13W ||
    division === BeDivision.CYM ||
    division === BeDivision.CYW ||
    division === BeDivision.CEM ||
    division === BeDivision.CEW
  ) {
    return Division.C18;
  } else if (division === BeDivision.C5M || division === BeDivision.C5W) {
    return Division.C5;
  } else if (division === BeDivision.C6M || division === BeDivision.C6W) {
    return Division.C6;
  } else if (division === BeDivision.C7M || division === BeDivision.C7W) {
    return Division.C7;
  } else if (division === BeDivision.CCM || division === BeDivision.CCW) {
    return Division.Cc;
  } else if (division === BeDivision.COM || division === BeDivision.COW) {
    return Division.Co;
  }

  // Barebow Divisions
  else if (division === BeDivision.BSM || division === BeDivision.BSW) {
    return Division.Bs;
  } else if (division === BeDivision.BU21M || division === BeDivision.BU21W) {
    return Division.B21;
  } else if (division === BeDivision.BU18M || division === BeDivision.BU18W) {
    return Division.B18;
  } else if (division === BeDivision.B5M || division === BeDivision.B5W) {
    return Division.B5;
  }

  // V.I. Division
  else if (division === BeDivision.VIO) {
    return Division.Vi;
  }

  // W1 Division
  else if (division === BeDivision.W1O) {
    return Division.W1;
  }

  // Fixed Pins Divisions
  else if (division === BeDivision.FU21M || division === BeDivision.FU21W) {
    return Division.F21;
  } else if (division === BeDivision.FU18M || division === BeDivision.FU18W) {
    return Division.F18;
  }

  // Unsupported divisions
  else if (division === BeDivision.HBM) {
    throw new Error(`Unsupported athlete division: ${division}`);
  } else {
    throw new Error(`Unsupported athlete division: ${division}`);
  }
};

export default mapDivision;
