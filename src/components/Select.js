import {
  FormControl,
  InputLabel,
  MenuItem,
  Select as SelectBase,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    minWidth: 220,
  },
}));

const Select = ({ label, name, value, onChange, menuData }) => {
  const classes = useStyle();
  return (
    <FormControl variant="outlined" className={classes.root}>
      <InputLabel>{label}</InputLabel>
      <SelectBase label={label} name={name} value={value} onChange={onChange}>
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {menuData.map((value, index) => (
          <MenuItem value={value} key={index}>
            {value}
          </MenuItem>
        ))}
      </SelectBase>
    </FormControl>
  );
};

export default Select;

// import {
//   FormControl,
//   FormHelperText,
//   Grid,
//   InputLabel,
//   MenuItem,
//   Select,
// } from "@material-ui/core";
// // import { Person, Call, LocationOn, Mail } from "@material-ui/icons";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//   selectFieldText: {
//     "&.MuiInputBase-root": {
//       color: "#eaad4e",
//     },
//     // "&.MuiList-root": {
//     //   backgroundColor: "#311D40",
//     //   color: "#eaad4e",
//     //   border: "1px solid #eaad4e",
//     // },
//   },
//   formController: {
//     // border: "1px solid red",
//     width: "100%",
//     // maxheight: "25px",
//   },
//   subGridContainer: {
//     display: "flex",
//     flexDirection: "row",
//   },
// }));

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

// export default function SelectComponent({
//   person,
//   call,
//   location,
//   mail,
//   accessTime,
//   label,
//   name,
//   value,
//   onChange,
//   option,
//   error = null,
// }) {
//   // console.log(`select`, error);
//   const classes = useStyles();
//   return (
//     <Grid item lg={6} sm={12} className={classes.subGridContainer}>
//       {person && person}
//       {call && call}
//       {location && location}
//       {mail && mail}
//       {accessTime && accessTime}
//       {option && (
//         <FormControl
//           variant="outlined"
//           className={classes.formController}
//           size="small"
//           {...(error && { error: true })}
//         >
//           <InputLabel>{label}</InputLabel>
//           <Select
//             label={label}
//             name={name}
//             value={value}
//             onChange={onChange}
//             className={classes.selectFieldText}
//             MenuProps={MenuProps}
//           >
//             {/* <MenuItem value="">None</MenuItem> */}
//             {option.map((data, index) => (
//               <MenuItem value={data} key={index}>
//                 {data}
//               </MenuItem>
//             ))}
//           </Select>
//           {error && <FormHelperText>{error}</FormHelperText>}
//         </FormControl>
//       )}
//     </Grid>
//   );
// }
