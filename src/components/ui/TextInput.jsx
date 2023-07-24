import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      variant="outline"
      foucusBorderColor="pink.400"
      onChange={changeFn}
      {...props}
    />
  );
};
