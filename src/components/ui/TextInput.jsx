import { Input } from "@chakra-ui/react";

export const TextInput = ({ changeFn, ...props }) => {
  return (
    <Input
      ml={3}
      variant="outline"
      focusBorderColor="#e84213"
      onChange={changeFn}
      {...props}
    />
  );
};
