import { Name } from "./Person.types";

type PersonListprops = {
  names: Name[];
};

export const PersonList = (props: PersonListprops) => {
  return (
    <div>
      {props.names.map((name) => (
        <h2>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};
