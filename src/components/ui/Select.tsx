import * as RadixSelect from "@radix-ui/react-select";

export default function Select({ options }: { options: string[] }) {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="text-lg w-2/3 text-left flex justify-between border-b-2 py-2">
        <RadixSelect.Value />
        <RadixSelect.Icon />
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          className="select-content-width-full bg-slate-800"
        >
          <RadixSelect.Viewport className="w-full mt-2 py-2 space-y-4">
            <RadixSelect.Item value="clapton">
              <RadixSelect.ItemText>Clapton</RadixSelect.ItemText>
            </RadixSelect.Item>
            <RadixSelect.Item value="rectory road">
              <RadixSelect.ItemText>Rectory Road</RadixSelect.ItemText>
            </RadixSelect.Item>
            <RadixSelect.Item value="stoke newington">
              <RadixSelect.ItemText>Stoke Newington</RadixSelect.ItemText>
            </RadixSelect.Item>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
