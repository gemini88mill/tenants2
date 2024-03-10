import { Box, Grid } from "@mui/material";
import { StringInput } from "../atoms/StringInput";
import { useProfileContext } from "../contexts/ProfileProvider";
import { DateInput } from "./Inputs/DateInput";
import { EmailInput } from "./Inputs/EmailInput";
import { PhoneInput } from "./Inputs/PhoneInput";

export const PersonalInput = () => {
  const {personal: {state: personal, actions: {
    setPersonal
  }}} = useProfileContext();

  return (
    <Box sx={{ width: 1 }}>
      <h4>Personal</h4>
      <Grid container spacing={2}>
        <StringInput
          label="Display Name"
          value={personal.displayName}
          onChange={(e) =>
            setPersonal({ ...personal, displayName: e.target.value })
          }
          width={12}
        />
        <StringInput
          label="First Name"
          value={personal.firstName}
          onChange={(e) =>
            setPersonal({ ...personal, firstName: e.target.value })
          }
          width={5}
        />
        <StringInput
          label="Last Name"
          value={personal.lastName}
          onChange={(e) =>
            setPersonal({ ...personal, lastName: e.target.value })
          }
          width={7}
        />
        <EmailInput
          width={4}
          value={personal.email}
          setValue={(e) => setPersonal({ ...personal, email: e })}
        />
        <PhoneInput
          width={4}
          value={personal.phone}
          setValue={(e) => setPersonal({ ...personal, phone: e })}
        />
        <DateInput
          value={personal.date}
          setValue={(e) => setPersonal({ ...personal, date: e })}
          width={4}
          label={"Date of Birth"}
        />
      </Grid>
    </Box>
  );
};
