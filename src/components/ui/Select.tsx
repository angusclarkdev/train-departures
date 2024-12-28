import * as RadixSelect from "@radix-ui/react-select";

export default function Select({ options }: { options: string[] }) {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="text-lg w-full text-left flex justify-between border-b-2 border-border py-2">
        <RadixSelect.Value />
        <RadixSelect.Icon />
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          className="select-content-width-full bg-surface"
        >
          <RadixSelect.Viewport className="w-full mt-2 p-2 space-y-4">
            {options.map((option) => (
              <RadixSelect.Item value={option}>
                <RadixSelect.ItemText>{option}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
