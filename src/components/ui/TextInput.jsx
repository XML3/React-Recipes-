import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      ml={3}
      variant="outline"
      focusBorderColor="pink.400"
      onChange={changeFn}
      {...props}
    />
  );
};
