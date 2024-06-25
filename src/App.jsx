import {
  Description,
  Field,
  Fieldset,
  Input,
  Label,
  Legend,
  Select,
  Textarea,
  Button,
} from "@headlessui/react";
import { useState } from "react";

export default function App() {
  const [disabled, setdisabled] = useState("");
  function handleSubmit() {
    const button = document.getElementsByClassName("submit");
    const name = document.getElementsByClassName("name").value;
    const phone = document.getElementsByClassName("phone").value;
    const time = document.getElementsByClassName("time").value;
    setdisabled(true);
    const url =
      "https://docs.google.com/forms/d/e/1FAIpQLScUuSk3qIqmbU_A95dlzeL3Dx45mT69NBjvEpoRa7GarKBt5w/formResponse?usp=pp_url&entry.108475329=" +
      name +
      "&entry.869198274=" +
      phone +
      "&entry.566000282=" +
      time;
    fetch(url, { mode: "no-cors" });
  }
  return (
    <div className="flex h-screen w-full justify-center pt-24 px-4">
      <div className="w-full max-w-lg px-4">
        <Fieldset className="space-y-6 rounded-xl bg-white/5 p-6 sm:p-10">
          <Legend className="text-2xl font-semibold text-white text-center">
            آرایشگاه ایپک
          </Legend>
          <Field>
            <Label className="text-sm/6 font-medium text-white">
              نام و نام خانوادگی
            </Label>
            <Input
              required
              className="name mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">
              شماره تلفن
            </Label>
            <Input
              required
              className="phone mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            />
          </Field>
          <Field>
            <Label className="text-sm/6 font-medium text-white">زمان</Label>
            <Input
              required
              className="time mt-3 block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm/6 text-white focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
            />
          </Field>
          <Button
            disabled={disabled}
            type="submit"
            onClick={handleSubmit}
            className="submit  flex items-center mr-auto gap-2 rounded-md bg-gray-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white data-[disabled]:bg-white/5"
          >
            رزرو‌ کن
          </Button>
        </Fieldset>
      </div>
    </div>
  );
}
