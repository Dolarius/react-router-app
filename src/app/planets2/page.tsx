"use client";

import Link from "next/link";
import { PlanetType, useGetPlanets2 } from "../api/useGetPlanets2";

import { useForm, SubmitHandler } from "react-hook-form";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { TableLoader } from "../components/TableLoader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useAddPlanet } from "../api/usePostPlanet";
import { Label } from "@/components/ui/label";

type Inputs = {
  name: string;
  population: string;
  terrain: string;
  climate: string;
};

export default function Planets() {
  const { data: planetsData, isLoading, isError, status } = useGetPlanets2();
  const [open, setOpen] = useState(false);
  const addPlanet = useAddPlanet();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  // console.log(
  //   "planetsData",
  //   planetsData?.map((planet) => planet.id)
  // );

  const onSubmit: SubmitHandler<Partial<PlanetType>> = (data) =>
    addPlanet.mutate({ updatedData: data });

  return (
    <div className="flex flex-col gap-3">
      <Drawer open={open} direction="right">
        <DrawerTrigger asChild>
          <Button className="w-fit" onClick={() => setOpen(true)}>
            Add Planet
          </Button>
        </DrawerTrigger>
        <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-[500px] ">
          <DrawerHeader>
            <DrawerTitle>Are you absolutely sure?</DrawerTitle>
            <DrawerDescription>This action cannot be undone.</DrawerDescription>
          </DrawerHeader>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="name">Name</Label>
            <Input autoComplete="off" id="name" {...register("name")} />
            <br />
            <Label htmlFor="population">Population</Label>
            <Input
              autoComplete="off"
              id="population"
              {...register("population")}
            />
            <br />
            <Label htmlFor="terrain">Terrain</Label>
            <Input autoComplete="off" id="terrain" {...register("terrain")} />
            <br />
            <Label htmlFor="climate">Climate</Label>
            <Input autoComplete="off" id="climate" {...register("climate")} />
            <br />
            <DrawerFooter className="flex gap-3 justify-end">
              <Button type="submit" onClick={() => setOpen(false)}>
                Submit
              </Button>
              <DrawerClose asChild>
                <Button onClick={() => setOpen(false)} variant="outline">
                  Cancel
                </Button>
              </DrawerClose>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>

      {isLoading && <TableLoader />}
      {isError && <div>Error fetching data</div>}
      {status == "success" && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Population</TableHead>
              <TableHead>Terrain</TableHead>
              <TableHead>Climate</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {planetsData?.map((planet) => (
              <TableRow key={planet.id}>
                <TableCell>
                  <Link
                    className="underline decoration-primary underline-offset-4"
                    href={`/planets2/${planet.id}`}
                  >
                    {planet.name}
                  </Link>
                </TableCell>
                <TableCell>{planet.population}</TableCell>
                <TableCell>{planet.terrain}</TableCell>
                <TableCell>{planet.climate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
