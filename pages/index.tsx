import type { NextPage } from "next";
import styles from "../styles/Home.module.scss";
import { TextInput, Button, Text } from "@mantine/core";
import { useDebouncedValue, useInputState, useToggle } from "@mantine/hooks";

const Home: NextPage = () => {
  const [value, setValue] = useInputState("");
  const [label, toggle] = useToggle(["blue", "orange", "green"]);
  const [debounced] = useDebouncedValue(value, 1000, {leading: true});

  return (
    <div className={styles.main}>
      <TextInput style={{margin: "1rem"}} value={value} onChange={setValue}/>
      <Text>Debounced value: {debounced}</Text>
      <Button color={label} onClick={() => toggle()}>
        {label}
      </Button>
    </div>
  );
};

export default Home;
