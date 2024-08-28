"use client";

import { FC } from "react";
import { Button } from "@/components/ui/button";
import { PlanetType } from "../api/useGetPlanets";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export const Planet: FC<{ planet: PlanetType; planetId?: number }> = ({
  planet,
  planetId,
}) => {
  return (
    <div>
      <h1 className="text-4xl mx-[0] my-[10px] text-[#ffff57] text-center">
        {planet.name}
      </h1>
      <div className="rounded-md border">
        <Table className="table-fixed">
          <TableBody>
            <TableRow>
              <TableCell className="border-r">Population</TableCell>
              <TableCell>{planet.population}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r">Terrain</TableCell>
              <TableCell>{planet.terrain}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r">Climate</TableCell>
              <TableCell>{planet.climate}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r">Diameter</TableCell>
              <TableCell>{planet.diameter}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r">Films</TableCell>
              <TableCell>
                {planet.films?.map((films) => (
                  <p key={films}>{films}</p>
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r">Gravity</TableCell>
              <TableCell>{planet.gravity}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r ">Orbital period</TableCell>
              <TableCell>{planet.orbital_period}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r">Residents</TableCell>
              <TableCell>
                {planet.residents?.map((residents) => (
                  <p key={residents}>{residents}</p>
                ))}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r">Rotation Period</TableCell>
              <TableCell>{planet.rotation_period}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="border-r">Surface water</TableCell>
              <TableCell>{planet.surface_water}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
