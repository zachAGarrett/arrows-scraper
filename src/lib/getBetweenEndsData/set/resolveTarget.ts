import {
  SetAtTarget,
  SetTargetConnectOrCreateFieldInput,
  Target,
  TargetCreateInput,
} from "../../../generated/ogm";
import { BeDivision, Season } from "../types";

export default function resolveTarget(division: BeDivision, season: Season) {
  let setAtTarget: SetTargetConnectOrCreateFieldInput | undefined = undefined;
  const compoundDivision =
    division === BeDivision.CM ||
    division === BeDivision.CU18M ||
    division === BeDivision.CCM ||
    division === BeDivision.CU21M ||
    division === BeDivision.CJM ||
    division === BeDivision.CSM ||
    division === BeDivision.CMM ||
    division === BeDivision.C5M ||
    division === BeDivision.C6M ||
    division === BeDivision.C7M ||
    division === BeDivision.CW ||
    division === BeDivision.CU18W ||
    division === BeDivision.CCW ||
    division === BeDivision.CU21W ||
    division === BeDivision.CJW ||
    division === BeDivision.CSW ||
    division === BeDivision.CMW ||
    division === BeDivision.C5W ||
    division === BeDivision.C6W ||
    division === BeDivision.C7W;

  if (season === Season.IND) {
    // Indoor events
    if (compoundDivision) {
      const nodeProps = {
        rings: 5,
        radius: 20,
        max: 11,
        min: 0,
        xRing: true,
      };
      const targetName = `IND-${nodeProps.radius}-${nodeProps.rings}-3`;
      setAtTarget = {
        where: { node: { name: targetName } },
        onCreate: {
          node: {
            ...nodeProps,
            name: targetName,
          },
          edge: { distance: 18 },
        },
      };
    } else if (
      // Recurve division
      division === BeDivision.RM ||
      division === BeDivision.RW ||
      division === BeDivision.RU18M ||
      division === BeDivision.RCM ||
      division === BeDivision.RU21M ||
      division === BeDivision.RJM ||
      division === BeDivision.RSM ||
      division === BeDivision.R5M ||
      division === BeDivision.R6M ||
      division === BeDivision.R7M ||
      division === BeDivision.RU18W ||
      division === BeDivision.RCW ||
      division === BeDivision.RU21W ||
      division === BeDivision.RJW ||
      division === BeDivision.RSW ||
      division === BeDivision.R5W ||
      division === BeDivision.R6W ||
      division === BeDivision.R7W
    ) {
      const nodeProps = {
        rings: 10,
        radius: 20,
        max: 11,
        min: 0,
        xRing: false,
      };
      const targetName = `IND-${nodeProps.radius}-${nodeProps.rings}-1`;
      setAtTarget = {
        where: { node: { name: targetName } },
        onCreate: {
          node: {
            ...nodeProps,
            name: targetName,
          },
          edge: { distance: 18 },
        },
      };
    } else {
      throw new Error(
        `Unsupported division -> target mapping: ${season} | ${division}`
      );
    }
  } else {
    // Outdoor events
    if (compoundDivision) {
      const nodeProps = {
        rings: 5,
        radius: 40,
        max: 11,
        min: 5,
        xRing: true,
      };
      const targetName = `OUT-${nodeProps.radius}-${nodeProps.rings}-1`;
      setAtTarget = {
        where: { node: { name: targetName } },
        onCreate: {
          node: {
            ...nodeProps,
            name: targetName,
          },
          edge: { distance: 50 },
        },
      };
    } else if (
      // Recurve 60 meter division
      division === BeDivision.RU18M ||
      division === BeDivision.RCM ||
      division === BeDivision.R5M ||
      division === BeDivision.R6M ||
      division === BeDivision.R7M ||
      division === BeDivision.RU18W ||
      division === BeDivision.RCW ||
      division === BeDivision.R5W ||
      division === BeDivision.R6W ||
      division === BeDivision.R7W
    ) {
      const nodeProps = {
        rings: 10,
        radius: 61,
        max: 11,
        min: 0,
        xRing: true,
      };
      const targetName = `OUT-${nodeProps.radius}-${nodeProps.rings}-1`;
      setAtTarget = {
        where: { node: { name: targetName } },
        onCreate: {
          node: {
            ...nodeProps,
            name: targetName,
          },
          edge: { distance: 60 },
        },
      };
    } else if (
      // Recurve 70 meter division
      division === BeDivision.RM ||
      division === BeDivision.RW ||
      division === BeDivision.RU21M ||
      division === BeDivision.RJM ||
      division === BeDivision.RSM ||
      division === BeDivision.RU21W ||
      division === BeDivision.RJW ||
      division === BeDivision.RSW
    ) {
      const nodeProps = {
        rings: 10,
        radius: 61,
        max: 11,
        min: 0,
        xRing: true,
      };
      const targetName = `OUT-${nodeProps.radius}-${nodeProps.rings}-1`;
      setAtTarget = {
        where: { node: { name: targetName } },
        onCreate: {
          node: {
            ...nodeProps,
            name: targetName,
          },
          edge: { distance: 70 },
        },
      };
    } else {
      throw new Error(
        `Unsupported division -> target mapping: ${season} | ${division}`
      );
    }
  }
  return setAtTarget;
}
