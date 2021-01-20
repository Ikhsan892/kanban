import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import ProgressBar from "./ProgressBar";
import FormAdd from "./FormAdd";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  todo: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  card: {
    width: 250,
    minHeight: 300,
    maxHeight: "80vh",
    overflowY: "auto",
    marginRight: 50,
  },
  list: {
    minHeight: 50,
    marginBottom: 10,
    border: "1px solid lightgray",
  },
  heading: {
    marginBottom: 9,
  },
  datestatus: {
    marginTop: 10,
    marginBottom: 10,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  grid: {
    alignItems: "center",
    display: "flex",
  },
  status: {
    color: "red",
    marginLeft: 3,
  },
  deadline: {
    marginLeft: 3,
  },
  label: {
    display: "flex",
    flexFlow: "wrap",
    minHeight: 55,
    alignContent: "space-between",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  keterangan: {
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  fab: {
    position: "fixed",
    right: 100,
    bottom: 70,
    zIndex: 999,
  },
}));

export default function Home() {
  const classes = useStyles();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [defaultValue, setDefaultValue] = React.useState({
    nama_kegiatan: "",
    keterangan: "",
    date: "",
    labels : [],
    progress : 0,
  });
  const [typeForm, setTypeForm] = React.useState("");

  const handleModalOpen = () => {
    setTypeForm("");
    setModalOpen(true);
  };
  const handleModalEditOpen = () => {
    setTypeForm("edit");
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.drawerHeader} />
      <div className={classes.todo}>
        <Card className={classes.card}>
          <CardHeader title="Rencana" />
          <CardContent>
            <Card className={classes.list}>
              <CardContent>
                <Typography variant="caption">
                  <strong>Membuang Sampah</strong>
                </Typography>
                <Typography variant="subtitle1" className={classes.keterangan}>
                  isi Sampahblbalblabllablablla
                </Typography>
                <Divider />
                <div className={classes.datestatus}>
                  <div className={classes.grid}>
                    <AccessTimeIcon />
                    <small className={classes.deadline}>1 Mg, 20:00</small>
                  </div>
                  <div className={classes.grid}>
                    <BookmarksIcon />
                    <small className={classes.status}>Rencana</small>
                  </div>
                </div>
                <div className={classes.label}>
                  <Chip
                    label="disuruh"
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                  <Chip
                    label="masak"
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                  <Chip
                    label="males"
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                  <Chip
                    label="males"
                    variant="outlined"
                    color="primary"
                    size="small"
                  />
                </div>
                <Typography variant="subtitle2">Progress</Typography>
                <ProgressBar value={30} />
                <Divider />
                <div
                  style={{
                    marginBottom: 10,
                  }}
                />
                <ButtonGroup
                  size="small"
                  color="secondary"
                  aria-label="outlined secondary button group"
                >
                  <Button>Detail</Button>
                  <Button onClick={handleModalEditOpen}>Edit</Button>
                  <Button>Delete</Button>
                </ButtonGroup>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
      <FormAdd
        open={modalOpen}
        handleClose={handleModalClose}
        type={typeForm}
        {...defaultValue}
      />
      <Fab
        variant="extended"
        color="secondary"
        aria-label="tambah"
        className={classes.fab}
        onClick={handleModalOpen}
      >
        <AddIcon className={classes.extendedIcon} />
        Tambah
      </Fab>
    </div>
  );
}
