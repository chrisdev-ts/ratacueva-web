// atoms/Dropdown.tsx
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";

interface Option {
    label: string;
    value: number;
}

interface DropdownProps {
    value: number;
    onChange: (value: number) => void;
    options?: Option[];
    className?: string;
}

export const Dropdown = ({
    value,
    onChange,
    options = [
        { label: "5", value: 5 },
        { label: "10", value: 10 },
        { label: "20", value: 20 },
        { label: "50", value: 50 },
    ],
    className,
}: DropdownProps) => {
    const selected = options.find((opt) => opt.value === value);

    return (
        <Listbox value={value} onChange={onChange}>
            <div className={clsx("relative", className)}>
                <Listbox.Button className="w-full border border-border rounded-2xl px-4 py-2.5 text-placeholder flex justify-between items-center">
                    {selected?.label}
                    <ChevronDownIcon className="w-5 h-5 text-placeholder" />
                </Listbox.Button>
                <Listbox.Options className="absolute mt-1 w-full rounded-2xl border bg-gray border-border shadow-md z-10 max-h-60 overflow-auto">
                    {options.map((opt) => (
                        <Listbox.Option
                            key={opt.value}
                            value={opt.value}
                            className="cursor-pointer border-b border-white px-4 py-2 last:border-0">
                            {opt.label}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </div>
        </Listbox>
    );
};

export default Dropdown;
