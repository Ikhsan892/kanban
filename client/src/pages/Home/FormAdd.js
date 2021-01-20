import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Slider from "@material-ui/core/Slider";
import Autocomplete from "@material-ui/lab/Autocomplete";
import DateMomentUtils from "@date-io/moment";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DialogTitle from "@material-ui/core/DialogTitle";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];
export default function FormAdd({ open, handleClose, type, ...rest }) {
  const [kategori, setKategori] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2020-08-18T21:11:54")
  );
  const handleChange = (event) => {
    setKategori(event.target.value);
  };
  const valuetext = (value) => {
    return `${value}% `;
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {type === "edit" ? "Edit Kegiatan" : "Tambah Kegiatan"}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            value={rest.nama_kegiatan}
            label="Nama Kegiatan"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="keterangan"
            value={rest.keterangan}
            label="Keterangan"
            type="text"
            fullWidth
          />
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <MuiPickersUtilsProvider utils={DateMomentUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Deadline"
                format="MM/dd/yyyy"
                value={rest.date === "" ? selectedDate : rest.date}
                onChange={handleDateChange}
                style={{
                  width: "45%",
                }}
                KeyboardButtonProps={{
                  "aria-label": "deadline",
                }}
              />
            </MuiPickersUtilsProvider>
            <FormControl
              style={{
                width: "45%",
              }}
            >
              <InputLabel id="demo-simple-select-label">Kategori</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={kategori}
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Autocomplete
            multiple
            id="tags-standard"
            onChange={(evt, value) => console.log(value)}
            options={top100Films.map((option) => option.title)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="Choose Few Labels"
                placeholder="Label"
              />
            )}
          />
          <Typography
            id="discrete-slider"
            gutterBottom
            style={{
              marginTop: 10,
            }}
          >
            Progress
          </Typography>
          <Slider
            defaultValue={30}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
