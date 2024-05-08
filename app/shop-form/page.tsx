"use client";

import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import Select, { SelectChangeEvent } from "@mui/material/Select";
import Navbar from "../component/Navbar";
import { Button } from "@mui/material";
import { FormEvent, useRef as UseRef } from "react";
import { useRouter as UseRouter } from "next/navigation";
import { useProductStore } from "../store/store";

const page = () => {
  const nameref = UseRef<HTMLInputElement>(null);
  const familyref = UseRef<HTMLInputElement>(null);
  const numberref = UseRef<HTMLInputElement>(null);
  const postalref = UseRef<HTMLInputElement>(null);
  const stateref = UseRef<HTMLInputElement>(null);
  //   const cityref = UseRef<SelectInstance<ISelectOption | null>>(null);
  const addressref = UseRef<HTMLInputElement>(null);

  const Router = UseRouter();

  return (
    <>
      <Navbar />
      <main className="m-4">
        <div className="bg-white py-8 px-4 flex flex-col gap-4 items-center justify-center w-10/12 md:w-5/12 2xl:w-3/12 mx-auto rounded-3xl">
          <h1 className="text-lg font-bold">فرم تکمیل سفارش</h1>
          <form
            className="flex flex-col gap-2"
            onSubmit={(event: FormEvent) => {
              event.preventDefault();
              //   if (cityref.current) console.log(cityref.current.focus());
              useProductStore.getState().clearList();
              Router.push("/");
              Router.refresh();
            }}
          >
            <TextField
              required
              id="outlined-required"
              inputRef={nameref}
              label="نام"
            />
            <TextField
              required
              id="outlined-required"
              inputRef={familyref}
              label="نام خانوادگی"
            />
            <TextField
              required
              id="outlined-required"
              label="موبایل"
              type="number"
              inputRef={numberref}
            />
            <TextField
              required
              id="outlined-required"
              label="کدپستی"
              type="number"
              inputRef={postalref}
            />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">استان</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="استان"
                defaultValue={"مازندران"}
                ref={stateref}
              >
                <MenuItem value={"تهران"}>تهران</MenuItem>
                <MenuItem value={"مازندران"}>مازندران</MenuItem>
                <MenuItem value={"اصفهان"}>اصفهان</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">شهرستان</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="شهرستان"
                defaultValue={"ساری"}
              >
                <MenuItem value={"ساری"}>ساری</MenuItem>
                <MenuItem value={"بابل"}>بابل</MenuItem>
                <MenuItem value={"آمل"}>آمل</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="outlined-multiline-flexible"
              label="آدرس"
              multiline
              maxRows={4}
              inputRef={addressref}
            />
            <Button
              variant="contained"
              className="text-lg bg-indigo-600"
              type="submit"
            >
              تکمیل خرید
            </Button>
          </form>
        </div>
      </main>
    </>
  );
};

export default page;
